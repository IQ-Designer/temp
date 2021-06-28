import React from 'react';
import './style.css';
import {Fade} from 'react-reveal';
const Contact = () => {
    return(
            <section className="contact">
                <div className="container">
                    <div className="row">
                        <div className="sectionTitle">
                            <h3>Contact</h3>
                        </div>
                    </div>
                    <div className="row">
                        <Fade left>
                        <div className="col-lg-4">
                            <div className="contactBox">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                        <div className="cbIcon">
                                        <div className="cbCenterIcon">
                                            <i className="bi bi-cart"></i>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                                        <div className="cbInfo">
                                        <div className="cbCenterText">
                                            <h5>Phone</h5>
                                            <span>07722844184</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>
                        <Fade left>
                        <div className="col-lg-4">
                            <div className="contactBox">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                        <div className="cbIcon">
                                        <div className="cbCenterIcon">
                                            <i className="bi bi-cart"></i>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                                        <div className="cbInfo">
                                        <div className="cbCenterText">
                                            <h5>Phone</h5>
                                            <span>07722844184</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>
                        <Fade left>
                        <div className="col-lg-4">
                            <div className="contactBox">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                        <div className="cbIcon">
                                        <div className="cbCenterIcon">
                                            <i className="bi bi-cart"></i>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                                        <div className="cbInfo">
                                        <div className="cbCenterText">
                                            <h5>Phone</h5>
                                            <span>07722844184</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>
                    </div>
                    <Fade right>
                    <div className="row mt-5">
                        <div className="formTitle mt-5">
                            <h3>Send Message</h3>
                        </div>
                        <div className="formContent mt-5">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Enter email" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Enter email" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Enter email" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <textarea className="form-control"  rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="contactSubmit mt-5">
                                    <button className="btn contactBtn">Submit Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Fade>
                </div>
            </section>
    )
}

export default Contact;