import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthenticationService } from 'src/app/shared/services/authentication/authentication.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent {
  public botUrl$!: Observable<string>;

  public constructor(
    private readonly authenticationService: AuthenticationService,
  ) {
    this.botUrl$ = this.authenticationService.getBotAdditionUrl()
      // tslint:disable-next-line: no-any
      .pipe(map((botUrl: any) => botUrl as string));

    this.botUrl$.subscribe();
  }
}
