import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule,ActionReducerMap, ActionReducer, MetaReducer  } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppEffects } from './app.effects';
import { EffectsModule } from '@ngrx/effects';

import * as AppReducer from './app.reducer'
import { AppState } from './app.state';



const reducers: ActionReducerMap<AppState> = { text: AppReducer.AppReducer};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['text']})(reducer);
}
 const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    StoreModule.forRoot(
      reducers,
      {metaReducers}
    ),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
