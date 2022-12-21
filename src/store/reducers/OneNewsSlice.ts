import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INewsData } from "../../models/INewsData";

interface NewsState {
  news: INewsData;
}
const initialState: NewsState = {
  news: {
    content: "",
    author: "",
    description: "",
    url: "",
    urlToImage: "",
    source: [],
    title: "",
    publishedAt: "",
  },
};

const OneNewsSlice = createSlice({
  name: "OneNewsSlice",
  initialState: initialState,
  reducers: {
    setNews(state, action: PayloadAction<INewsData>) {
      state.news = action.payload;
    },
  },
});

export default OneNewsSlice.reducer;
export const { setNews } = OneNewsSlice.actions;
