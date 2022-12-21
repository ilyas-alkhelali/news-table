import React, { ChangeEvent } from "react";
import s from "./MyInput.module.scss";

interface MyInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const MyInput: React.FC<MyInputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      className={s.text_field_input}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default MyInput;
