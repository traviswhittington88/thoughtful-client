import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'
import HomePage from './routes/HomePage/HomePage'
import LoginPage from './routes/LoginPage/LoginPage'
import SignupPage from './routes/SignupPage/SignupPage'
import EntryPage from './routes/EntryPage/EntryPage'
import NotFoundPage from './routes/NotFoundPage/NotFoundPage'

function App() {
  return (
    <div className='App'>
      <header className='App__header'>
        <Header />
      </header>
      <main className='App__main'>
        <Switch>
          <Route
            path='/'
            component={HomePage}
          />
          <Route
            path='/login'
            component={LoginPage}
          />
          <Route
            path='/signup'
            component={SignupPage}
          />
          <Route
            path='/entry/:entryId'
            component={EntryPage}
          />
          <Route
            component={NotFoundPage}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
