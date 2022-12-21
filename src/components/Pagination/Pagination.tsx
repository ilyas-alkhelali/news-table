import React, { useEffect, useState } from "react";
import PageItem from "../PageItem/PageItem";
import s from "./Pagination.module.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
interface PaginationProps {
  totalPages: number[];
  onClick: (page: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({ totalPages, onClick }) => {
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const handlerPageChange = (page: number) => {
    onClick(page);
    setPage(page);
  };
  useEffect(() => {
    let pages: number[] = [];
    if (page > 5) {
      for (let i = page - 4; i < page + 5; i++) {
        pages.push(i);
      }
      setPages(pages);
    } else {
      for (let i = 1; i < 10; i++) {
        pages.push(i);
      }
      setPages(pages);
    }
  }, [page]);
  const nextPage = () => {
    if (page !== undefined && page !== totalPages.length) {
      window.scrollTo(0,0)
      setPage(page + 1);
      onClick(page + 1);
    }
  };
  const previosPage = () => {
    if (page !== undefined && page !== 1) {
      setPage(page - 1);
      onClick(page - 1);
    }
  };
  return (
    <div>
      {totalPages.length > 9 ? (
        page > 5 ? (
          totalPages.length - page > 5 ? (
            <div className={s.container}>
              ...{" "}
              {pages?.map((item) => (
                <PageItem page={page} item={item} handler={handlerPageChange} />
              ))}{" "}
              ...
            </div>
          ) : (
            <div className={s.container}>
              ...{" "}
              {pages?.map((item) => (
                <PageItem page={page} item={item} handler={handlerPageChange} />
              ))}
            </div>
          )
        ) : (
          <div className={s.container}>
            {pages?.map((item) => (
              <PageItem page={page} item={item} handler={handlerPageChange} />
            ))}{" "}
            ...
          </div>
        )
      ) : (
        <div className={s.container}>
          {totalPages.map((item) => (
            <PageItem page={page} item={item} handler={handlerPageChange} />
          ))}
        </div>
      )}
      <div className={s.pag_without_pages}>
        <div
          className={page === 1 ? s.button_disabled : s.button}
          onClick={() => previosPage()}
        >
          <ChevronLeftIcon />
        </div>
        <div className={s.current_page}>{page}</div>
        <div
          className={page === totalPages.length ? s.button_disabled : s.button}
          onClick={() => nextPage()}
        >
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
