import React, { Component } from 'react';
// import Burgers from './components/Burgers'
import Middle from './components/Middle'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter} from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
            <Middle />
          <Footer/> 
        </div>
      </BrowserRouter>
    )
  }
}



