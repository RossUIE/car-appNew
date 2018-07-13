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
    transform: 'translate(-50%, -50%)',
    width: '80vh',
    height: '80vh',
    padding: 0

    
  }
};


const modalCustom = {

  color: 'black'
}

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
          modalIsOpen: false,
          engine: 'B16B',
          displacement: '1.6L',
          Bodytype: '3 Door Hatchback',
          bhp: '185bhp',
          torque: '160 N⋅m (118 lb⋅ft) @ 7,500 rpm',
          topSpeed: '148 mph',
          modalImage:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Civic_Type_R_rear.JPG/440px-Civic_Type_R_rear.JPG'


        },
        {
          Year: '2001-2005',
          carName: "Honda",
          model: "Civic EP3",
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/IMFJ_Honda_Civic_Type_R_Gen6.jpg/560px-IMFJ_Honda_Civic_Type_R_Gen6.jpg',
          modalIsOpen: false,
          engine: 'K20A2',
          displacement: '2.0L',
          Bodytype: '3 door Hatchback',
          bhp: '200bhp',
          torque: '160 N⋅m (118 lb⋅ft) @ 7,500 rpm',
          topSpeed: '141 mph',
          modalImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Honda_CIVIC_TYPE_R_%28EP3%29_rear.jpg/440px-Honda_CIVIC_TYPE_R_%28EP3%29_rear.jpg',
          customStyle: false
        },
        {
          Year: '2006-2011',
          carName: "Honda",
          model: "Civic FD2",
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2007_Honda_Civic_TypeR_01.JPG/560px-2007_Honda_Civic_TypeR_01.JPG',
          modalIsOpen: false,
          engine: 'K20A2',
          displacement: '2.0L',
          Bodytype: '4-door Sedan',
          bhp: '222 hp',
          torque: '1215 N⋅m (159 lb⋅ft) @ 6100 RPM',
          topSpeed: '148 mph',
          modalImage:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/2007_Honda_Civic_TypeR_02.JPG/440px-2007_Honda_Civic_TypeR_02.JPG'
        },
        {
          Year: '2006-2011',
          carName: "Honda",
          model: "Civic FN2",
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Macedontyper.jpg/440px-Macedontyper.jpg',
          modalIsOpen: false,
          engine: 'K20A2',
          displacement: '2.0L',
          Bodytype: '3 door Hatchback',
          bhp: '200bhp',
          torque: '160 N⋅m (118 lb⋅ft) @ 7,500 rpm',
          topSpeed: '148 mph',
          modalImage:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/FN2_CW_REAR.jpg/440px-FN2_CW_REAR.jpg'
        },
        {
          Year: '2015-2017',
          carName: "Honda",
          model: "Civic FK2",
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/2015-03-03_Geneva_Motor_Show_4037.JPG/560px-2015-03-03_Geneva_Motor_Show_4037.JPG',
          modalIsOpen: false,
          engine: 'K20C1',
          displacement: '2.0L',
          Bodytype: '3 Door Hatchback',
          bhp: '306 bhp',
          torque: '400 N⋅m (300 lb⋅ft) at 2500–4500 RPM',
          topSpeed: '155 mph',
          modalImage:'http://www.autosspeed.com/wp-content/uploads/2017/03/Honda-Civic-Type-R-2.jpg'
        },
        {
          Year: '2017-Present',
          carName: "Honda",
          model: "Civic FK8",
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Honda_Civic_Type_R%2C_IAA_2017%2C_Frankfurt_%281Y7A3329%29.jpg/440px-Honda_Civic_Type_R%2C_IAA_2017%2C_Frankfurt_%281Y7A3329%29.jpg',
          modalIsOpen: false,
          engine: 'K20C1 Turbo I4',
          displacement: '2.0L',
          Bodytype: '5-door Hatchback',
          bhp: '315 bhp',
          torque: '',
          topSpeed: '155 mph',
          modalImage:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/2017_Honda_Civic_Type_R_GT_i-VTEC_Turbo_2.0_Front.jpg/560px-2017_Honda_Civic_Type_R_GT_i-VTEC_Turbo_2.0_Front.jpg'
        }

      ]

    }

    if(listingsData == '' || listingsData.length == 0) {
      return "Unkown"
    }

  } //constructor end



  toggleModal = (i) => {
    const listingsData = [...this.state.ListingsData];

    listingsData[i].modalIsOpen = !listingsData[i].modalIsOpen;

    this.setState({ listingsData });
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = '#f00';
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
                    <div className="modalTop">
                    <div className="modalImage" style={{ background: `url("${listData.modalImage}") no-repeat center center`, backgroundSize: "cover" }}></div>
                    </div>

                    <div className="modalBottom">
                    <i className="far fa-square"></i>
                    <h2>{listData.carName} {listData.model}</h2>
                    
                    <p><span style={modalCustom}>Year of Manufacture:</span> {listData.Year}</p>
                    <p><span style={modalCustom}>Engine:</span> {listData.engine}</p>
                    <p><span style={modalCustom}>Displacement:</span> {listData.displacement}</p>
                    <p><span style={modalCustom}>BHP:</span> {listData.bhp}</p>
                    <p><span style={modalCustom}>Torque:</span> {listData.torque}</p>
                    <p><span style={modalCustom}>Top Speed:</span> {listData.topSpeed}</p>

                    <div className="btn-close">
                    <button onClick={() => this.toggleModal(i)}>close</button>
                    </div>
                    </div>
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
        {/* <h1>{this.props.title}</h1> */}
        {this.printCard()}
      </div>
    )
  };
}
