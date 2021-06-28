import React from 'react';
import './style.css';
import {Fade} from 'react-reveal';
const Testimonials = () => {
    return(
        <section className="testimonials">
            <div className="container">
                <div className="row">
                    <div className="sectionTitle">
                        <h3>Testimonials</h3>
                    </div>
                </div>
                <Fade top>
                <div className="row">
                    <div className="col-lg-12">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>
                            <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">        
                                    <div className="col-lg-6">
                                        <div className="testimonialsBox">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="tbAvatar">
                                                    <img src="/images/2.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="tbText">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                                    <h5>Jennifer Lutheran</h5>
                                                    <span>CEO at pxdraft</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="testimonialsBox">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="tbAvatar">
                                                    <img src="/images/2.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="tbText">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                                    <h5>Jennifer Lutheran</h5>
                                                    <span>CEO at pxdraft</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">        
                                    <div className="col-lg-6">
                                        <div className="testimonialsBox">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="tbAvatar">
                                                    <img src="/images/2.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="tbText">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                                    <h5>Jennifer Lutheran</h5>
                                                    <span>CEO at pxdraft</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="testimonialsBox">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="tbAvatar">
                                                    <img src="/images/2.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="tbText">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                                    <h5>Jennifer Lutheran</h5>
                                                    <span>CEO at pxdraft</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
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

export default Testimonials;