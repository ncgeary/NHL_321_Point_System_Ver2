import React, { Component } from 'react';
import './App.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import {Provider} from 'react-redux';
import store from './store';

import AppNavbar from './component/navbar/navbar';
import MainInfo from './component/main_info/info';
import CurrentTable from './component/currentTable/currentTable';

import Footer from './component/footer/footer';

class Home extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <MainInfo/>
          <CurrentTable/>

          <Footer/>

        </div>
      </Provider>
      
    );
  }
}

export default Home;
