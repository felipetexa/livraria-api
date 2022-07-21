const { Livro } = require('../models');

async function getAllBooks() {
    const response = await Livro.findAll();
    response.forEach(book => {
        return console.log(book.toJSON())
    })
}

getAllBooks();