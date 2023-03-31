const db = require('./db');

// function register(req, res) {
//     const { username, email, password, phone, address, dob, course, skills } = req.body;
//     db.query(
//         "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(50), email VARCHAR(50), password VARCHAR(40), phone_no VARCHAR(10), address VARCHAR(250), dob DATE, course VARCHAR(100), skills JSON, is_active BOOLEAN, created_at DATETIME DEFAULT NOW()); CREATE TABLE IF NOT EXISTS log (id INT AUTO_INCREMENT PRIMARY KEY, username  VARCHAR(50))",
//         (err, result) => {
//             if (err) {
//                 console.error(err);
//                 res.send("Error creating table");
//             } else {
//                 db.query(
//                     `INSERT INTO users (username, email, password, phone_no,  address, dob,course, skills, is_active) 
//                     VALUES (?, ?, ?, ?, ?, DATE (?), ?, ?, TRUE); INSERT INTO log(username) VALUES (?)`,
//                     [username, email, password, phone, address, dob, course, JSON.stringify(skills)], [username],
//                     (err, result) => {
//                         if (err) {
//                             console.error(err);
//                             res.status(500).json({ message: "Error inserting values" });
//                         } else {
//                             res.send(result);
//                         }
//                     }
//                 );
//             }
//         }
//     );
// }

function register(req, res) {
    const { username, email, password, phone, address, dob, course, skills } = req.body;
    console.log( JSON.stringify(skills))
    db.query(
        "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(50), email VARCHAR(50), password VARCHAR(40), phone_no VARCHAR(10), address VARCHAR(250), dob DATE, course VARCHAR(100), skills JSON, is_active BOOLEAN, created_at DATETIME DEFAULT NOW())",
        (err, result) => {
            if (err) {
                console.error(err);
                res.send("Error creating users table");
            } else {
                // create log table if not exists
                db.query(
                    "CREATE TABLE IF NOT EXISTS log (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(50))",
                    (err, result) => {
                        if (err) {
                            console.error(err);
                            res.send("Error creating log table");
                        } else {
                            // insert new user into users table
                            db.query(
                                `INSERT INTO users (username, email, password, phone_no,  address, dob, course, skills, is_active) 
                                VALUES (?, ?, ?, ?, ?, ?, ?, ?, TRUE)`,
                                [username, email, password, phone, address, dob, course, JSON.stringify(skills)],
                                (err, result) => {
                                    if (err) {
                                        console.error(err);
                                        res.status(500).json({ message: "Error inserting new user" });
                                    } else {
                                        // insert username into log table
                                        db.query(
                                            "INSERT INTO log (username) VALUES (?)",
                                            [username],
                                            (err, result) => {
                                                if (err) {
                                                    console.error(err);
                                                }
                                            }
                                        );
                                        res.status(200).json({ message: "User registration successful" });
                                    }
                                }
                            );
                        }
                    }
                );
            }
        }
    );
}



function login(req, res) {
    const { username, password } = req.body;
    db.query(
        "SELECT * FROM users WHERE username=(?) AND password=(?)", [username, password],
        (err, result) => {
            if (err) {
                console.error(err);
                res.send("Error fetching details");
            } else if (result.length === 0) {
                res.status(401).json({ message: "Invalid username or password" });
            } else {
                res.status(200).send(result);
            }
        }
    )
}



module.exports = {
    register,
    login,
};
