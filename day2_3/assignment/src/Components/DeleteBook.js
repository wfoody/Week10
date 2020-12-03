
import React, { Component } from 'react'

class DeleteBook extends Component {


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

    handleDeleteBook = () => {

        fetch('http://localhost:8080/delete-book', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(response => response.json())
        .then(result => {
            if(result.success) {
                this.props.history.push('/')
            }
        })
    }


    render() {

        return (
            <div>
                <button onClick={this.handleDeleteBook}></button>
            </div>
        )
    }
}