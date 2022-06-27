import { Typography } from "@mui/material";
import { isEmpty } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchInput from "../../components/inputs/searchInput";
import NewsList from "../../components/newsList";
import { KeyboardEvent } from "../../interfaces/keyboardInterface";
import { ArticlesProps, RootReducer } from "../../interfaces/storeInterfaces";
import {
  fetchNews,
  fetchNewsBySearch,
  fetchNewsRes,
} from "../../redux/actions/newsAction";
import { ENTER_SOMETHING, NO_NEWS } from "../../typeConstants";
import {
  getDataFromLocalStorage,
  localStorageKeys,
  saveDataInLocalStorage,
} from "../../utils/localStorage";
import colors from "../../theme/colors";

const Main = () => {
  const dispatch = useDispatch();
  const { isLoading, news } = useSelector(
    (state: RootReducer) => state.newsReducer
  );
  const [searchValue, setSearchValue] = useState(
    getDataFromLocalStorage(localStorageKeys.searchedValue) || ""
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchValue || isEmpty(news)) {
      setSearchValue("");
      localStorage.removeItem(localStorageKeys.searchedValue);
      dispatch(fetchNews());
    }
  }, [searchValue]);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      dispatch(fetchNewsRes([]));
    }
    setSearchValue(e.target.value);
    saveDataInLocalStorage(localStorageKeys.searchedValue, e.target.value);
  }, []);

  const handleSearchSubmit = async () => {
    if (searchValue.trim() === "" || searchValue === null) {
      alert(ENTER_SOMETHING);
    } else {
      dispatch(fetchNewsRes([]));
      dispatch(fetchNewsBySearch(searchValue));
    }
  };

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSearchSubmit();
      }
    };
    window.addEventListener("keydown", keyDownHandler);
    return () => window.removeEventListener("keydown", keyDownHandler);
  });

  const handleStory = (data: ArticlesProps) =>
    navigate(`/story?title?${data.title}`, { state: data });
  return (
    <div style={{ marginTop: "6.5rem" }}>
      <SearchInput
        onChange={handleSearch}
        value={searchValue}
        onSubmit={handleSearchSubmit}
      />
      <NewsList data={news} handleStory={handleStory} />
      {!isLoading && isEmpty(news) && <Typography >{NO_NEWS}  </Typography>}
    </div>
  );
};

export default Main;
