import React from 'react'
import Nav from './components/Nav'
import { Link, Switch, Route } from 'react-router-dom'
import './App.css'
import LoginButton from './components/Auth/LoginButton'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Link to='/new'>New User</Link>
        <Link to='/login'>Login</Link>
        <Link to='/accounts'>Accounts</Link>
        <Link to='/transfers'>Transfers</Link>
        <Link to='/faq'>FAQ</Link>
      </header>
      <Switch>
        <Route path='/new'>
          {/* component={Nav}> */}
          <Nav />
        </Route>
        <Route exact path='/login'>
          {/* component={LoginButton}> */}
          <LoginButton />
        </Route>
      </Switch>
    </div>
  )
}

export default App
