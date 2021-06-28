import React, { Component } from 'react';
import './style.css';
import {Fade} from 'react-reveal';
import axios from 'axios';

class Store extends Component {
    state = {
        Store : []
    }

    componentDidMount(){
        axios.get("http://specoper99.fikracamp.com/products").then(storeres => {this.setState({Store:storeres.data.products})});
    }
    render(){
        const {Store} = this.state;
        const StoreList = Store.map(StoreItem => {
            return(
                <div className="col-lg-3" key={StoreItem.id}>
                <div className="storeBox">
                    <div className="sbImage">
                        <img src={StoreItem.image} alt="" />
                    </div>
                    <div className="sbinfo">
                        <h6>{StoreItem.title}</h6>
                        <span>{StoreItem.price} $</span>
                    </div>
                </div>
            </div>
            )
        })

        return(
            <section className="store">
                <div className="container">
                    <div className="row">
                        <div className="sectionTitle">
                            <h3>Our Store</h3>
                        </div>
                    </div>
                    <div className="row">
                        <ul className="storeMenu">
                            <li className="pActive"><a href="#!">All</a></li>
                            <li><a href="#!">All</a></li>
                            <li><a href="#!">All</a></li>
                            <li><a href="#!">All</a></li>
                            <li><a href="#!">All</a></li>
                        </ul>
                    </div>
                    <Fade bottom>
                    <div className="row">
                        {StoreList}
                    </div>
                    <div className="row">
                        <div className="contactSubmit mt-5">
                            <button className="btn contactBtn">Read More</button>
                        </div>
                    </div>
                    </Fade>
                </div>
            </section>
    )
    }

}

export default Store;