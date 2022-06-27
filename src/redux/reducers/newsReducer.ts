import { StoryProps } from "../../components/newsList";
import { NewsReducerProps } from "../../interfaces/storeInterfaces";
import { FETCH_TOPHEADLINES_NEWS, LOADING, RESET } from "../types/newsTypes";

export interface HeadlinesInterface {
  type: string;
  payload: Array<StoryProps> | null;
}

const initialState: NewsReducerProps = {
  news: [],
  isLoading: false,
};
const newsReducer = (state = initialState, action: HeadlinesInterface) => {
  switch (action.type) {
    case FETCH_TOPHEADLINES_NEWS: {
      return { ...state, news: action.payload };
    }
    case LOADING: {
      return { ...state, isLoading: action.payload };
    }
    case RESET: {
      return { ...state, ...initialState };
    }
    default:
      return { ...state };
  }
};

export default newsReducer;
