import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import AppContainer from './containers/AppContainer'
import reducers from './reducers'
// import reduxThunk from 'redux-thunk'
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <AppContainer />
  </Provider>, document.getElementById('app'))
