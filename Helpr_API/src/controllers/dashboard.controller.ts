import express, { CookieOptions } from 'express';
import { COOKIE_OPTIONS } from '../environment/cookie.options';
import { environment } from '../environment/environment';
import authenticationService from '../services/authentication.service';

import slackService from '../services/slack.service';

class DashboardController {
  public static getInstance(): DashboardController {
    if (!DashboardController.instance) {
      DashboardController.instance = new DashboardController();
    }
    return DashboardController.instance;
  }

  private static instance: DashboardController;

  public async getBotUrl(_: express.Request, res: express.Response): Promise<void> {
    res.status(200).json(slackService.botUrl);
  }

  public async getLoginUrl(_: express.Request, res: express.Response): Promise<void> {
    res.status(200).json(slackService.loginUrl);
  }

  public async getToken(req: express.Request, res: express.Response): Promise<void> {
    if (!req.query.code) {
      res.status(404).json(`Invalid query parameter 'code'`);
      return;
    }
    if (!req.query.redirect_uri) {
      res.status(404).json(`Invalid query parameter 'request_uri'`);
      return;
    }
    const token: string = await authenticationService.requestToken(
      req.query.code as string,
      req.query.redirect_uri as string
    );

    res.cookie('helpr_cookie', token, COOKIE_OPTIONS);
    res.status(200).send();
  }
}

export default DashboardController.getInstance();
