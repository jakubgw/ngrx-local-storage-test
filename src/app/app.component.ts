import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { AppState } from './app.state';

import * as AppActions from './app.actions'; 
//import { AppState, localStorageSyncReducer } from './app.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {
  private text$: Observable<string>;
  title = 'app';
  
  constructor(private store: Store<AppState>){

		
    this.text$  = this.store.select(state => state.text);


  }

  get() {
    this.store.dispatch(new AppActions.GetMessage());
  }

}
