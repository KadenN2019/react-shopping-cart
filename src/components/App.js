import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Sizes from './sizes'
import Main from './main'
import '../styles/App.css'

export default props => {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="sizes">
          <Sizes/>
        </div>
        <div className="main">
          <Main/>
        </div>
      </div>
    </Provider>
  )
}