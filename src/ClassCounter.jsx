import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props){
    super();
    this.state = {count:0}
    }
    handleClick=()=>{
        this.setState({count:this.state.count + 1})
    }



  render() {
    return (
      <div className='ClassCount'>
        <h1>ClassCounter {this.state.count}</h1>
        <button onClick={this.handleClick}>increase</button>
        <button onClick={()=>{
            this.setState({count:this.state.count -1})
        }
        }>decrease</button>

        

      </div>
    )
  }
}
