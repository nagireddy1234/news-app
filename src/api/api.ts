import {
  getDataFromLocalStorage,
  localStorageKeys,
} from '../utils/localStorage';
import {baseURL} from './baseurl';
import { endpoints } from './endpoints';

export const detectIsAPIkeyValid = async (apiKey: string) => {
  const url = `${baseURL}${endpoints.topHeadlines}?country=${'us'}&apiKey=${apiKey}`
  const result = await (await fetch(url)).json();
  return result;
};

export const getTopHeadlinesAPIcall = async () => {
  const url = `${baseURL}${endpoints.topHeadlines}?country=${'us'}&apiKey=${getDataFromLocalStorage(localStorageKeys.login)?.apiKey}`
  const result = await (await fetch(url)).json();
  return result;
};

export const getHeadlinesBySearchAPIcall = async (query: string) => {
  const url = `${baseURL}${endpoints.everything}?q=${query}&apiKey=${getDataFromLocalStorage(localStorageKeys.login)?.apiKey}`
  const result = await(await fetch(url)).json();
  return result;
};
