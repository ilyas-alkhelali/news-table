export interface ISearchQuery {
    q: string;
    searchIn?: string;
    sortBy?: string;
    pageSize: number;
    page?: number;
  }