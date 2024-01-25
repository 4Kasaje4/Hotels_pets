// import 
const express = require('express');
const chalk = require('chalk');
const mysql = require('mysql');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const session = require('express-session');
const bodyparser = require('body-parser');

// use
const app = express();
dotenv.config();
app.use(bodyparser.json());
app.use(session({
    secret:'mysession',
    resave: false,
    saveUninitialized: false
}));
 
// variable
const port = 3000;
const timeExpire = 3600000 // 1 hour;

// Connect to database
const dbconfig = mysql.createConnection({
    'host': process.env.host,
    'user': process.env.user,
    'password' : process.env.password,
    'database' : process.env.database
});
dbconfig.connect();


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // แทนที่ด้วย URL ของ Vue.js ของคุณ
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

//starter page
app.get('/',(req,res) => {
    res.send("Hello, This is First message in my project");
});

// Forgot password Pet_sitter
app.get('/forgotpassword_pet_sitter',(req,res) => {
    const username = req.body.username;
    const email = req.body.email;
    dbconfig.query('SELECT * FROM pet_sitter WHERE username = ? AND email = ?',[username, email],async (err,result) => {
        if(result.length == 0){
            res.json({message : "No Account"});
        }else{
            res.json(result);
        }
    });
});

// Forgot password Admin
app.get('/forgotpassword_admin',(req,res) => {
    const username = req.body.username;
    const email = req.body.email;
    dbconfig.query('SELECT * FROM admin WHERE username = ? AND email = ?',[username, email],async (err,result) => {
        if(result.length == 0){
            res.json({message : "No Account"});
        }else{
            res.json(result);
        }
    });
});

// Forgot password User
app.get('/forgotpassword_user',(req,res) => {
    const username = req.body.username;
    const email = req.body.email;
    dbconfig.query('SELECT * FROM user WHERE username = ? AND email = ?',[username, email],async (err,result) => {
        if(result.length == 0){
            res.json({message : "No Account"});
        }else{
            res.json(result);
        }
    });
});

// Register pet_sitter
app.post('/register_pet_sitter',(req,res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;
    const password1 = req.body.password1;
    const password2 = req.body.password2; 

    if(password1 != password2){
        res.json({message: "Password is not match"});
    }else{
        bcrypt.hash(password1, 10, (err,hash) => {
            dbconfig.query('INSERT INTO pet_sitter(firstname, lastname, username, email, phone, password) VALUES(?, ?, ?, ?, ?, ?)',[firstname, lastname, username, email, phone, hash], (err) => {
                return res.json({message: "Register Pet Sitter Successfully"});
            });
        });
    }
});

//Register Admin
app.post('/register_admin',(req,res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;
    const password1 = req.body.password1;
    const password2 = req.body.password2; 

    if(password1 != password2){
        res.json({message: "Password is not match"});
    }else{
        bcrypt.hash(password1, 10, (err,hash) => {
            dbconfig.query('INSERT INTO admin(firstname, lastname, username, email, phone, password) VALUES(?, ?, ?, ?, ?, ?)',[firstname, lastname, username, email, phone, hash], (err) => {
                return res.json({message: "Register Admin Successfully"});
            });
        });
    }
});

//Register user
app.post('/register_user',(req,res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password1;

        bcrypt.hash(password, 10, (err,hash) => {
            dbconfig.query('INSERT INTO user(firstname, lastname, username, email, phone, password) VALUES(?, ?, ?, ?, ?, ?)',[firstname, lastname, username, email, phone, hash], (err) => {
                return res.json({message: "Register User Successfully",status:true});
            });
        });
    
});

// Login User
app.get('/login_user',async(req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    dbconfig.query('SELECT * FROM user WHERE username = ?',[username], async ( err, result) => {
        if(result.length === 0){
            res.json({message: "No account"})
        }
        else{
            let password_in_db = result[0].password;
            let status = await bcrypt.compare(password, password_in_db);
            if(status == true){
                req.session.username = username;
                req.session.password = password_in_db;
                req.session.login = true;
                req.session.role = "User";
                req.session.cookie.maxAge = timeExpire;
                res.json({message: "Login success"});
            }
            else{
                res.json({message: "Password is not match"});
            }    
        }     
    });

});


// Login Admin
app.get('/login_admin',async(req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    dbconfig.query('SELECT * FROM admin WHERE username = ?',[username], async ( err, result) => {
        if(result.length === 0){
            res.json({message: "No account"})
        }
        else{
            let password_in_db = result[0].password;
            let status = await bcrypt.compare(password, password_in_db);
            if(status == true){
                req.session.username = username;
                req.session.password = password_in_db;
                req.session.login = true;
                req.session.role = "Admin";
                req.session.cookie.maxAge = timeExpire;
                res.json({message: "Login success"});
            }
            else{
                res.json({message: "Password is not match"});
            }    
        }     
    });

});

// Login Pet Sitter
app.get('/login_pet_sitter',async(req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    dbconfig.query('SELECT * FROM pet_sitter WHERE username = ?',[username], async ( err, result) => {
        if(result.length === 0){
            res.json({message: "No account"})
        }
        else{
            let password_in_db = result[0].password;
            let status = await bcrypt.compare(password, password_in_db);
            if(status == true){
                req.session.username = username;
                req.session.password = password_in_db;
                req.session.login = true;
                req.session.role = "Pet_sitter";
                req.session.cookie.maxAge = timeExpire;
                res.json({message: "Login success"});
            }
            else{
                res.json({message: "Password is not match"});
            }    
        }     
    });

});

// Show pet sitter by id
// Done
app.get('/pet_sitter/:id',(req,res) => {
    const ps_id = req.params.id;
    dbconfig.query(`SELECT * FROM pet_sitter WHERE ps_id = ?`,[ps_id],(err,result) => {

        if(result.length != 0){
            return res.json(result);
        }else{
            res.json({message : "No Account"});
        }
    });
});

// Show all pet sitter
// Done
app.get('/all_pet_sitter',(req,res)=> {
    dbconfig.query('SELECT * FROM pet_sitter',(err,result) => {
        return res.json(result);
    });

});

// Delete user
// Done
app.delete('/delete_user/:id',(req,res) => {
    const user_id = req.params.id;
    dbconfig.query('DELETE FROM user WHERE user_id = ? ', [user_id], (err) => {
        return res.json({message: "Delete user success"});
    });
});

// Delete Admin
// Done
app.delete('/delete_admin/:id',(req,res) => {
    const admin_id = req.params.id;
    dbconfig.query('DELETE FROM admin WHERE admin_id = ?',[admin_id], (err) => {
        return res.json({message : "Delete admin success"});
    })
});

// Delete Pet_sitter
// Done
app.delete('/delete_pet_sitter/:id',(req,res) => {
    const admin_id = req.params.id;
    dbconfig.query('DELETE FROM pet_sitter WHERE ps_id = ?',[admin_id], (err) => {
        return res.json({message : "Delete Pet Sitter success"});
    });
});




app
.listen(port,()=>{
    console.log(chalk.yellow(`Ready on port ${port}`));
});