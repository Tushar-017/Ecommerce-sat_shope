import {compose, createStore, applyMiddleware, Middleware } from 'redux';
import { persistStore, PersistConfig } from 'redux-persist';
import persistReducer from 'redux-persist/lib/persistReducer';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';


import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

export type RootState = ReturnType<typeof rootReducer>;

declare global {
   interface Window{
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
   }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
   whitelist: (keyof RootState)[]
}

const persistConfig: ExtendedPersistConfig = {
   key: 'root',
   storage,
   whitelist: ['cart']
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWare = [
   process.env.NODE_ENV !== 'production' && logger,
   sagaMiddleware
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composeEnhancer = 
   (process.env.NODE_ENV !== 'production' && 
      window && 
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
   compose;

const composedEnhancer = composeEnhancer(applyMiddleware(...middleWare));

export const store = createStore(persistedReducer, undefined , composedEnhancer);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
