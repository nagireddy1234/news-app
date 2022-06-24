import { Dispatch } from "react";
import {
  getHeadlinesBySearchAPIcall,
  getTopHeadlinesAPIcall,
} from "../../api/api";
import { FETCH_TOPHEADLINES_NEWS, LOADING, RESET } from "../types/newsTypes";

export const fetchNewsRes = (data: any) => {
  return {
    type: FETCH_TOPHEADLINES_NEWS,
    payload: data,
  };
};
export const resetState = () => {
  return {
    type: RESET,
    payload: null,
  };
};

export const loader = (state: boolean) => {
  return {
    type: LOADING,
    payload: state,
  };
};

export const fetchNews = (): any => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(loader(true));
    const newsData = await getTopHeadlinesAPIcall();
    dispatch(fetchNewsRes(newsData.articles));
    dispatch(loader(false));
  };
};

export const fetchNewsBySearch = (search: string): any => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(loader(true));
    const newsData = await getHeadlinesBySearchAPIcall(search);
    dispatch(fetchNewsRes(newsData.articles));
    dispatch(loader(false));
  };
};
