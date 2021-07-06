import * as axios from 'axios';
import * as jwt from 'jsonwebtoken';
import qs from 'qs';
import { environment } from '../environment/environment';
import workspaceService from './workspace.service';

class AuthenticationService {
  public static getInstance(): AuthenticationService {
    if (!AuthenticationService.instance) {
      AuthenticationService.instance = new AuthenticationService();
    }
    return AuthenticationService.instance;
  }

  private static instance: AuthenticationService;

  public generateAccessToken(
    slackToken: string,
    teamId: string,
    userId: string
  ): string {
    return jwt.sign(
      {
        slackToken,
        teamId,
        userId,
      },
      environment.security.jwtSecret,
      { expiresIn: '1y' }
    );
  }

  public async requestToken(code: string, host: string): Promise<string> {
    return new Promise(async (resolve: any, reject: any) => {
      const options: axios.AxiosRequestConfig = {
        method: 'POST' as axios.Method,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify({
          code,
          client_id: environment.helpr.clientId,
          client_secret: environment.helpr.botSecret,
          redirect_uri: host,
        }),
        url: 'https://slack.com/api/oauth.v2.access',
      };
      axios.default.request(options).then(
        (response: axios.AxiosResponse) => {
          workspaceService.initializeWorkspaceMap(
            response.data.team.id,
            response.data.authed_user.id
          );
          resolve(
            this.generateAccessToken(
              response.data.access_token,
              response.data.team.id,
              response.data.authed_user.id
            )
          );
        },
        () => {
          reject();
        }
      );
    });
  }
}

export default AuthenticationService.getInstance();
