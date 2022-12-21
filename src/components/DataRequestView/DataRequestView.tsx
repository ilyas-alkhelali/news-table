import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import s from "./DataRequestView.module.scss";
interface DataRequestViewProps {
  item: JSX.Element;
  error: FetchBaseQueryError | SerializedError | undefined;
  isLoading: boolean;
  totalResults: number | undefined;
}

const DataRequestView: React.FC<DataRequestViewProps> = ({
  item,
  totalResults,
  error,
  isLoading,
}) => {
  return (
    <>
      {isLoading ? (
        <div className={s.loading}>
          <CircularProgress color="inherit" />
        </div>
      ) : error &&
        error !== undefined &&
        "data" in error &&
        error.status !== 400 ? (
        <div className={s.error}>Loading error</div>
      ) : totalResults === 0 || error !== undefined ? (
        <div className={s.error}>Not Found</div>
      ) : (
        item
      )}
    </>
  );
};

export default DataRequestView;
