import {compose, createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import persistReducer from 'redux-persist/lib/persistReducer';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


import { rootReducer } from './root-reducer';




const persistConfig = {
   key: 'root',
   storage,
   wishlist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWare = [process.env.NODE_ENV !== 'production' && logger,thunk].filter(Boolean);

const composeEnhancer = 
   (process.env.NODE_ENV !== 'production' && 
      window && 
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
   compose;

const composedEnhancer = composeEnhancer(applyMiddleware(...middleWare));

export const store = createStore(persistedReducer, undefined , composedEnhancer);

export const persistor = persistStore(store);
