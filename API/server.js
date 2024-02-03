// import 
const express = require('express');
const chalk = require('chalk');
const mysql = require('mysql');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const bodyparser = require('body-parser');

// use
const app = express();
dotenv.config();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

// variable
const port = 3000;
const timeExpire = 60000 //3600000 // 1 hour;
let isLogin = false;

// Connect to database
const dbconfig = mysql.createConnection({
    'host': process.env.host,
    'user': process.env.user,
    'password' : process.env.password,
    'database' : process.env.database
});
dbconfig.connect();

// Seting Cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // แทนที่ด้วย URL ของ Vue.js 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

//starter page
app.get('/',(req,res) => {
    res.send("Hello, This is First message in my project");
});

// Search Profile
app.post('/searchprofile',(req,res) => {
    try {
        const username = req.body.username;
        const email = req.body.email;
        // Check user in user table
        dbconfig.query('SELECT * FROM user WHERE username = ? AND email = ?', [username, email], (err,result)=> {
            if(result.length == 1){
                isLogin = true;
                setTimeout(()=> {isLogin = false},timeExpire);
                res.status(200).json({role: "user", result: result[0]});
            }
            else {
                // Check user in pet_sitter table
                dbconfig.query('SELECT * FROM pet_sitter WHERE username = ? AND email = ? ', [username, email], (err,result) => {
                    if(result.length == 1){
                        isLogin = true;
                        setTimeout(()=> {isLogin = false},timeExpire);
                        res.status(200).json({role: "pet_sitter", result: result[0]});
                    }
                    else {
                        // Check user in admin table
                        dbconfig.query('SELECT * FROM admin WHERE username = ? AND email = ? ', [username, email], (err,result) => {
                            if(result.length == 1){
                                isLogin = true;
                                setTimeout(()=> {isLogin = false},timeExpire);
                                res.status(200).json({role: "admin", result: result[0]});
                            }
                            else {
                                res.status(404).json({user:0})
                            }
                        });
                    }
                });
            }
        });
    }catch(err){
        console.log("Error : " , err);
        res.status(500).json({error: err});
    }
});

// Profile_data
app.post('/profile',(req,res) => {
    try {
        const role = req.body.role;
        const id = req.body.id;
        let table = ""
        if(role == "ps"){
            table = "pet_sitter"
        }
        else{
            table = role
        }
        dbconfig.query(`SELECT * FROM ${table} WHERE ${role}_id = ${id}`, (err,result) => {
            res.status(200).json(result[0]);
        });
    }
    catch(err) {
        console.log("Error : ", err);
        res.status(500).json({error : err});
    }
});

// Reset password
app.post('/resetpassword',(req,res) => {
    try {
        const role = req.body.role;
        const id = req.body.id;
        const new_password = req.body.new_password;
        let table = ""
        if(role == "ps"){
            table = "pet_sitter"
        }
        else{ 
            table = role
        }
        bcrypt.hash(new_password,10,(err,hash)=> {
            const new_password = hash;
            dbconfig.query(`UPDATE ${table} SET password = ? WHERE ${role}_id = ?`,[new_password,id],() => {
                res.status(200).json({status: 1});
            });
        });
    }
    catch(err) {
        console.log("Error : ", err);
        res.status(500).json({error : err});
    }
});

// Register pet_sitter
app.post('/register_pet_sitter',(req,res) => {
    try {
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
                    return res.status(200).json({message: "Register Pet Sitter Successfully",status:true});
                });
            });
        }
    }
    catch(err){
        console.log("Error : ", err);
        res.status(500).json({error : err});
    }
});

//Register Admin
app.post('/register_admin',(req,res) => {
    try {
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
                    return res.status(200).json({message: "Register Admin Successfully",status:true});
                });
            });
        }
    }
    catch(err){
        console.log("Error : ", err);
        res.status(500).json({error : err});
    }
});

//Register user
app.post('/register_user',(req,res) => {
    try {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const username = req.body.username;
        const email = req.body.email;
        const phone = req.body.phone;
        const password = req.body.password1;

        bcrypt.hash(password, 10, (err,hash) => {
            const password_hash = hash;
            dbconfig.query('INSERT INTO user(firstname, lastname, username, email, phone, password) VALUES(?, ?, ?, ?, ?, ?)',[firstname, lastname, username, email, phone, password_hash], (err) => {
                return res.status(200).json({message: "Register User Successfully",status:true});
            });
        });
    }
    catch(err) {
        console.log("Error : ", err);
        res.status(500).json({error : err});
    }
    
});

// check login
app.get('/check_login',(req,res) => {
    res.status(200).json({isLogin:isLogin});
});

// Login
 app.post('/login', async(req,res) => {
    try {
        let username = req.body.username;
        let password = req.body.password;

        dbconfig.query('SELECT * FROM user WHERE username = ?',[username], async ( err, result) => {
            if(result.length === 1){
                let password_in_db = result[0].password;
                let status = await bcrypt.compare(password, password_in_db);
                if(status == true){
                    isLogin = true;
                    setTimeout(()=> {isLogin = false},timeExpire);
                    res.status(200).json({user:1,role: "user", user_id : result[0]['user_id']});
                }
                else{
                    res.json({message: "password_is_not_match"});
                }    
            }
            else{
                dbconfig.query('SELECT * FROM pet_sitter WHERE username = ? ',[username],async (err,result) => {
                    if(result.length === 1){
                        let password_in_db = result[0].password;
                        let status = await bcrypt.compare(password, password_in_db);
                        if(status == true){
                            isLogin = true;
                            setTimeout(()=> {isLogin = false},timeExpire);
                            res.status(200).json({user:1,role: "pet_sitter",ps_id : result[0]['ps_id']});
                        }
                        else{
                            res.json({message: "password_is_not_match"});
                        }    
                    }
                    else{
                        dbconfig.query('SELECT * FROM admin WHERE username = ?',[username], async (err,result) => {
                            if(result.length === 1){
                                let password_in_db = result[0].password;
                                let status = await bcrypt.compare(password, password_in_db);
                                if(status == true){
                                    isLogin = true;
                                    setTimeout(()=> {isLogin = false},timeExpire);
                                    res.status(200).json({user:1,role: "admin",admin_id : result[0]['admin_id']});
                                }
                                else{
                                    res.json({message: "password_is_not_match"});
                                }    
                            }
                            else{
                                res.status(404).json({user:0});
                            }
                        });
                    }
                });
            }     
        });
    }
    catch(err) {
        console.log("Error : ", err);
        res.status(500).json({error : err});
    }

});

// Show pet sitter by id
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
app.get('/all_pet_sitter',(req,res)=> {
    try {
        dbconfig.query('SELECT * FROM pet_sitter',(err,result) => {
            res.status(200).json(result);
        });
    }
    catch(err){
        console.log("Error : ", err);
        res.status(500).json({error : err});
    }
});

// Delete user
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