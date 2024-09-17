const { Author } = require('../models');

exports.createAuthor = async (req, res, next) => {
    try {
        const author = await Author.create(req.body);
        res.status(201).json(author);
    } catch(err){
        next(err)
    }
}

exports.getAllAuthors = async (req, res, next) => {
    try {
        const authors = await Author.findAll();
        res.status(200).json(authors);
    } catch(err){
        next(err)
    }
}

exports.getAuthorById = async (req, res, next) => {
    try {
        const book = await author.findByPK(req.param.id);
        if(!book) {
            return res.status(404).json({message: 'Auteur existe pas'});
        } 
        res.json(author);
    } catch(err) {
        next(err)
    }
}


exports.updateAuthor = async (req, res, next) => {
    try {
        const author = await Author.findByPK(req.param.id);
        if(!author) {
            return res.status(404).json({message: 'Auteur non trouver'});
        }
        await author.update(req.body);
        res.json(author);
    } catch(err) {
        next(err)
    }
}

exports.deleteAuthor = async (req, res, next) => {
    try {
        const author = await Author.finByPK(req.param.id);
        if(!author) {
            return res.status(404).json ({message: 'Auteur non trouver'});
        }
        await author.destroy();
        res.status(204).send(); 
    } catch(err) {
        next(err);
    }
}