import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchInput from "../../components/inputs/searchInput";
import NewsList from "../../components/newsList";
import { KeyboardEvent } from "../../interfaces/keyboardInterface";
import {
  fetchNews,
  fetchNewsBySearch,
  fetchNewsRes,
} from "../../redux/actions/newsAction";
import { ENTER_SOMETHING } from "../../typeConstants";
import {
  getDataFromLocalStorage,
  localStorageKeys,
  saveDataInLocalStorage,
} from "../../utils/localStorage";

const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.newsReducer.news);
  const [searchValue, setSearchValue] = useState(
    getDataFromLocalStorage(localStorageKeys.searchedValue) || ""
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchValue) {
      dispatch(fetchNews());
    }
  }, [searchValue]);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    saveDataInLocalStorage(localStorageKeys.searchedValue, e.target.value);
  }, []);

  const handleSearchSubmit = async () => {
    if (searchValue.trim() === '' || searchValue === null) {
      alert(ENTER_SOMETHING)
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

  const handleStory = (data: any) => {
    navigate(`/story?title?${data.title}`, { state: data });
  };
  return (
    <div style={{ marginTop: "6.5rem" }}>
      <SearchInput onChange={handleSearch} value={searchValue} onSubmit={handleSearchSubmit} />
      <NewsList data={data} handleStory={handleStory} />
      {/* {isLoading! && data.length > 0 ? <NewsList data={data} handleStory={handleStory} /> : <PageNotfound title='no news today' />} */}
    </div>
  );
};

export default Main;
