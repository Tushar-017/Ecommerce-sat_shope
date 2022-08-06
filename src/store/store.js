import {compose, createStore, applyMiddleware } from 'redux';

// import logger from 'redux-logger';

import { rootReducer } from './root-reducer';


const loggerMiddleWear = (store) => (next) => (action) => {
   if(!action.type){
      return next(action);
   }

   console.log('type: ', action.type);
   console.log('payload: ', action.payload);
   console.log('currentState: ', store.getState());

   next(action);
   console.log('next state', store.getState());
}

const middleWare = [loggerMiddleWear];

const composedEnhancer = compose(applyMiddleware(...middleWare));

export const store = createStore(rootReducer, undefined , composedEnhancer);
