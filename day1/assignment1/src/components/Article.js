import React, { Component } from 'react'
import '../css/Article.css'

class Article extends Component {

    render () {
        return (
            
            <div id='container'>
                <div id ='titleAndText'>
                    <h1 id='articleTitle'>{this.props.title}</h1>
                    <p>{this.props.text}</p>
                </div>
                <div id='commentLikeBar'>
                    <b><p>{this.props.commentnumber} comments</p></b>
                    <b><p>{this.props.likenumber} likes</p></b>
                </div>
            </div>
        )
    }
}

export default Article