import express from 'express';

import { CommonRoutesConfig } from '../common/common.routes.config';

export class PublicsRoutes extends CommonRoutesConfig {
  public constructor(app: express.Application) {
    super(app, 'PublicsRoutes');
  }

  protected configureRoutes(): express.Application {
    this.app
      .route(`/publics/help`)
      .get((req: express.Request, res: express.Response) => {
        res
          .status(200)
          .send(
            `All my settings are also configurable through the dashboard at https://helper.armoury.ro`
          );
      });

    return this.app;
  }
}
