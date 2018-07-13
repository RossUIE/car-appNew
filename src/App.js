import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header/Header';
import MainSVG from '../src/components/MainSVG/MainSVG';
import Listings from '../src/components/Listings/Listings.js';
import listingsData from '../src/data/listingsData.js';
import InfoModal from '../src/components/Modal/Modal.js';
import Footer from '../src/components/Footer/Footer.js';
import ChangeColor from '../src/components/ChangeColor/ChangeColor.js';

const green = '#39D1B4';
const white = '#eee';

console.log(ChangeColor)

class App extends Component {

  constructor(props) {

    super();

    this.state = {
      color: props.color
    };
  }

  ChangeColor = (newColor) => {
    let whatColor = this.state.color == white ? green : white;
    this.setState({
      color: whatColor
    });
  }

  render() {

    return (

      <div style={{ background: this.state.color }}>

        <Header />
        


        <MainSVG />

        <Listings />
        <ChangeColor onClick={this.ChangeColor}/>
        <Footer />



      </div>
    )
  }

}
export default App;
