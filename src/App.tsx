import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React, { FC, lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Spinner from "./components/spinner";
import NavBar from "./components/navbar/navbar";
import Login from "./pages/login";
import theme from "./theme/theme";
import {
  getDataFromLocalStorage,
  localStorageKeys,
  saveDataInLocalStorage,
} from "./utils/localStorage";
import { useSelector } from "react-redux";
import { RootReducer } from "./interfaces/storeInterfaces";

const Main = lazy(() => import("./pages/main"));
const Story = lazy(() => import("./pages/story"));
const Profile = lazy(() => import("./pages/profile"));
const PageNotfound = lazy(() => import("./pages/pageNotFound"));

const App: FC = () => {
  const isLoading = useSelector((state: RootReducer) => state.newsReducer.isLoading);
  const [isUserLoggedIn, setuserLoggedIn] = useState(
    getDataFromLocalStorage(localStorageKeys.userLoggin) || null
  );
  useEffect(() => {
    saveDataInLocalStorage(localStorageKeys.userLoggin, isUserLoggedIn);
  }, [isUserLoggedIn]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isLoading && <Spinner />}
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <NavBar
            isUserLoggedIn={isUserLoggedIn}
            setuserLoggedIn={setuserLoggedIn}
          />
          <Routes>
            {!isUserLoggedIn && (
              <Route
                path='/'
                element={<Login authenticate={() => setuserLoggedIn(true)} />}
              />
            )}
            {isUserLoggedIn && (
              <>
                <Route path='/' element={<Main />} />
                <Route path='/main' element={<Main />} />
                <Route path='/story' element={<Story />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/login' element={<Navigate to={"/main"} />} />
                <Route
                  path='*'
                  element={<PageNotfound title='page not found' />}
                />
              </>
            )}
            <Route
              path='*'
              element={<Navigate to={isUserLoggedIn ? "/main" : "/"} />}
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
