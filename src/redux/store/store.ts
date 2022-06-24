import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "../reducers";

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
);
const store = createStore(rootReducer, middleware);

const dispatch = store.dispatch;

export { store, dispatch };
