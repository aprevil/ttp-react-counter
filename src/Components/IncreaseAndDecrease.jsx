import React, { Component } from 'react';

class IncreaseAndDecrease extends Component{
    constructor(props){
        super(props);
        this.state = {
            number: 0
        };
    
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }
  
    increase(){
        this.state.number++;
        this.setState({});
    }
    decrease(){
        if(this.state.number-1 >= 0){
            this.state.number--;
            this.setState({});
        }
        else{
           alert("can't go under 0!"); 
        }
    }
 

    render(){
       return( <div>
            <button onClick ={this.increase}>increase</button>
            <button onClick ={this.decrease}>decrease</button>
            <p>{this.state.number}</p>
        </div>);
    }
}
export default IncreaseAndDecrease;