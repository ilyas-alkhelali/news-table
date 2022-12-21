import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { INewsData } from "../../models/INewsData";
import { setNews } from "../../store/reducers/OneNewsSlice";
import defaultImage from "./../../pictures/news.jpg";
import s from "./NewsListItem.module.scss";
interface NewsListItemProps {
  item: INewsData;
}

const NewsListItem: React.FC<NewsListItemProps> = ({ item }) => {
  const ref = useRef<HTMLImageElement | null>(null);
  const dispatch = useAppDispatch();
  const goTo = useNavigate();
  const err = () => {
    if (ref.current != null) {
      ref.current.src = defaultImage;
    }
  };
  const goToThisNews = () => {
    dispatch(setNews(item));
    goTo("/news-by-id");
  };
  return (
    <div className={s.item}>
      <div className={s.text}>
        <div className={s.title}>{item.title}</div>
        <div className={s.content}>{item.description}</div>
        <div className={s.link} onClick={() => goToThisNews()}>
          Read more ...
        </div>
      </div>
      {item.urlToImage && (
        <img
          className={s.image}
          ref={ref}
          src={item.urlToImage === null ? defaultImage : item.urlToImage}
          onError={() => err()}
        />
      )}
    </div>
  );
};

export default NewsListItem;
