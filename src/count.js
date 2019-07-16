import React, { Component } from 'react'
import PropTypes from 'prop-types'



class Count extends Component {
    constructor(props){
    super(props);
    
 this.state = {
     value: 1
 };
this.onClick=this.onclick.bind(this);

const onClick= function () {
    this.setState({

     })
    
}

 render() {
  return(
   <div>
<button >{this.state.value}</button>
   </div>
    )
   }
 }


propTypes = {
   value: PropTypes.number.isRequired; 
}
export default Count