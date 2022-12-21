import React, { useRef, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { INewsData } from "../../models/INewsData";
import { NewsAPI } from "../../services/NewsService";
import List from "../List";
import defaultImage from "./../../pictures/news.jpg";
import s from "./NewsTop.module.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DataRequestView from "../DataRequestView/DataRequestView";
import { COUNTRY } from "../../queryParameters/Country";
import { setNews } from "../../store/reducers/OneNewsSlice";
import { useNavigate } from "react-router-dom";

const NewsTop: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const goTo = useNavigate();

  const [page, setPage] = useState<number>(1);

  const newsQuery = {
    country: COUNTRY.USA,
    page: 1,
    pageSize: 3,
  };

  const {
    data: news,
    error,
    isLoading,
  } = NewsAPI.useFetchNewsHeadlinesQuery(newsQuery);
  const slideRight = () => {
    if (ref.current?.style.left !== "-200%" && ref.current !== null) {
      const slideredString = ref.current.style.left.slice(0, -1);
      let sliderNumber = Number(slideredString);
      sliderNumber -= 100;
      ref.current.style.left = `${sliderNumber}%`;
      setPage(page + 1);
    }
  };
  const slideLeft = () => {
    if (ref.current?.style.left !== "0%" && ref.current !== null) {
      const slideredString = ref.current.style.left.slice(0, -1);
      let sliderNumber = Number(slideredString);
      sliderNumber += 100;
      ref.current.style.left = `${sliderNumber}%`;
      setPage(page - 1);
    }
  };
  const goToThisNews = (item: INewsData) => {
    dispatch(setNews(item));
    goTo("/news-by-id");
  };
  return (
    <div className={s.news_slider}>
      <div className={s.title}>NEWS HEADLINES</div>
      <DataRequestView
        error={error}
        isLoading={isLoading}
        totalResults={news?.totalResults}
        item={
          <div className={s.items} ref={ref}>
            <List
              items={news?.articles}
              renderItem={(item: INewsData) => (
                <div className={s.item} key={item.title}>
                  <div className={s.item_title}>{item.title}</div>
                  <div className={s.item_subtitle}>{item.author}</div>
                  <div className={s.item_content}>
                    <div className={s.main_text}>
                      {item.description}{" "}
                      <p className={s.link} onClick={() => goToThisNews(item)}>
                        {" "}
                        Read more ...
                      </p>
                    </div>
                    <img
                      className={s.image}
                      src={item.urlToImage ? item.urlToImage : defaultImage}
                      alt="error"
                    />
                  </div>
                </div>
              )}
            />
          </div>
        }
      />
      <div className={s.pagination}>
        <div
          className={page === 1 ? s.button_disabled : s.button}
          onClick={() => slideLeft()}
        >
          <ChevronLeftIcon />
        </div>
        <div className={s.pages}>
          {[1, 2, 3].map((p) => (
            <div
              className={
                p === page ? `${s.circle} ${s.circle_chosen}` : s.circle
              }
            ></div>
          ))}
        </div>
        <div
          className={page === 3 ? s.button_disabled : s.button}
          onClick={() => slideRight()}
        >
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
};
export default NewsTop;
