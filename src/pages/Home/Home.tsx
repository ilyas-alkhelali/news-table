import React, { FC, useEffect, useState } from "react";
import NewsList from "../../components/NewsList/NewsList";
import NewsTop from "../../components/NewsTop/NewsTop";
import { useAppSelector } from "../../hooks/redux";
import { NewsAPI } from "../../services/NewsService";
import {
  useGetPageNumbers,
  useGetTotalPagesCount,
} from "../../hooks/paginationHelpers";
import s from "./Home.module.scss";
import Navbar from "../../components/NavBar/NavBar";
import DataRequestView from "../../components/DataRequestView/DataRequestView";
import Pagination from "../../components/Pagination/Pagination";

const Home: FC = () => {
  const { chosenCategoryValue } = useAppSelector(
    (state) => state.CategorySlice
  );
  const { chosenCountryValue } = useAppSelector((state) => state.CountrySlice);

  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [totalPagesArray, setTotalPagesArray] = useState<number[]>([1]);

  const {
    data: news,
    isLoading,
    error,
    isError,
  } = NewsAPI.useFetchNewsHeadlinesQuery({
    country: chosenCountryValue,
    category: chosenCategoryValue,
    page: page,
    pageSize: limit,
  });
  console.log(news);
  const totalPages = useGetTotalPagesCount({
    totalResults: news?.totalResults,
    limit: limit,
  });

  const { pages } = useGetPageNumbers({ totalPages });

  useEffect(() => {
    setTotalPagesArray(pages);
  }, [news?.totalResults]);

  const pageHandler = (page: number) => {
    setPage(page);
  };

  return (
    <div className={s.main_container}>
      <Navbar />
      <NewsTop />
      <DataRequestView
        error={error}
        totalResults={news?.totalResults}
        isLoading={isLoading}
        item={<NewsList news={news?.articles} />}
      />
      <div>
        <div className={s.left_icon}></div>
        <Pagination totalPages={totalPagesArray} onClick={pageHandler} />
        <div className={s.right_icon}></div>
      </div>
    </div>
  );
};

export default Home;
