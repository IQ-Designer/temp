import React from 'react';
import './style.css';

const Hero = () => {
    return(
        <section className="hero">
            <div className="container">
                <div className="col-lg-12">
                    <div className="heroImage">
                        <div className="heroContain">
                            <h3>9 Most Awesome Blue Lake With Snow Mountain</h3>
                            <p>Software Development From 0% to 100%</p>
                            <button className="btn">Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;