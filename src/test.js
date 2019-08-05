
 
import React, { Component } from 'react'


class test extends Component {
 state = {
     "standup": false
     this.onClick
    }
    onClick(){
        this.setState(prevState => { 
            return { 'standup': true}
        })
    }
 render() {
  return(
   <div>
       <button onClick={onClick}>click</button>
   </div>
    )
   }
 }



export default test;