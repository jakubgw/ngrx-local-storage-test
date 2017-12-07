import { AppState } from './app.state'; 

import {Action} from '@ngrx/store'; 

export const GET_MESSAGE = '[App] GET_MESSAGE'; 

export const GET_MESSAGE_SUCCESS = "[Todo] GET_MESSAGE_SUCCESS"; 



export class GetMessage implements Action {
    readonly type = GET_MESSAGE; 

} 


export class GetMessageSuccess implements Action {
    readonly type = GET_MESSAGE_SUCCESS;

    constructor(public text: string){}; 

} 



export type All = GetMessage  | GetMessageSuccess ;