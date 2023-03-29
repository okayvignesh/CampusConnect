const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db')
const path = require('path');
const bodyParser = require('body-parser');
const { register, login, userdata } = require('./userController');
require('dotenv').config();



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));




app.get('/userdata/:param', (req, res) => {
    const param = req.params.param;
    const query = `SELECT * FROM users WHERE username='${param}'`;
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});



app.post('/register', register)
app.post('/login', login)


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port  ${PORT}`);
});

