import React, { Component } from 'react';
import './style.css';
import {Link} from 'react-scroll';

class Header extends Component {
    componentDidMount(){
        window.addEventListener("scroll",()=>{
            const header = document.querySelector(".bottomHeader");
            header.classList.toggle("sticky",window.scrollY > 700)
        })
    }
    render(){
        return(
            <header>
                <div className="container">
                    <div className="topHeader">
                        <div className="col-lg-12">
                            <div className="headerContainer">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="logo">
                                        <h3>LOGO</h3>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8">
                                    <div className="social">
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
                        </div>
                    </div>
                    <div className="separated"></div>
                    <div className="bottomHeader">
                        <div className="col-lg-12">
                            <div className="headerContainer">
                                <div className="col-lg-8 col-md-10">
                                    <div className="nav">
                                        <ul>
                                            <li >
                                            <Link href="#" activeClass="navActive" to="hero" spy={true} smooth={true} offset={-300} duration={300}>Home</Link>
                                            </li>
                                            <li>
                                            <Link href="#" activeClass="navActive" to="about" spy={true} smooth={true} offset={-100} duration={300}>About</Link>
                                            </li>
                                            <li >
                                            <Link href="#" activeClass="navActive" to="portfolio" spy={true} smooth={true} offset={-100} duration={300}>Portfolio</Link>
                                            </li>
                                            <li >
                                            <Link href="#" activeClass="navActive" to="blog" spy={true} smooth={true} offset={-100} duration={300}>Blog</Link>
                                            </li>
                                            <li >
                                            <Link href="#" activeClass="navActive" to="contact" spy={true} smooth={true} offset={-100} duration={300}>Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-2 col-sm-12">
                                    <div className="rightNav">
                                        <ul>
                                            <li><a href="#!"><i className="bi bi-search"></i></a></li>
                                            <li className="menu"><a href="#!"><i className="bi bi-list"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;