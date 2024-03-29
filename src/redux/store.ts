import { createStore, compose, applyMiddleware  } from "redux"
import { reducers } from './reducers/index'
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import dataSaga from "./middlewares/sagas/productSagas";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
)

sagaMiddleware.run(dataSaga)

export default store