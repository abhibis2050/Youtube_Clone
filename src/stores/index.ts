import { InitialState } from "../Types.ts";
import { createSlice ,PayloadAction} from "@reduxjs/toolkit";



export const initialState:InitialState={
    videos:[],
    currentPlaying:null,
    searchTerms:"",
    searchResults:[],
    nextPageToken:null,
    recommendedVideos:[] 

}


const YoutubeSlice = createSlice({
    name:"youtubeApp",
    initialState,
    reducers:{

    },
    extraReducers:((builder)=>{

    })
})



export const YoutubeSliceReducer = YoutubeSlice.reducer

