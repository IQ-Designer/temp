import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import Header from './components/header';
import SideHeader from './components/sideHeader';
import Index from'./components/index';
import Toup from './components/toup';
import Footer from './components/footer';

class App extends Component {
  componentDidMount(){
    const menu = document.querySelector(".menu");
    const shButton = document.querySelector(".shButton");
    const sideHeader = document.querySelector(".sideHeader");
    menu.addEventListener("click", ()=>{
        sideHeader.style.transform = "translateX(0px)";
    });
    shButton.addEventListener("click",()=>{
        sideHeader.style.transform = "translateX(350px)";
    });
  }
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <SideHeader />
          <Route exact path="/" component={Index} />
          <Toup/>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
