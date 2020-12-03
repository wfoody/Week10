// import React, { Component } from 'react'

// class BookDetails extends Component {

//     constructor() {
//         super()
    
//         this.state = {
//           books: []
//         }
//       }

//     fetchBooks = () => {
//         fetch('http://localhost:8080/:bookId')
//             .then(response => response.json())
//             .then(results => {
//                 this.setState({
//                     books: results
//                 })
//             })
//     }

//     componentDidMount() {
//         this.fetchBooks()

//     }

//     render() {
        
//         const bookId = this.props.bookId
        
//         const bookItem = this.state.books.filter(book => {
//             return (
//               book.id = bookId
//             )
//           })   
        
        
        
//         return (
//         <h1>{bookItem}</h1>
//         )
//     }
// }

// export default BookDetails
