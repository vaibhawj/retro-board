import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/app.component'
import registerServiceWorker from './registerServiceWorker'
import {MuiThemeProvider} from 'material-ui'

ReactDOM.render(<MuiThemeProvider><App /></MuiThemeProvider>, document.getElementById('root'))
registerServiceWorker()
