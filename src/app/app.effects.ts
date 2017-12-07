
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import * as AppActions from './app.actions'; 


@Injectable()
export class AppEffects {

  constructor(
    private actions$: Actions
  ) { }
  
  @Effect()
  GetTodos$: Observable<Action> = this.actions$.
    ofType<AppActions.GetMessage>(AppActions.GET_MESSAGE)
    .map(action => new AppActions.GetMessageSuccess("TEST"))
}