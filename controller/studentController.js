import * as Student from "../model/studentModel.js";

// Get all students
export const getStudents = async (req, res) => {
    try {
        const students = await Student.getAllStudents();
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get single student
export const getStudent = async (req, res) => {
    try {
        const student = await Student.getStudentById(req.params.id);
        if (!student) return res.status(404).json({ message: "Student not found" });
        res.json(student);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create student
export const createNewStudent = async (req, res) => {
    try {
        const { name, email, course } = req.body;
        const result = await Student.createStudent({ name, email, course });
        res.status(201).json({ message: "Student created", id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update student
export const updateExistingStudent = async (req, res) => {
    try {
        const { name, email, course } = req.body;
        await Student.updateStudent(req.params.id, { name, email, course });
        res.json({ message: "Student updated" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete student
export const deleteExistingStudent = async (req, res) => {
    try {
        await Student.deleteStudent(req.params.id);
        res.json({ message: "Student deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
