export interface ArticlesProps {
  description?: string;
  publishedAt?: string;
  title?: string;
  url?: string;
  urlToImage?: string;
  content?: string;
  author?: string;
}

export interface NewsReducerProps {
  news: ArticlesProps[];
  isLoading: Boolean;
}

export interface RootReducer {
  newsReducer: NewsReducerProps;
}
