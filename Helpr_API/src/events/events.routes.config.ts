import express from 'express';

import { CommonRoutesConfig } from '../common/common.routes.config';
import slackService from '../services/slack.service';

export class EventsRoutes extends CommonRoutesConfig {
  public constructor(app: express.Application) {
    super(app, 'EventsRoutes');
  }

  protected configureRoutes(): express.Application {
    this.app
      .route(`/events`)
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send(`List of users`);
      })
      .post((req: express.Request, res: express.Response) => {
        res.status(200).send(`Post to users`);
      });

    this.app
      .route(`/events/channel`)
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
        /*slackService
          .client()
          .chat.postMessage({
            channel: req.body.event.channel,
            text: req.body.event.text,
          });*/
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
