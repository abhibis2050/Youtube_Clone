import { createAsyncThunk } from "@reduxjs/toolkit";

interface ImportMeta {
  env: {
    VITE_APP_YOUTUBE_DATA_API_KEY: string;
  };
}

const API_KEY = import.meta.env.VITE_APP_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk("youtubeApp/homePageVideos",async(isNext:boolean,{getState})=>{
  const {
    youtubeApp:{}
  }
})


