// import 
const express = require('express');
const chalk = require('chalk');
const mysql = require('mysql');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const bodyparser = require('body-parser');
const multer = require('multer');
const path = require('path');
const { serialize } = require('v8');

// use
const app = express();
dotenv.config();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // แทนที่ด้วย URL ของ Vue.js 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

// upload image
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'profile_pic')
    },
    filename: (req,file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
});
const upload = multer({storage: storage});
 
// variable
const port = 3000;
const timeExpire = 3600000 // 1 hour;
let isLogin = false;
let array_login = [];

// Connect to database
const dbconfig = mysql.createConnection({
    'host': process.env.host,
    'user': process.env.user,
    'password' : process.env.password,
    'database' : process.env.database
});
dbconfig.connect();


//starter page
app.get('/',(req,res) => {
    res.send('This is homepage')
});

// Search Profile
app.post('/searchprofile',async (req,res) => {
    async function getUser(table, username, email){
        return new Promise((resolve, reject) => {
            dbconfig.query(`SELECT * FROM ${table} WHERE username = ? AND email = ?`,[username, email], (err,result) => {
                if(err){
                    reject(err);
                }else{
                    resolve(result.length === 1 ? {user : 1, result : result[0]} : {user : 0});
                }
            })
        });
    }
    try {
        const username = req.body.username;
        const email = req.body.email; 
        let result = "";
 
        result = await getUser('user', username, email);
        if(result['user'] === 1){
            isLogin = true
            let id = Math.random() *(10**20);
            array_login.push({id : id, isLogin : isLogin});
            setTimeout(() => {   
                isLogin = false
                for(let i = 0; i < array_login.length; i++){
                    if(array_login[i]['id'] == id){
                        array_login.splice(i,1);
                    }
                }
            }, timeExpire);
            res.json({role : 'user', login_id : id, result : result['result']});
        }else{
            result = await getUser('pet_sitter', username, email);
            if(result['user'] === 1){
                isLogin = true
                let id = Math.random() *(10**20);
                array_login.push({id : id, isLogin : isLogin});
                setTimeout(() => { 
                    isLogin = false
                    for(let i = 0; i < array_login.length; i++){
                        if(array_login[i]['id'] == id){
                            array_login.splice(i,1);
                        }
                    }
                }, timeExpire);
                res.json({role : 'pet_sitter', login_id : id, result : result['result']});
            }else{
                result = await getUser('admin', username, email);
                if(result['user'] === 1){
                    isLogin = true
                    let id = Math.random() *(10**20);
                    array_login.push({id : id, isLogin : isLogin});
                    setTimeout(() => { 
                        isLogin = false
                        for(let i = 0; i < array_login.length; i++){
                            if(array_login[i]['id'] == id){
                                array_login.splice(i,1);
                            }
                        }
                    }, timeExpire);
                    
                    res.json({role : 'admin', login_id : id, result : result['result']});
                }else{
                    res.json({user : 0});
                }
            }
        }  
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
            table = "pet_sitter";
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
app.post('/check_login',async (req,res) => {
    try{
        let login_id = req.body.login_id;

        if (array_login.length !== 0) {
            for (let i = 0; i < array_login.length; i++) {
                if (await array_login[i]['id'] === login_id) {
                    isLogin = true;
                    break;
                }
            }
        }

        if (isLogin) {
            res.json({ isLogin: true });
        } else {
            res.json({ isLogin: false, message: "No user login" });
        }

    }catch(err){
        console.log("Error :", err);
    }
});

// Login
 app.post('/login', async(req,res) => {
    async function login(table, username, password){
        return new Promise((resolve, reject) => {
            dbconfig.query(`SELECT * FROM ${table} WHERE username = ? `,[username], async(err,result) => {
                if(err){
                    reject(err);
                }else{
                    if(result.length === 1){
                        const password_in_db = result[0]['password'];
                        const password_correct = await bcrypt.compare(password, password_in_db);
                        if(password_correct == true){
                            resolve({user : 1, result : result[0]});
                        }else{
                            resolve({user : -1,message : "password_is_not_match"});
                        }
                    }else{
                        resolve({user : 0});
                    }
                }
            });
        })
        
    }
    try {
        const username = req.body.username; 
        const password = req.body.password;
        let result = "";
        result = await login('user', username, password);
        if(result['user'] === 1){
            isLogin = true
            let id = Math.random() *(10**20);
            array_login.push({id : id, isLogin : isLogin});
            setTimeout(() => { 
                isLogin = false
                for(let i = 0; i < array_login.length; i++){
                    if(array_login[i]['id'] == id){
                        array_login.splice(i,1);
                    }
                }
            }, timeExpire);
            res.json({user : 1, role : 'user', login_id : id, user_id : result['result']['user_id']});
            
        }else if(result['user'] === -1 ){
            res.json({message : "password_is_not_match"})
            
        }else{  
            result = await login('pet_sitter', username, password);
            if(result['user'] === 1){
                isLogin = true
                let id = Math.random() *(10**20);
                array_login.push({id : id, isLogin : isLogin});
                setTimeout(() => { 
                    isLogin = false
                    for(let i = 0; i < array_login.length; i++){
                        if(array_login[i]['id'] == id){
                            array_login.splice(i,1);
                        }
                    }
                }, timeExpire);
                res.json({user : 1,login_id : id, role : 'pet_sitter', ps_id : result['result']['ps_id']});
                
            }else if(result['user'] === -1 ){
                res.json({message : "password_is_not_match"})
                
            }else{
                result = await login('admin', username, password);
                if(result['user'] === 1){
                    isLogin = true
                    let id = Math.random() *(10**20);
                    array_login.push({id : id, isLogin : isLogin});
                    setTimeout(() => { 
                        isLogin = false
                        for(let i = 0; i < array_login.length; i++){
                            if(array_login[i]['id'] == id){
                                array_login.splice(i,1);
                            }
                        }
                    }, timeExpire);
                    res.json({user : 1,login_id : id, role : 'admin', admin_id : result['result']['admin_id']});
                    
                }else if(result['user'] === -1 ){
                    res.json({message : "password_is_not_match"})
                    
                }else{
                    res.json({user : 0});
                    
                }
            }
        }


        
    }
    catch(err) {
        console.log("Error : ", err);
        res.status(500).json({error : err});
    }

});

// update profile
app.post('/updateprofile', upload.single('profile_pic'), async (req,res) => {
    try {
        const role = req.body.role;
        const id = req.body.id;

        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const phone = req.body.phone;
        const email = req.body.email;
        const address = req.body.address;
        let profile_pic = null
        let table_db = "";
        let role_id = "";
        if(req.file != undefined){
            profile_pic = req.file.filename;
        }
        if(role == "ps"){
            table_db = "pet_sitter"
            role_id = role + "_id";
        }
        if(role == "user"){
            table_db = role;
            role_id = role + "_id";
        }
        if(role == "admin"){
            table_db = role;
            role_id = role + "_id";
        }

        dbconfig.query(`SELECT ${table_db}_pic FROM ${table_db} WHERE ${role}_id = ${id}`,(err,result)=>{
            if(result[0][`${table_db}_pic`] != null && req.file == null){
                dbconfig.query(`UPDATE ${table_db} SET firstname = ?, lastname = ?, phone = ?, email = ?, address = ? WHERE ${role_id} = ${id}`,[firstname, lastname, phone, email, address],(err,result) => {
                    res.json({status : true, message : "Success"});
                    
                });
            }
            else{
                dbconfig.query(`UPDATE ${table_db} SET firstname = ?, lastname = ?, phone = ?, email = ?, address = ?, ${table_db}_pic = ?  WHERE ${role_id} = ${id}`,[firstname, lastname, phone, email, address, profile_pic],(err,result) => {
                    res.json({status : true, message : "Success"});
                    
                });
            }
        });
        
    }
    catch(err) {
        console.log("Error : ", err);
        res.status(500).json({error : err});
    }
});

// Add pet to hotel
app.post('/add_pet_to_hotel', async (req,res) => {
    try {
        const user_id = req.body.user_id;
        const type = req.body.type;
        const breed = req.body.breed;
        const weight = req.body.weight.toString();
        const name = req.body.nickname;
        const start_date = req.body.start_date;
        const time = req.body.time;
        const pickup = req.body.pickup;
        const allergies = req.body.allergies;
        const other = req.body.other;

        console.log(user_id, type, breed, weight, name, start_date, time, pickup, allergies, other);

        dbconfig.query('SELECT ps_id FROM pet_sitter WHERE status IS NULL LIMIT 1',(err,result)=> {
            console.log(result.length);
            if(result.length != 0){
                const ps_id = result[0]['ps_id']
                dbconfig.query('INSERT INTO pet (name, type, breed, weight, description, foodallergies, checkin, time_in, pickup, user_id, ps_id)   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',[name, type, breed, weight, other, allergies, start_date, time, pickup, user_id, ps_id],   (err,result) => {
                    if(err){
                        console.log(err);
                    }else{
                        dbconfig.query('UPDATE pet_sitter SET status = ? WHERE ps_id = ?',[true,ps_id],(err,result) => {
                            if(err){
                                console.log(err);
                            }
                        })
                        res.json({status : true});
                    }
                });
            }else{
                res.json({status : false});
            }
        });
        

    }catch(err){
        console.log("Err : ", err);
        res.json("Error : ",err);
    }



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

// show pet in hotel of user_id
app.post('/pets_of_user', async (req,res) => {
    try {
        const user_id = req.body.user_id;
        dbconfig.query('SELECT * FROM pet WHERE user_id = ?',[user_id], (err,result) => {
            if(err){
                console.log(err);
            }else{
                if(result.length == 0){
                    res.json({user : 0});
                }else{
                    res.json({user : 1, result : result});
                }
            }
        });
    }catch(err){
        console.log('Error : ', err);
        res.json({error : err});
    }
});

app
.listen(port,()=>{
    console.log(chalk.yellow(`Ready on port ${port}`));
});