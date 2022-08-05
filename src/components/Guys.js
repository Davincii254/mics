import React, { Component } from "react";
import guyys from '../assets/guys.jpg'

class Guys extends Component {

    state = {
        theguys : []
    }

    componentDidMount(){
        fetch('http://localhost:6001/theguys')
        .then(r => r.json)
        .then(resp =>{
            this.setState({
                theguys: resp
            })
        })
    }

    

    render() {
    return(
        <div className="guys">
            <div className="container1">
            <img className="guyys" src={guyys} alt="my image" />
            <button className="meet" >Meet the guys</button>
            </div>
        </div>
    );
}
}










export default Guys;