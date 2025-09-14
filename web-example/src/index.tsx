import React from "react";
import createSagaMiddleware from "redux-saga";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import App from "./components/App";
import rootSaga from "./sagas";
import * as serviceWorker from "./serviceWorker";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware as any));

sagaMiddleware.run(rootSaga);

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

serviceWorker.unregister();
