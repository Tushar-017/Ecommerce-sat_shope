import {compose, createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWare = [logger];

// const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
//   Boolean
// );

const composedEnhancer = compose(applyMiddleware(...middleWare));

export const store = createStore(rootReducer, undefined , composedEnhancer);
