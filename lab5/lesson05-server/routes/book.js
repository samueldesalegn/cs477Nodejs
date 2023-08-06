const express = require('express');
const bookController = require('../controllers/bookController');



const router = express.Router();

router.get('/', bookController.getBooks);

router.get('/:Id', bookController.getBookById);
router.post('/', bookController.save);
router.put('/:Id', bookController.update);
router.delete('/:Id', bookController.deleteById);


module.exports = router;



