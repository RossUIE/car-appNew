import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import './header.css';



export default class Header extends Component {


    render() {

        return (
      <div>
        <header>

        <div className="logo">Civic Info</div>

        <nav>
          
          <a href="#">Cars</a>
          <a href="#">About</a>
          <a href="#" className="register-btn">Register</a>
        </nav>

        </header>

        <div className="headerRule"></div>

      </div>


      )};


    }
