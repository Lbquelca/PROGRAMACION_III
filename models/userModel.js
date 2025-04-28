const db = require('./db');

const getAllUsers = (callback) => {
    db.query('SELECT * FROM users', callback);
};

const createUser = (data, callback) => {
    db.query('INSERT INTO users SET ?', data, callback);
};

const getUserById = (id, callback) => {
    db.query('SELECT * FROM users WHERE id = ?', [id], callback);
};

const updateUser = (data, id, callback) => {
    db.query('UPDATE users SET ? WHERE id = ?', [data, id], callback);
};

const deleteUser = (id, callback) => {
    db.query('DELETE FROM users WHERE id = ?', [id], callback);
};

module.exports = { getAllUsers, createUser, getUserById, updateUser, deleteUser };
