import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import {Provider} from 'react-redux';
import store from './store';

import AppNavbar from './component/navbar/navbar';
import MainInfo from './component/main_info/info';
import CurrentTable from './component/currentTable/currentTable';

import Footer from './component/footer/footer';

class App extends Component {
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

export default App;
