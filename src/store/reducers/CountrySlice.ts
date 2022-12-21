import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOption } from "../../models/IOption";
import { COUNTRY } from "../../queryParameters/Country";

interface CountryState {
  chosenCountryValue: string;
  chosenCountryName: string;
}
const initialState: CountryState = {
  chosenCountryValue: COUNTRY.USA,
  chosenCountryName: "USA",
};

const CountrySlice = createSlice({
  name: "CountrySlice",
  initialState: initialState,
  reducers: {
    chooseCountry(state, action: PayloadAction<IOption>) {
      state.chosenCountryValue = action.payload.value;
      state.chosenCountryName = action.payload.name;
    },
  },
});

export default CountrySlice.reducer;
export const { chooseCountry } = CountrySlice.actions;
