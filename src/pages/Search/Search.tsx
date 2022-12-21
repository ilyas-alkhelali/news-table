import React, { ChangeEvent, useState, useEffect } from "react";
import DataRequestView from "../../components/DataRequestView/DataRequestView";
import MyInput from "../../components/UI/MyInput/MyInput";
import MySelect from "../../components/UI/MySelect/MySelect";
import {
  useGetPageNumbers,
  useGetTotalPagesCount,
} from "../../hooks/paginationHelpers";
import { useConvertToOptionsArray } from "../../hooks/toArrayConvert";
import { ISearchQuery } from "../../models/ISearchQuery";
import { SEARCH_IN } from "../../queryParameters/SearchIn";
import { ORDER_BY } from "../../queryParameters/Sort";
import { NewsAPI } from "../../services/NewsService";
import s from "./Search.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import NewsList from "../../components/NewsList/NewsList";
import { IOption } from "../../models/IOption";
import Pagination from "../../components/Pagination/Pagination";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Search = () => {
  const [query, setQuery] = useState<ISearchQuery>({
    q: "",
    page: 1,
    pageSize: 10,
  });
  const [searchInDefName, setSearchInDefName] =
    useState<string>("choose search line");
  const [sortByDefName, setSortByInDefName] =
    useState<string>("choose search line");
  const [search, setSearch] = useState<string>("");
  const [skip, setSkip] = useState<boolean>(true);
  const [totalPagesArray, setTotalPagesArray] = useState<number[]>([1]);
  const {
    data: news,
    isFetching,
    isError,
    error,
  } = NewsAPI.useFetchByKeywordsQuery(query);
  const totalPages = useGetTotalPagesCount({
    totalResults: news?.totalResults,
    limit: query.pageSize,
  });
  const { pages } = useGetPageNumbers({ totalPages });
  useEffect(() => {
    setTotalPagesArray(pages);
  }, [news]);
  console.log(query);

  const qWordHandler = () => {
    setQuery({ ...query, q: search });
    skip === false && setSkip(true);
  };
  const searchStringHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const searchInHandler = (searchIn: IOption) => {
    setQuery({ ...query, searchIn: searchIn.value });
    setSearchInDefName(searchIn.name);
  };
  const sortByHandler = (sortBy: IOption) => {
    setQuery({ ...query, sortBy: sortBy.value });
    setSortByInDefName(sortBy.name);
  };
  const pageHandler = (page: number) => {
    setQuery({ ...query, page: page });
  };
  const nextPage = () => {
    if (query.page !== undefined && query.page !== news?.totalResults) {
      setQuery({ ...query, page: query.page + 1 });
    }
  };
  const previosPage = () => {
    if (query.page !== undefined && query.page !== 1) {
      setQuery({ ...query, page: query.page - 1 });
    }
  };

  const { optionsArray: searchIn } = useConvertToOptionsArray(SEARCH_IN);
  const { optionsArray: orderBy } = useConvertToOptionsArray(ORDER_BY);
  return (
    <div>
      <div className={s.query_creator}>
        <div className={s.query_creator_content}>
          <MySelect
            defaultValue={searchInDefName}
            options={searchIn}
            onClick={searchInHandler}
          />
          <div className={s.change_z_index}>
          <MySelect
            defaultValue={sortByDefName}
            options={orderBy}
            onClick={sortByHandler}
          />
          </div>
          <MyInput
            value={search}
            onChange={searchStringHandler}
            placeholder=" Search"
          />
          <div className={s.icon} onClick={() => qWordHandler()}>
            <SearchIcon color="inherit" />
          </div>
        </div>
      </div>
      <DataRequestView
        totalResults={news?.totalResults}
        error={error}
        isLoading={isFetching}
        item={
          <div>
            <NewsList news={news?.articles} />
          </div>
        }
      />
      <div className={s.pag_with_pages}>
        <Pagination totalPages={totalPagesArray} onClick={pageHandler} />
      </div>
      <div className={s.pag_without_pages}>
        <div
          className={query.page === 1 ? s.button_disabled : s.button}
          onClick={() => previosPage()}
        >
          <ChevronLeftIcon />
        </div>
        <div className={s.current_page}>{query.page}</div>
        <div
          className={
            query.page === news?.totalResults ? s.button_disabled : s.button
          }
          onClick={() => nextPage()}
        >
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
};

export default Search;
