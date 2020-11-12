
const models = require('./models')
const express = require('express')
const app = express()
const {Op} = require('sequelize')
const cors = require('cors')

app.use(cors())
app.use(express.json()) 
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

app.post('/', (req, res) => {
    
    const title = req.body.title
    const year = req.body.year
    const genre = req.body.genre
    const review = req.body.review
    
    let book = models.Book.build({
            title: title,
            year: year,
            genre: genre,
            review: review
        })
        
        .then(book.save())

        res.json({success: true})
}) 

app.listen(8080, () => {
    console.log('Server is running...')
})