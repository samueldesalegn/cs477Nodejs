const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

router.get('/', studentController.fetchAll);

router.get('/:id', studentController.fetchById);
router.get('/:studentId', studentController.getByStudentId);
router.post('/', studentController.upsertStudent);
router.get('/:studentId/courses/:courseId', studentController.getByStudentIdAndCourseId);
router.get('/:studentId/courses/:courseId', studentController.getByStudentIdAndCourseId);
router.post('/', studentController.save);
router.put('/:id', studentController.update);
router.delete('/:id', studentController.deleteById);


module.exports = router;