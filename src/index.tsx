import App from 'App'
import React from 'react'
import ReactDOM from 'react-dom'
import { setVisibleHeight } from 'visible-height-css'
import * as serviceWorker from './serviceWorker'

setVisibleHeight()

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
