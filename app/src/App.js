import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div class="app-wrapper-content">
          <Routes>

            <Route path='/profile/*:userId' element={<ProfileContainer />} />

            <Route path='/profile/*' element={<ProfileContainer />} />

            <Route path='/dialogs/*' element={<DialogsContainer />} />

            <Route path='/users/*' element={<UsersContainer />} />

            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />

          </Routes>


        </div>
      </div>
    </BrowserRouter>
  );
}




export default App;
