const express = require('express');
const bookController = require('../controllers/bookController');



const router = express.Router();

router.get('/', bookController.getBooks);

router.get('/:id', bookController.getBookById);
router.post('/', bookController.save);
router.put('/:id', bookController.update);
router.delete('/:id', bookController.deleteById);




module.exports = router;



