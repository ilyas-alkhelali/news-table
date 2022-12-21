import React, { useEffect, useState } from "react";
import PageItem from "../PageItem/PageItem";
import s from "./Pagination.module.scss";

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
    </div>
  );
};

export default Pagination;
