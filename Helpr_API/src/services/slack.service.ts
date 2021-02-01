import { WebClient } from '@slack/web-api';
import * as axios from 'axios';
import qs from 'qs';

class SlackService {
  public static getInstance(): SlackService {
    if (!SlackService.instance) {
      SlackService.instance = new SlackService();
    }
    return SlackService.instance;
  }

  public get botUrl(): string {
    return `https://slack.com/oauth/v2/authorize?client_id=${process.env.HELPR_CLIENT_ID}&scope=app_mentions:read,channels:history,channels:join,channels:read,chat:write,chat:write.customize,commands,emoji:read,im:history,im:read,mpim:history,groups:history,users:write,reminders:write,reminders:read,reactions:write,reactions:read,incoming-webhook&user_scope=`;
  }

  public get loginUrl(): string {
    return `https://slack.com/oauth/v2/authorize?scope=team:read&client_id=${process.env.HELPR_CLIENT_ID}`;
  }

  private static instance: SlackService;
  private webClient: WebClient = new WebClient(
    process.env.HELPR_BOT_OAUTH_TOKEN
  );

  public client(): WebClient {
    return this.webClient;
  }

  public async requestToken(code: string, host: string): Promise<string> {
    return new Promise(async (resolve: any, reject: any) => {
      const options: axios.AxiosRequestConfig = {
        method: 'POST' as axios.Method,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify({
          code,
          client_id: process.env.HELPR_CLIENT_ID,
          client_secret: process.env.HELPR_BOT_SECRET,
          redirect_uri: host,
        }),
        url: 'https://slack.com/api/oauth.v2.access',
      };
      axios.default.request(options).then(
        (response: axios.AxiosResponse) => {
          resolve(response.data.access_token);
        },
        () => {
          reject();
        }
      );
    });
  }
}

export default SlackService.getInstance();
