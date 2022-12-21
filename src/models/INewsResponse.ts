import { INewsData } from "./INewsData";

export interface INewsResponse {
  status: string;
  totalResults: number;
  articles: INewsData[];
}
