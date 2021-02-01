import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public constructor(
    private readonly cookieService: CookieService,
    private readonly httpClient: HttpClient
  ) { }

  // tslint:disable-next-line: no-any
  public getAuthUrl(): Observable<any> {
    return this.httpClient.get(`${environment.baseApiPath}dashboard/login`);
  }

  // tslint:disable-next-line: no-any
  public getBotAdditionUrl(): Observable<any> {
    return this.httpClient.get(`${environment.baseApiPath}dashboard/botUrl`);
  }

  public isAuthenticated(): boolean {
    if (this.cookieService.check('helpr_cookie')) {
      return true;
    }
    return false;
  }

  // tslint:disable-next-line: no-any
  public requestToken(code: string): Observable<any> {
    return this.httpClient.get(`${environment.baseApiPath}dashboard/token`, {
      params: {
        code,
        redirect_uri: window.location.href.split('?')[0],
      },
      withCredentials: true
    });
  }
}
