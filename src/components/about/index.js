import React from 'react';
import './style.css';
import {Fade} from 'react-reveal';
const About = () => {
    return(
        <section className="about">
            <div className="container">
                <div className="row">
                    <Fade left>
                    <div className="col-lg-6">
                        <div className="aboutText">
                            <h3>Biography</h3>
                            <p>We’re a creative agency with an expertise in make custom websites.</p>
                            <hr className="abh" />
                            <div className="atp">
                                <p>Founded in 2000, Dsn Grid has become one of the best Digital Agency in ThemeForest.</p>
                                <p>Blue money going forward, but deploy to production. C-suite. First-order optimal strategies build on a culture of contribution and inclusion so those options</p>
                            </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="col-lg-6">
                        <div className="aboutImage">
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default About;