import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import 'fast-text-encoding/text'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.module.scss'
import {BrowserRouter} from 'react-router-dom' 
import { Store } from './store/store'

const app = (
  <Store>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Store>
)

ReactDOM.render(
  app,
  document.getElementById('root')
)
