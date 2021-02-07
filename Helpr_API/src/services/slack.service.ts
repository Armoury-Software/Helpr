import { WebClient } from '@slack/web-api';
import { environment } from '../environment/environment';

class SlackService {
  public static getInstance(): SlackService {
    if (!SlackService.instance) {
      SlackService.instance = new SlackService();
    }
    return SlackService.instance;
  }

  public get botUrl(): string {
    return `https://slack.com/oauth/v2/authorize?client_id=${environment.helpr.clientId}&scope=app_mentions:read,channels:history,channels:join,channels:read,chat:write,chat:write.customize,commands,emoji:read,im:history,im:read,mpim:history,groups:history,users:write,reminders:write,reminders:read,reactions:write,reactions:read,incoming-webhook&user_scope=`;
  }

  public get loginUrl(): string {
    return `https://slack.com/oauth/v2/authorize?scope=team:read&client_id=${environment.helpr.clientId}`;
  }

  private static instance: SlackService;
  private webClient: WebClient = new WebClient(environment.helpr.botOAuthToken);

  public client(): WebClient {
    return this.webClient;
  }
}

export default SlackService.getInstance();
