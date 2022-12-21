import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INewsData } from "../../models/INewsData";
import { IOption } from "../../models/IOption";

interface CategoryState {
  chosenCategoryValue: string;
  chosenCategoryName: string;
}
const initialState: CategoryState = {
  chosenCategoryValue: "general",
  chosenCategoryName: "General",
};

const CategorySlice = createSlice({
  name: "CategorySlice",
  initialState: initialState,
  reducers: {
    chooseCategory(state, action: PayloadAction<IOption>) {
      state.chosenCategoryValue = action.payload.value;
      state.chosenCategoryName = action.payload.name;
    },
  },
});

export default CategorySlice.reducer;
export const { chooseCategory } = CategorySlice.actions;
