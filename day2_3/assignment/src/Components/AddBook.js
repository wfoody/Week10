

import React, { Component } from 'react'
import App from '../App'



class AddBook extends Component {


    constructor() {
        super()

        this.state = {
            title: '',
            author: '',
            year: '',
            review: '',
            coverUrl: ''

        }
    }

    handleSaveBook = () => {

        fetch('http://localhost:8080/add-book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, //             body: JSON.stringify(books)
            body: JSON.stringify(this.state)
        }).then(response => response.json())
        .then(result => {
            if(result.success) {
                this.props.history.push('/')
            }
        })
    }

    handleOnChange = (e) => {
        console.log(e.target.name)
       
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
            <div>
                <input type='text' name='title' placeholder='Title' onChange={this.handleOnChange}/>
                <input type='text' name='author' placeholder='Author' onChange={this.handleOnChange}/>
                <input type='text' name='year' placeholder='Year' onChange={this.handleOnChange}/>
                <input type='text' name='review' placeholder='Review' onChange={this.handleOnChange}/>
                <input type='text' name='coverUrl' placeholder='Book Cover URL' onChange={this.handleOnChange}/>
                <button onClick={this.handleSaveBook}>Save Book</button>
            </div>
            <div>
                <App />
            </div>
            </div>
        )
    }
}

export default AddBook