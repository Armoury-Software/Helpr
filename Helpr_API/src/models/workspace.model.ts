import workspaceService from '../services/workspace.service';
import { BeerTimeOptions } from './options';

export interface Workspace {
  beerTime: BeerTimeOptions;
  creatorId: string;
  moderatorsIds: string[];
  teamId: string;
}

export class Workspace implements Workspace {
  public constructor(
    creatorId: string,
    moderatorsIds: string[],
    teamId: string
  ) {
    this.creatorId = creatorId;
    this.moderatorsIds = moderatorsIds;
    this.teamId = teamId;
  }

  public update(): any {
    workspaceService.updateWorkspace(this);
  }
}
