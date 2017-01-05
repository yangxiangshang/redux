/**
 * 
 * @authors  yangxiangshang
 * @date    2016-12-27 10:55:58
 * @version $Id$
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import App from './containers/App'
const store= createStore(reducer)
const render=()=>{
	ReactDOM.render(
  <Provider store={store}>
    <App value={store.getState()}/>
  </Provider>,
  document.getElementById('root')
)
}
render()
store.subscribe(render)