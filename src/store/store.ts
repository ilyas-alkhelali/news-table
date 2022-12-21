import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { NewsAPI } from "../services/NewsService";
import CategorySlice from "./reducers/CategorySlice"
import CountrySlice from "./reducers/CountrySlice";
import OneNewsSlice from "./reducers/OneNewsSlice";
const rootReducers = combineReducers({
  [NewsAPI.reducerPath]: NewsAPI.reducer,
  CategorySlice : CategorySlice,
  CountrySlice : CountrySlice,
  OneNewsSlice: OneNewsSlice
});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(NewsAPI.middleware),
  });
};
export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
