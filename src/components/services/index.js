import React from 'react';
import './style.css';
import {Fade} from 'react-reveal';

const Service = () => {
    return(
        <section className="services">
            <div className="container">
                <div className="row">
                    <Fade left>
                    <div className="col-lg-4">
                        <div className="servicesBox">
                            <h3>Web Design <span>.</span></h3>
                            <p>Hello, We’re content writer who is fascinated by content fashion, celebrity and lifestyle. We helps clients bring the right content to the right people.</p>
                            <div className="serviceReadMore">
                                <a href="#!">Read More <i className="bi bi-arrow-right-short"></i></a>
                            </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div className="col-lg-4">
                        <div className="servicesBox">
                            <h3>Web Design <span>.</span></h3>
                            <p>Hello, We’re content writer who is fascinated by content fashion, celebrity and lifestyle. We helps clients bring the right content to the right people.</p>
                            <div className="serviceReadMore">
                                <a href="#!">Read More <i className="bi bi-arrow-right-short"></i></a>
                            </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="col-lg-4">
                        <div className="servicesBox">
                            <h3>Web Design <span>.</span></h3>
                            <p>Hello, We’re content writer who is fascinated by content fashion, celebrity and lifestyle. We helps clients bring the right content to the right people.</p>
                            <div className="serviceReadMore">
                                <a href="#!">Read More <i className="bi bi-arrow-right-short"></i></a>
                            </div>
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default Service;