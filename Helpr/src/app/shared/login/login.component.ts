import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public authUrl$!: Observable<string>;

  public constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.authUrl$ = this.authenticationService.getAuthUrl()
      // tslint:disable-next-line: no-any
      .pipe(map((authUrl: any) => authUrl as string + '&redirect_uri=' + window.location.href.split('?')[0]));

    this.authUrl$.subscribe();

    if (this.route.snapshot.queryParamMap.has('code')) {
      const slackCode: string = this.route.snapshot.queryParamMap.get('code') as string;
      this.authenticationService.requestToken(slackCode).subscribe(() => {
        this.router.navigate(['dashboard']);
      });
    }
  }
}
