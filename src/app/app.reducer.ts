import { AppState, initializeAppState } from './app.state'; 

import * as AppActions from './app.actions'; 

export type Action = AppActions.All;



export function AppReducer(state, action: Action) {

    switch (action.type) {
        case AppActions.GET_MESSAGE :
            return "Loading"
        case AppActions.GET_MESSAGE_SUCCESS : 
            return  action.text
        default : 
            return initializeAppState().text;
    }
}
