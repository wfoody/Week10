
import React, { Component } from 'react'
import Menu from './Components/Menu'

class App extends Component {


  constructor() {
    super()

    this.state = {
      books: []
    }
  }

  render() {

    const bookItems = this.state.books.map(book => {
      return (
        <li>{book.title} - {book.review}</li>

      )
    })  
    
    return (

      <div>
      <ul>{bookItems}</ul>
      </div>
    )
  
  }

  
  fetchBooks = () => {
    fetch('http://localhost:8080')
    .then(response => response.json())
    .then(results => {
      this.setState({
      books: results
      })
    })
  }
  
  componentDidMount() {
    this.fetchBooks()
  
  }


 

  
}

export default App