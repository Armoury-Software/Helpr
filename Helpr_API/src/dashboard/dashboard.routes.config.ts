import express, { CookieOptions } from 'express';

import { CommonRoutesConfig } from '../common/common.routes.config';
import slackService from '../services/slack.service';

export class DashboardRoutes extends CommonRoutesConfig {
  public constructor(app: express.Application) {
    super(app, 'DashboardRoutes');
  }

  protected configureRoutes(): express.Application {
    this.app
      .route(`/dashboard/token`)
      .get(async (req: express.Request, res: express.Response) => {
        if (!req.query.code) {
          res.status(404).json(`Invalid query parameter 'code'`);
          return;
        }
        if (!req.query.redirect_uri) {
          res.status(404).json(`Invalid query parameter 'request_uri'`);
          return;
        }
        const token: string = await slackService.requestToken(
          req.query.code as string,
          req.query.redirect_uri as string
        );

        let cookieOptions: CookieOptions = {
          maxAge: 12 * 31 * 24 * 60 * 60 * 1000,
          httpOnly: false,
        };

        if (process.env.NODE_ENV === 'production') {
          cookieOptions = {
            ...cookieOptions,
            domain: '.armoury.ro',
            secure: true,
          };
        }

        res.cookie('helpr_cookie', token, cookieOptions);
        res.status(200).send();
      });

    this.app
      .route(`/dashboard/login`)
      .get((req: express.Request, res: express.Response) => {
        res.status(200).json(slackService.loginUrl);
      });

    this.app
      .route(`/dashboard/botUrl`)
      .get((req: express.Request, res: express.Response) => {
        res.status(200).json(slackService.botUrl);
      });

    this.app
      .route(`/dashboard/beertime`)
      .all(
        (
          req: express.Request,
          res: express.Response,
          next: express.NextFunction
        ) => {
          next();
        }
      )
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send(`GET requested for id ${req.params.userId}`);
      })
      .post((req: express.Request, res: express.Response) => {
        res.status(200).send(req.body.challenge);
      })
      .patch((req: express.Request, res: express.Response) => {
        res.status(200).send(`PATCH requested for id ${req.params.userId}`);
      })
      .delete((req: express.Request, res: express.Response) => {
        res.status(200).send(`DELETE requested for id ${req.params.userId}`);
      });

    return this.app;
  }
}
