import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import s from "./NewsById.module.scss";

const NewsById: FC = () => {
  const { news } = useAppSelector((state) => state.OneNewsSlice);
  const [newStr, setNewStr] = useState<string>("");
  const goTo = useNavigate();
  useEffect(() => {
    if (news.content !== null) {
      const str = news.content.split("[");
      setNewStr(str[0]);
      console.log(newStr);
    }
  }, []);
  return (
    <div className={s.container}>
      <div className={s.title}>{news?.title}</div>
      <div className={s.image_block}>
        <img className={s.image} src={news?.urlToImage} alt="error" />
      </div>
      <div className={s.subtitle}>
        <div className={s.author}>{news?.author}</div>
        <div className={s.date}>{news.publishedAt.slice(0, 10)}</div>
      </div>
      <div className={s.text_block}>
        <div className={s.text}>
          {newStr.slice(0, -3)}{" "}
          <a target={"_blank"} className={s.link} href={`${news.url}`}>
            go to source
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsById;
