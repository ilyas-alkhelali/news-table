import React from "react";
import s from "./PageItem.module.scss";

interface PageItemProps {
  page: number;
  item: number;
  handler: (page: number) => void;
}
const PageItem: React.FC<PageItemProps> = ({ page, item, handler }) => {
  return (
    <>
      {page === item ? (
        <div className={s.item_chosen} onClick={() => handler(item)}>
          {item}
        </div>
      ) : (
        <div className={s.item} onClick={() => handler(item)}>
          {item}
        </div>
      )}
    </>
  );
};

export default PageItem;
