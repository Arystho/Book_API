const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middlewares/auth');

router.get('/', bookController.getAllBooks);
router.post('/add', authMiddleware, bookController.createBook);
router.get('/get', bookController.getBookById);
router.put('/update', bookController.updateBook);
router.delete('/delete', bookController.deleteBook);

module.exports = router;