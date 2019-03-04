import React, { Component } from 'react';
import './App.css';

import AppNavbar from './component/navbar/navbar';
import MainInfo from './component/main_info/info';
import TableNav from './component/tablenav/tablenav';
import CurrentTable from './component/currentTable/currentTable';

import Footer from './component/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <MainInfo/>
        <TableNav/>
        <CurrentTable/>

        <Footer/>

      </div>
    );
  }
}

export default App;
