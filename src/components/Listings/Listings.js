import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './listings.css';
import listingsData from '../../../src/data/listingsData.js';
import InfoModal from '../Modal/Modal';
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
export default class Listings extends Component {


  constructor(props) {

    super(props);

    this.state = {


      ListingsData: [
        {
          Year: '1997-2000',
          carName: "Honda",
          model: "Civic EK9",
          image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/EK9_small_1.jpg',
          modalIsOpen: false
        },
        {
          Year: '2001-2005',
          carName: "Honda",
          model: "Civic EP3",
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/IMFJ_Honda_Civic_Type_R_Gen6.jpg/560px-IMFJ_Honda_Civic_Type_R_Gen6.jpg',
          modalIsOpen: false
        },
        {
          Year: '2006-2011',
          carName: "Honda",
          model: "Civic FD2",
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2007_Honda_Civic_TypeR_01.JPG/560px-2007_Honda_Civic_TypeR_01.JPG',
          modalIsOpen: false
        },
        {
          Year: '2006-2011',
          carName: "Honda",
          model: "Civic FN2",
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Macedontyper.jpg/440px-Macedontyper.jpg',
          modalIsOpen: false
        },
        {
          Year: '2015-2017',
          carName: "Honda",
          model: "Civic FK2",
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/2015-03-03_Geneva_Motor_Show_4037.JPG/560px-2015-03-03_Geneva_Motor_Show_4037.JPG',
          modalIsOpen: false
        },
        {
          Year: '2017-Present',
          carName: "Honda",
          model: "Civic FK8",
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Honda_Civic_Type_R%2C_IAA_2017%2C_Frankfurt_%281Y7A3329%29.jpg/440px-Honda_Civic_Type_R%2C_IAA_2017%2C_Frankfurt_%281Y7A3329%29.jpg',
          modalIsOpen: false
        }

      ]

    }

  } //constructor end

  toggleModal = (i) => {
    const listingsData = [...this.state.ListingsData];

    listingsData[i].modalIsOpen = !listingsData[i].modalIsOpen;

    this.setState({ listingsData });
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  printCard = () => {
    var { ListingsData } = this.props

    return (

      this.state.ListingsData.map((listData, i) => (

        <div className="listing" key={i}>
          <div className="topInfo">
            <div className="listingImg" style={{ background: `url("${listData.image}") no-repeat center center ` }}>
              <div className="details">
               
                  
                  <button onClick={() => this.toggleModal(i)}>View {listData.model}</button>
                  <Modal
                    isOpen={listData.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={() => this.toggleModal(i)}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    {i}
                    <h2 ref={subtitle => this.subtitle = subtitle}>{listData.carName}{listData.model}</h2>
                    <button onClick={() => this.toggleModal(i)}>close</button>
                    <div>{listData.Year}</div>
                    <form>
                      <input />
                      <button>tab navigation</button>
                      <button>stays</button>
                      <button>inside</button>
                      <button>the modal</button>
                    </form>
                  </Modal>
                
                <span className="year">{listData.Year}</span>
              </div>
            </div>






          </div>

          <div className="bottomInfo">
            <span className="carName"><i class="fas fa-car"></i>{listData.carName}</span>
            <span className="model"><i class="fas fa-arrow-right"></i>{listData.model}</span>
          </div>
        </div>
      ))
    );
  }

  render() {



    return (

      <div id="contentArea">
        <h1>{this.props.title}</h1>
        {this.printCard()}
      </div>
    )
  };
}
