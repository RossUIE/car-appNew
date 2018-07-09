import React from 'react';
import ReactDOM from 'react-dom'


function MyCars(props) {

 return (

   <div>
   <h1>This is a {props.name} {props.model} year {props.age}</h1>


   </div>

)
}



class Cars extends React.Component {

  render() {

    return (
    <div>
    <MyCars name="Honda" age="2005" model="civic" />

    </div>
  )};


}

export default Cars;
