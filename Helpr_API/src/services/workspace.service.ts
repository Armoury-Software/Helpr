import firebase from 'firebase';
import databaseService from './database.service';

import { Response, RESPONSE_TYPE } from '../models/error.model';
import { BeerTimeOptions } from '../models/options';
import { Workspace } from '../models/workspace.model';

class WorkspaceService {
  public static getInstance(): WorkspaceService {
    if (!WorkspaceService.instance) {
      WorkspaceService.instance = new WorkspaceService();
    }
    return WorkspaceService.instance;
  }

  private static instance: WorkspaceService;
  private databaseRef: string = 'workspaces';

  public getBeerTimeOptions(workspaceId: string): Promise<BeerTimeOptions | null> {
    return new Promise(async (resolve: any, reject: any) => {
      databaseService
        .getDatabase()
        .ref(`${this.databaseRef}/${workspaceId}/beertime`)
        .get()
        .then((result: firebase.database.DataSnapshot) => {
          if (result.exists()) {
            resolve(result.val());
          } else {
            reject(new Response(RESPONSE_TYPE.RESPONSE_ERROR, 'BeerTime options are undefined'));
          }
        });
    });
  }

  public getById(workspaceId: string): Promise<Workspace | null> {
    return new Promise(async (resolve: any, reject: any) => {
      databaseService
        .getDatabase()
        .ref(`${this.databaseRef}/${workspaceId}`)
        .get()
        .then((result: firebase.database.DataSnapshot) => {
          if (result.exists()) {
            resolve(result.val());
          } else {
            reject(
              new Response(
                RESPONSE_TYPE.RESPONSE_ERROR,
                `Workspace with id ${workspaceId} was not found`
              )
            );
          }
        });
    });
  }

  public initializeWorkspaceMap(teamId: string, creatorId: string): void {
    const databaseTeamRef: firebase.database.Reference = databaseService
      .getDatabase()
      .ref(`${this.databaseRef}/${teamId}`);

    databaseTeamRef.get().then((result: firebase.database.DataSnapshot) => {
      if (!result.exists()) {
        databaseTeamRef.set({
          creatorId,
          moderatorsIds: [creatorId],
          workspaceId: teamId,
        });
      } else {
        const workspace: Workspace = result.val();
        if (!(workspace.creatorId === creatorId || workspace.moderatorsIds.includes(creatorId))) {
          databaseTeamRef.child('moderatorsIds').push(creatorId);
        }
      }
    });
  }

  public updateWorkspace(workspace: Workspace): void {
    databaseService.getDatabase().ref(`${this.databaseRef}/${workspace.teamId}`).update(workspace);
  }

  public updateWorkspaceBeerTimeOption(
    workspaceId: string,
    option: string,
    value: any
  ): Promise<any> {
    return new Promise(async (resolve: any, reject: any) => {
      try {
        resolve(
          databaseService
            .getDatabase()
            .ref(`${this.databaseRef}/${workspaceId}/beertime/${option}`)
            .set(value)
        );
      } catch (error) {
        reject(new Response(RESPONSE_TYPE.RESPONSE_ERROR, `BeerTime ${option} update failed`));
      }
    });
  }
}

export default WorkspaceService.getInstance();
