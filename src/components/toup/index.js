import React, { Component } from 'react';
import './style.css';
    // ToUp Work
    const ToUpWork = () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
    }
class Toup extends Component {
    componentDidMount(){
        // ToUp Show and Hide
        window.addEventListener("scroll", () => {
            if(window.pageYOffset>700){
                document.getElementById("ToUp").style.opacity = "1";
            }else{
                document.getElementById("ToUp").style.opacity = "0";
            }
        });

    }

    render(){
        return(
            <a href="#!" id="ToUp" onClick={ToUpWork}>
                <i className="bi bi-arrow-up-short"></i>
            </a>
    )
    }
}

export default Toup;