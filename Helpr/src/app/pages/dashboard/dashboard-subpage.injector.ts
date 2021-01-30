import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { DashboardSubpageComponent } from 'src/app/shared/models/component.descriptor';

@Injectable()
export class DashboardSubpageInjector {
  public componentNavigator$: Subject<string> = new Subject();
  public componentSubject$!: BehaviorSubject<DashboardSubpageComponent>;

  public constructor(
    private _componentSubject$: BehaviorSubject<DashboardSubpageComponent>,
    private _componentNavigator$: Subject<string>
  ) {
    this.componentSubject$ = this._componentSubject$;
    this.componentNavigator$ = this._componentNavigator$;
  }
}
