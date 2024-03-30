import { configureStore } from "@reduxjs/toolkit";
import { YoutubeSliceReducer } from ".";


export const store = configureStore({
    reducer:{
        youtubeApp:YoutubeSliceReducer 
    }
    })
    
    export type RootState = ReturnType<typeof store.getState>;
    export type AppDispatch = typeof store.dispatch;