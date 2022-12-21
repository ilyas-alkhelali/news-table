import React, { useState, useEffect, useRef, RefObject } from "react";
import { EnumType } from "typescript";
import { IOption } from "../../../models/IOption";
import s from "./MySelect.module.scss";
interface MySelectProps {
  defaultValue: string | undefined;
  options: IOption[];
  onClick: (props: IOption) => void;
}

const MySelect: React.FC<MySelectProps> = ({
  defaultValue,
  options,
  onClick,
}) => {
  const defItemRef = useRef<HTMLDivElement | null>(null);
  const itemListRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener("click", displayNoneSelect);
    if (options.length < 7 && itemListRef.current !== null) {
      itemListRef.current.style.overflowY = "hidden";
    }
  }, []);

  const [isDisplayOptions, setIsDisplayOptions] = useState<boolean>(false);

  const displayNoneSelect = (e: MouseEvent) => {
    if (e.target != defItemRef.current) {
      setIsDisplayOptions(false);
    }
  };

  return (
    <div className={s.select}>
      <div
        className={s.default_item}
        ref={defItemRef}
        onClick={() => setIsDisplayOptions(true)}
      >
        {defaultValue}
      </div>
      <div
        ref={itemListRef}
        className={
          isDisplayOptions ? `${s.item_list} ${s.list_display}` : s.item_list
        }
      >
        {options.map((option) => (
          <div
            className={s.item}
            onClick={() => onClick({ value: option.value, name: option.name })}
            key={option.value}
          >
            {option.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySelect;
