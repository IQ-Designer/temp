import React, { Component } from 'react';
import axios from 'axios';
// import './style.css';

class More extends Component {
    state = {
        Blog : []
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/photos").then(blogres => {this.setState({Blog:blogres.data})})
    }

    render(){
        const {Blog} = this.state;
        const BlogList = Blog.map(blogItem => {
            return(
                <div className="col-lg-6" key={blogItem.id}>
                <div className="blogBox">
                    <div className="blogImage">
                        <a href="#!">
                            <img src={blogItem.url} alt="" />
                        </a>
                    </div>
                    <div className="blogInfo">
                        <span>29/FEB/2020 - WEBSITE - 1 COMMENT</span>
                        <h3>{blogItem.title}</h3>
                    </div>
                </div>
            </div>
            )
        })
        return(
            <section className="blog">
                <div className="container">
                    <div className="row">
                        <div className="sectionTitle">
                            <h3>Latest Blog</h3>
                        </div>
                    </div>
                    <div className="row">
                         {BlogList}
                    </div>
                </div>
            </section>
    )
    }
}

export default More;