import React from "react";
export class Sairam extends React.Component{
    state={
        counter:0
    }
    increment=()=>{
        this.setState({counter:this.state.counter+1});
    }
    componentWillUnmount(){
        this.setState({counter:42});
    }
    componentDidUpdate(){
        alert(this.state.counter);
    }
    render(){  
           return(
            <div>
                <h1>this is class component</h1>
                <h1>{this.state.counter}</h1>
                <br />
                <button onClick={this.increment}>increment</button>
            </div>
        );
    }
}
export default Sairam;