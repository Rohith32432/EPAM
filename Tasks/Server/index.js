const express = require('express');
const fs = require('fs');

const server = express();
server.use(express.json());

const pwd = new Set(); // Using Set to avoid duplicate passwords

const check = (req, res, next) => {
    const password = req.query.pwd;
    if (password !== '') {
        if (pwd.has(password)) {
            next();
        } else {
            res.send('Incorrect password');
        }
    } else {
        res.send('Please provide a password');
    }
};

server.get('/', check, (req, res) => {
    const data = 'accessible';
    res.send(data);
});

server.post('/', (req, res) => {
    const { name, content, password } = req.body;
    if (password !== '') {
        pwd.add(password);
        fs.writeFile(`${name}.txt`, content, (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error creating file');
            } else {
                console.log('File created');
                res.json('File created successfully');
            }
        });
    } else {
        res.status(400).send('Please provide a password');
    }
});

server.listen(2024, () => {
    console.log('Server listening at 2024');
});
