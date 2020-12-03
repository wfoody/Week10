
import React, { Component } from 'react'
// import Menu from './Components/Menu'
import './App.css'


class App extends Component {


  constructor() {
    super()

    this.state = {
      books: []
    }
  }

//   handleDeleteBook = () => {

//     fetch('http://localhost:8080/delete-book', {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(this.state.id) // before was this.state
//     }).then(response => response.json())
//     .then(result => {
//         if(result.success) {
//             this.props.history.push('/')
//         }
//     })

//     console.log('hello')
// }

  render() {

    const bookItems = this.state.books.map(book => {
      return (
        <div>
        <li>{book.title}   <br />        <img src={book.coverUrl} />
          <details><summary>More info</summary><p>
          {book.review} - {book.year}: <br />
          
            Follows the story of a young boy who is a wizard and then dies and then comes back.
          </p><button>Update</button><button>Delete</button></details></li><br />
        </div>
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