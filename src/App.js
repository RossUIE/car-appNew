import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header/Header';
import MainSVG from '../src/components/MainSVG/MainSVG';
import Listings from '../src/components/Listings/Listings.js';
import listingsData from '../src/data/listingsData.js';
import InfoModal from '../src/components/Modal/Modal.js';
import Footer from '../src/components/Footer/Footer.js';



class App extends Component {

  constructor(props) {

    super(props);

      this.state = {
      
    };

   
  }

  
  render() {

    return (

      <div>
        
        <Header />
        
        <Listings />
     
      
      </div>
    )
  }

}
export default App;
