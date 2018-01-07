import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import { persistStore, purgeStoredState } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import {
  createLogger
} from 'redux-logger';
import rootReducer from './reducers';
import sagas from './sagas';
let middleware = [];

const logger = createLogger({
  collapsed: true,
  stateTransformer: (state) => { // transform Immutable Structures to common plain JS Objects
    let tState = {};

    Object.keys(state).forEach(key => {
      if (typeof state[key].toJS === 'function') {
        tState[key] = state[key].toJS({ deep: true });
      } else {
        tState[key] = state[key];
      }
    });

    return tState;
  }
});


const sagaMiddleware = createSagaMiddleware();
middleware.push(logger);
middleware.push(sagaMiddleware);
export const storeCreation = () => {
  const enhancers = compose(
    applyMiddleware(...middleware),
  );

  let store = createStore(
    rootReducer,
    enhancers
  );
  let persistor = persistStore(store);
  return {store, persistor};
};

export const startSagas = () => {
  sagaMiddleware.run(sagas);
};

