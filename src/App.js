import React from 'react';
import './App.css';
import Profile from './Profile';
import Header from './Header';
import Experiences from './Experiences';
import Education from './Education';
import Skills from './Skills';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Profile/>
        <Experiences/>
        <Education/>
        <Skills/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
