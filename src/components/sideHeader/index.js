import React from 'react';
import './style.css';

const SideHeader = () => {
    return(
        <div className="sideHeader">
            <div className="shContain">
                <div className="shButton">
                    <a href="#!"><i className="bi bi-x"></i></a>
                </div>
                <div className="shTitle">
                    <h3>LOGO</h3>
                </div>
                <div className="shNav">
                    <ul>
                        <li><a className="navActive" href="#!">Home</a></li>
                        <li><a href="#!">About</a></li>
                        <li><a href="#!">Portfolio</a></li>
                        <li><a href="#!">Blog</a></li>
                        <li><a href="#!">Contact</a></li>
                    </ul>
                </div>
                <div className="shSocial">
                    <ul>
                        <li><a href="#!"><i className="bi bi-facebook"></i></a></li>
                        <li><a href="#!"><i className="bi bi-instagram"></i></a></li>
                        <li><a href="#!"><i className="bi bi-telegram"></i></a></li>
                        <li><a href="#!"><i className="bi bi-twitter"></i></a></li>
                        <li><a href="#!"><i className="bi bi-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideHeader;