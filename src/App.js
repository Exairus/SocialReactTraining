import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state}/>
        <div className="app-wrapper-content">
          <Route render={ () => <Dialogs 
                                store={props.store} 
                                /> } exact path='/dialogs' />
          <Route render={ () => <Profile 
                                profilePage={props.state.profilePage}
                                dispatch={props.dispatch} 
                                /> } path='/profile' />
          <Route component={News} path='/news' />
          <Route component={Music} path='/music' />
          <Route component={Settings} path='/settings' />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
