
import React, { Component } from 'react'
import '../css/FeaturedArticle.css'

class FeaturedArticle extends Component {

    render () {

        return (
            <div id='featuredContainer'>
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default FeaturedArticle