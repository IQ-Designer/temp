import React, { Component } from 'react';
import Hero from './../hero';
import Service from './../services';
import About from './../about';
import Testimonials from './../testimonials';
import Portfolio from './../portfolio';
import Blog from './../blog';
import Store from './../store';
import Contact from './../contact';

class Index extends Component {
  render(){
    return (
      <div className="App">
        <Hero />
        <Service />
        <About />
        <Testimonials />
        <Portfolio />
        <Blog />
        <Store />
        <Contact />
      </div>
    );
  }
}

export default Index;
