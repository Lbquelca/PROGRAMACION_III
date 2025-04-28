const userModel = require('../models/userModel');

exports.list = (req, res) => {
    userModel.getAllUsers((err, users) => {
        if (err) throw err;
        res.render('index', { users });
    });
};

exports.create = (req, res) => {
    res.render('create');
};

exports.save = (req, res) => {
    const data = req.body;
    userModel.createUser(data, (err) => {
        if (err) throw err;
        res.redirect('/');
    });
};

exports.edit = (req, res) => {
    const id = req.params.id;
    userModel.getUserById(id, (err, user) => {
        if (err) throw err;
        res.render('edit', { user: user[0] });
    });
};

exports.update = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    userModel.updateUser(data, id, (err) => {
        if (err) throw err;
        res.redirect('/');
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    userModel.deleteUser(id, (err) => {
        if (err) throw err;
        res.redirect('/');
    });
};
