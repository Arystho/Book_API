const { Book, Author } = require('../models');

exports.createBook = async (req, res, next) => {
    try {
        // req.body > get the data from the request body (from the form on the frontend)
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch(err){
        next(err)
    }
}

exports.getAllBooks = async (req, res, next) => {
    try {
        // SELECT * FROM books LEFT JOIN authors ON books.authorId = authors.id;
        const books = await Book.findAll({ include: Author });
        res.status(200).json(books);
    } catch(err){
        next(err)
    }
}

exports.getBookById = async (req, res, next) => {
    try {
        const book = await book.findByPK(req.param.id, { include: Author});
        if(!book) {
            return res.status(404).json({message: 'livre existe pas'});
        } 
        res.json(book);
    } catch(err) {
        next(err)
    }
}

exports.updateBook = async (req, res, next) => {
    try {
        const book = await book.findByPK(req.param.id);
        if(!book) {
            return res.status(404).json({message: 'livre non trouvé'});
        }
        await book.update(req,body);
    } catch(err) {
        next(err)
    }
}

exports.deleteBook = async (req, res, next) => {
    try {
        const book = await book.findByPK(req.param.id);
        if(!book) {
            return res.status(404).json({message: 'Livre non trouvé'})
        }
        await book.delete(req,body);
    } catch(err) {
        next(err)
    }
}