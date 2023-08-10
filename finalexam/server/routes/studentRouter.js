const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

router.get('/', studentController.fetchAll);

router.get('/:id', studentController.fetchById);
router.get('/:id/courses/:cid', studentController.fetchByStCourseId);
// router.get('/id/courses/:id', studentController.fetchByCourseId);
router.post('/', studentController.save);
router.put('/:id', studentController.update);
router.delete('/:id', studentController.deleteById);


module.exports = router;