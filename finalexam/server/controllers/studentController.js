const Student = require('../models/student');


exports.fetchAll = async (req, res, next) => {
    const students = await Student.find();
    res.status(200).json(students);
};

exports.fetchById = async (req, res, next) => {
    const student = await Student.findById(req.params.id);
    res.json(student);
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




exports.getByStudentId = async (req, res, next) => {
    const stu = await Student.findOne({ studentId: req.params.studentId });
    if (stu) {
        res.status(200).json(stu);
    } else {
        res.status(404).json({ message: 'could not find student with ID: ' + req.params.studentId });
    }
}

exports.upsertStudent = async (req, res, next) => {
    const existing = await Student.findOne({ studentId: req.body.studentId });
    if (existing) {
        const result = await Student.findByIdAndUpdate(existing._id, req.body, {
            new: true
        });
        // Student.findOneAndUpdate({studentId: req.body.studentId}, req.body);
        // Student.findOneAndUpdate({_id: existing._id}, req.body);
        res.status(200).json(result);
    } else {
        const saved = await new Student(req.body).save();
        res.status(200).json(saved);
    }
}

exports.getByStudentIdAndCourseId = async (req, res, next) => {
    const studentId = req.params.studentId;
    const existing = await Student.findOne({ studentId });
    if (existing) {
        const c = existing.courses.find(c => c.courseId === req.params.courseId);
        if (c) {
            res.status(200).json(c);
        } else {
            res.status(404).json({ error: `Couldn't find student with ID ${studentId}, course Id: ${req.params.courseId}` });
        }
    } else {
        res.status(404).json({ error: `Couldn't find student with ID ${studentId}` });
    }
}