import express from 'express';
import { BeerTimeOptions } from '../models/options';

import { Workspace } from '../models/workspace.model';
import workspaceService from '../services/workspace.service';

class WorkspaceController {
  public static getInstance(): WorkspaceController {
    if (!WorkspaceController.instance) {
      WorkspaceController.instance = new WorkspaceController();
    }
    return WorkspaceController.instance;
  }

  private static instance: WorkspaceController;

  public async activateBeerTime(req: express.Request, res: express.Response): Promise<void> {
    try {
      await workspaceService.updateWorkspaceBeerTimeOption(req.params.workspaceId, 'active', true);
      res.status(200).json('success');
    } catch (error) {
      res.status(error.errorCode).json(error);
    }
  }

  public async deactivateBeerTime(req: express.Request, res: express.Response): Promise<void> {
    try {
      await workspaceService.updateWorkspaceBeerTimeOption(req.params.workspaceId, 'active', false);
      res.status(200).json('success');
    } catch (error) {
      res.status(error.errorCode).json(error);
    }
  }

  public async getWorkspace(req: express.Request, res: express.Response): Promise<void> {
    try {
      const workspace: Workspace | null = await workspaceService.getById(req.params.workspaceId);
      res.status(200).json(workspace);
    } catch (error) {
      res.status(error.errorCode).json(error);
    }
  }

  public async getWorkspaceBeerTimeOptions(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    try {
      const beerTimeOptions: BeerTimeOptions | null = await workspaceService.getBeerTimeOptions(
        req.params.workspaceId
      );
      res.status(200).json(beerTimeOptions);
    } catch (error) {
      res.status(error.errorCode).json(error);
    }
  }
}

export default WorkspaceController.getInstance();
