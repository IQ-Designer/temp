import React from 'react';
import './style.css';
import {Fade} from 'react-reveal';
const Portfolio = () => {
    return(
            <section className="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="sectionTitle">
                            <h3>Our Portfolio</h3>
                        </div>
                    </div>
                    <div className="row">
                        <ul className="portfolioMenu">
                            <li className="pActive"><a href="#!">All</a></li>
                            <li><a href="#!">All</a></li>
                            <li><a href="#!">All</a></li>
                            <li><a href="#!">All</a></li>
                            <li><a href="#!">All</a></li>
                        </ul>
                    </div>
                    <Fade bottom>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="portfolioBox">
                                <img src="/images/b1.jpg" alt="" />
                                <div className="pbabs">
                                    <div className="pbabsContent">
                                        <h5>Momb ios App</h5>
                                        <p>Broadcasting ios App</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="portfolioBox">
                                <img src="/images/b2.jpg" alt="" />
                                <div className="pbabs">
                                    <div className="pbabsContent">
                                        <h5>Momb ios App</h5>
                                        <p>Broadcasting ios App</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="portfolioBox">
                                <img src="/images/b3.jpg" alt="" />
                                <div className="pbabs">
                                    <div className="pbabsContent">
                                        <h5>Momb ios App</h5>
                                        <p>Broadcasting ios App</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="portfolioBox">
                                <img src="/images/b2.jpg" alt="" />
                                <div className="pbabs">
                                    <div className="pbabsContent">
                                        <h5>Momb ios App</h5>
                                        <p>Broadcasting ios App</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="portfolioBox">
                                <img src="/images/b3.jpg" alt="" />
                                <div className="pbabs">
                                    <div className="pbabsContent">
                                        <h5>Momb ios App</h5>
                                        <p>Broadcasting ios App</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="portfolioBox">
                                <img src="/images/b4.jpg" alt="" />
                                <div className="pbabs">
                                    <div className="pbabsContent">
                                        <h5>Momb ios App</h5>
                                        <p>Broadcasting ios App</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Fade>
                </div>
            </section>
    )
}

export default Portfolio;