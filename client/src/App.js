import React, { Component } from 'react';
import './App.css';

import AppNavbar from './component/navbar/navbar';
import MainInfo from './component/main_info/info';

import Footer from './component/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <MainInfo/>

        <Footer/>

      </div>
    );
  }
}

export default App;
