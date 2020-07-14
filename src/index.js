import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <Auth0Provider
    domain='dev-gz5tz7zk.us.auth0.com'
    clientId='sGP8BZgP5v1FFJgs9ID5PQlhL0vXcljc'
    redirectUri={window.location.origin}
  >
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Auth0Provider>,
  document.getElementById('root')
)
