import express from 'express';
import dashboardController from '../../controllers/dashboard.controller';
import workspaceController from '../../controllers/workspace.controller';

import { CommonRoutesConfig } from '../common/common.routes.config';

export class DashboardRoutes extends CommonRoutesConfig {
  public constructor(app: express.Application) {
    super(app, 'DashboardRoutes');
  }

  protected configureRoutes(): express.Application {
    this.app.get(`/dashboard/botUrl`, [dashboardController.getBotUrl]);
    this.app.get(`/dashboard/login`, [dashboardController.getLoginUrl]);
    this.app.get(`/dashboard/token`, [dashboardController.getToken]);

    this.app.get(`/dashboard/workspace/:workspaceId`, [workspaceController.getWorkspace]);

    this.app.get(`/dashboard/workspace/:workspaceId/beertime`, [
      workspaceController.getWorkspaceBeerTimeOptions,
    ]);
    this.app.post(`/dashboard/workspace/:workspaceId/beertime/activate`, [
      workspaceController.activateBeerTime,
    ]);
    this.app.post(`/dashboard/workspace/:workspaceId/beertime/deactivate`, [
      workspaceController.deactivateBeerTime,
    ]);

    return this.app;
  }
}
