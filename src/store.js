import { compose, createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import reducer from './reducer';
import epic from './epic';


const middlewares = [
  createEpicMiddleware(epic),
];


export default function setupStore(initialState) {
  const withMiddlewares = applyMiddleware(...middlewares.filter(Boolean));

  const store = createStore(
    reducer,
    initialState,
    compose(withMiddlewares),
  );

  return store;
}