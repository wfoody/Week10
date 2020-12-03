
const models = require('./models')
const express = require('express')
const app = express()
const {Op} = require('sequelize')
const cors = require('cors')
// const bodyParser = require('body-parser')

app.use(cors())
app.use(express.json()) // body parser
// app.use(bodyParser.json())

// models.Book.findByPk(1)
// .then((book) => console.log(book))








// let book = models.Book.build({
//     title: 'Harry P',
//     year: '2004',
//     genre:'victorian love',
//     review: 'bad'
// })

// book.save()
// .then((persistedBook) => {
//     console.log(persistedBook)
// })

// update 

// models.Book.update({
//     review: 'super good'
// }, {
//     where: {
//         id: 4
//     }
// })
// .then((updatedBook) => console.log(updatedBook))


// delete

// models.Book.destroy({
//     where: {
//         id: 3
//     }
// })
app.get('/', (req, res) => {
    
    
    
    
    console.log(200)
    // res.send('hello')
    models.Book.findAll().then(books => {
        res.send(books)
    })
})

app.post('/add-book', (req, res) => {
    
    const title = req.body.title
    const author = req.body.author
    const year = req.body.year
    const review = req.body.review
    const coverUrl = req.body.coverUrl
    
    let book = models.Book.build({
            title: title,
            author: author,
            year: year,
            review: review,
            coverUrl: coverUrl
        })
        
        book.save()

        res.json({success: true})
}) 

app.get('/:bookId', (req, res) => {

    const bookId = req.params.bookId

    models.Book.findByPk(bookId).then(book => {
        res.json(book)
    })
})

app.delete('/delete-book', (req, res) => {
    
    const bookId = req.body.id
    
    models.Book.destroy({
        where: {
            id: bookId
            }
        })

        res.json({success: true})
})

app.listen(8080, () => {
    console.log('Server is running...')
})