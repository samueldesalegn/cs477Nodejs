const Student = require('../models/student');


exports.fetchAll = async (req, res, next) => {
    const students = await Student.find();
    res.status(200).json(students);
};

exports.fetchById = async (req, res, next) => {
    const student = await Student.findById(req.params.id);
    res.json(student);
}
exports.fetchByStCourseId = async (req, res, next) => {
  
  const student = await Student.findById({_id: req.params.id}).where({courseId: "CS303"});
  res.json(student.courses);
}

exports.save = async (req, res, next) => {
    const stud = await new Student(req.body).save();
    res.status(201).json(stud);
}

exports.update = async (req, res, next) => {
    const updated = await Student.updateOne({_id: req.params.id}, req.body);
    res.json(updated);
}

exports.deleteById = async (req, res, next) => {
	const result = await Student.findByIdAndDelete(req.params.id);
	res.json(result);
}