import ThunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';


export default function configureStore(initialState) {
  const enhancer = compose(applyMiddleware(ThunkMiddleware));
  return createStore(reducers, initialState, enhancer);
}
