import React from "react";
import { CATEGORY } from "../../queryParameters/Category";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import s from "./NavBar.module.scss";
import { chooseCategory } from "../../store/reducers/CategorySlice";
import { useNavigate } from "react-router-dom";
import List from "../List";
import { chooseCountry } from "../../store/reducers/CountrySlice";
import { useConvertToOptionsArray } from "../../hooks/toArrayConvert";
import { COUNTRY } from "../../queryParameters/Country";
import MySelect from "../UI/MySelect/MySelect";
import SearchIcon from "@mui/icons-material/Search";
import { IOption } from "../../models/IOption";

interface SelectHandlerProps {
  value: string;
  name: string;
}
const Navbar: React.FC = () => {
  const { chosenCategoryName, chosenCategoryValue } = useAppSelector(
    (state) => state.CategorySlice
  );
  const { chosenCountryName, chosenCountryValue } = useAppSelector(
    (state) => state.CountrySlice
  );

  const dispatch = useAppDispatch();

  const goTo = useNavigate();

  const { optionsArray: countries } = useConvertToOptionsArray(COUNTRY);
  const { optionsArray: categories } = useConvertToOptionsArray(CATEGORY);
  const chooseHandler = (category: IOption) => {
    dispatch(chooseCategory(category));
  };
  const selectCategoryHandler = ({ value, name }: SelectHandlerProps) => {
    dispatch(chooseCategory({ value: value, name: name }));
  };
  const selectCountryHandler = ({ value, name }: SelectHandlerProps) => {
    dispatch(chooseCountry({ value: value, name: name }));
  };
  return (
    <div className={s.navbar_container}>
      <div className={s.navbar_content}>
        <div className={s.navbar_list}>
          <List
            items={categories}
            renderItem={(category: IOption) =>
              category.value == chosenCategoryValue ? (
                <div key={category.value} className={s.chosen_list_item}>
                  <p>{category.name}</p>
                </div>
              ) : (
                <div
                  className={s.list_item}
                  key={category.value}
                  onClick={() => chooseHandler(category)}
                >
                  <p>{category.name}</p>
                </div>
              )
            }
          />
        </div>
        <MySelect
          defaultValue={chosenCountryName}
          options={countries}
          onClick={selectCountryHandler}
        />
        <div className={s.select_list}>
          <MySelect
            defaultValue={chosenCategoryName}
            options={categories}
            onClick={selectCategoryHandler}
          />
        </div>
        <div className={s.icon} onClick={() => goTo("/search")}>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
