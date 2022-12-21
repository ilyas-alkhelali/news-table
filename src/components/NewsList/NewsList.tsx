import React from "react";
import { INewsData } from "../../models/INewsData";
import List from "../List";
import NewsListItem from "../NewsListItem/NewsListItem";
import s from "./NewsList.module.scss";
interface NewsListProps {
  news: INewsData[] | undefined;
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
  return (
    <div className={s.list}>
      <List
        items={news}
        renderItem={(item: INewsData) => (
          <NewsListItem item={item} key={item.title} />
        )}
      />
    </div>
  );
};

export default NewsList;
