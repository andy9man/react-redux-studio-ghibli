import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'react-thunk';
import {reducer} from './reducer.js';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument('https://ghibliapi.herokuapp.com')),
  )
)