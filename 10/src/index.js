/**
 * 
 * @authors  yangxiangshang
 * @date    2016-12-27 10:55:58
 * @version $Id$
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import App from './containers/App'
import mylogger from './middlewares/mylogger'
import thunk from 'redux-thunk'
import { Router, Route, browserHistory } from 'react-router';
const store= createStore(reducer,applyMiddleware(thunk,mylogger))
const render=()=>{
	ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
  <Route path="/(:filter)" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
}
render()
//store.subscribe(render)