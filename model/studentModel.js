import pool from "../config/db.js";

// Get all students
export const getAllStudents = async () => {
    const [rows] = await pool.query("SELECT * FROM students");
    return rows;
};

// Get single student
export const getStudentById = async (id) => {
    const [rows] = await pool.query("SELECT * FROM students WHERE id = ?", [id]);
    return rows[0]; // return undefined if not found
};

// Create student
export const createStudent = async ({ name, email, course }) => {
    const [result] = await pool.query(
        "INSERT INTO students (name, email, course) VALUES (?, ?, ?)",
        [name, email, course]
    );
    return result; // contains insertId
};

// Update student
export const updateStudent = async (id, { name, email, course }) => {
    const [result] = await pool.query(
        "UPDATE students SET name = ?, email = ?, course = ? WHERE id = ?",
        [name, email, course, id]
    );
    return result; // contains affectedRows
};

// Delete student
export const deleteStudent = async (id) => {
    const [result] = await pool.query(
        "DELETE FROM students WHERE id = ?",
        [id]
    );
    return result; // contains affectedRows
};
