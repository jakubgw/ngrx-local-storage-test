export interface AppState { 
    text : string
}


export  const initializeAppState  = function() : AppState{
    return {
       text : localStorage.getItem("text")
    }
}
