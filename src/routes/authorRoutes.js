const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

router.get('/', authorController.getAllAuthors);
router.post('/add', authorController.createAuthor);
router.get('/get',  authorController.getAuthorById);
router.put('/update', authorController.updateAuthor);
router.delete('/delete', authorController.deleteAuthor);

module.exports = router;