// import 
const express = require('express');
const chalk = require('chalk');
const mysql = require('mysql');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const bodyparser = require('body-parser');
const multer = require('multer');
const path = require('path');


// use
const app = express();
dotenv.config();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); 
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
// let isLogin = false;
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
            let id = Math.random() *(10**20);
            array_login.push({id : id,});
            setTimeout(() => {   
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
                let id = Math.random() *(10**20);
                array_login.push({id : id,});
                setTimeout(() => { 
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

                    let id = Math.random() *(10**20);
                    array_login.push({id : id,});
                    setTimeout(() => { 
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

// showpic in nav
app.post('/show_pic', async(req,res) => {
    try{
        const role = req.body.role;
        const id = req.body.id;
        let table = "";
        if(role == 'ps'){
            table = "pet_sitter"
        }else{
            table = role
        }
        dbconfig.query(`SELECT ${table}_pic FROM ${table} WHERE ${role}_id = ?`,[id],(err,result) =>{
            if(err){
                console.log(err);
            }else{
                if(result.length == 0){
                    res.json({result : null});
                }else{
                    res.json({result : result[0]});
                }
            }
        })
    }catch(err){
        console.log(err);
        res.json({error : err});
    }
})

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
            res.json(result[0]); 
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
                res.json({status: 1});
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
        const password = req.body.password1;

        bcrypt.hash(password, 10, (err,hash) => {
            const password_hash = hash;
            dbconfig.query('INSERT INTO pet_sitter(firstname, lastname, username, email, phone, password) VALUES(?, ?, ?, ?, ?, ?)',[firstname, lastname, username, email, phone, password_hash], (err) => {
                return res.json({message: "Register User Successfully",status:true});
            });
        });
    }
    catch(err) {
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
        const password = req.body.password1;

        bcrypt.hash(password, 10, (err,hash) => {
            const password_hash = hash;
            dbconfig.query('INSERT INTO admin(firstname, lastname, username, email, phone, password) VALUES(?, ?, ?, ?, ?, ?)',[firstname, lastname, username, email, phone, password_hash], (err) => {
                return res.status(200).json({message: "Register User Successfully",status:true});
            });
        });
    }
    catch(err) {
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
            if(err){
                console.log(err);
            }else{
                dbconfig.query('INSERT INTO user(firstname, lastname, username, email, phone, password) VALUES(?, ?, ?, ?, ?, ?)',[firstname, lastname, username, email, phone, password_hash], (err) => {
                    if(err){
                        console.log(err);
                    }else{
                        res.status(200).json({message: "Register User Successfully",status:true});
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

// check login
app.post('/check_login',async (req,res) => {
    try{
        let login_id = req.body.login_id;
        if(array_login.length == 0){
            res.json({isLogin : false, message : "No user login"});
        }
        if(array_login.length !== 0) {
            for (let i = 0; i < array_login.length; i++) {
                if (array_login[i]['id'] == login_id) {
                    res.json({isLogin : true});
                    break;
                }
            }
            res.json({isLogin : false});
            
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
            let id = Math.random() *(10**20);
            array_login.push({id : id,});
            setTimeout(() => { 

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
                let id = Math.random() *(10**20);
                array_login.push({id : id,});
                setTimeout(() => { 
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
                    let id = Math.random() *(10**20);
                    array_login.push({id : id,});
                    setTimeout(() => { 
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

        dbconfig.query('SELECT ps_id FROM pet_sitter WHERE status IS NULL LIMIT 1',(err,result)=> {
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
            res.json(result);
        });
    }
    catch(err){
        console.log("Error : ", err);
        res.status(500).json({error : err});
    }
});

// Show all user 
app.get('/all_user',(req,res)=> {
    try {
        dbconfig.query('SELECT * FROM user',(err,result) => {
            res.status(200).json(result);
        });
    }
    catch(err){
        console.log("Error : ", err);
        res.status(500).json({error : err});
    }
});

// Show all Admin 
app.get('/all_admin',(req,res)=> {
    try {
        dbconfig.query('SELECT * FROM admin',(err,result) => {
            res.status(200).json(result);
        });
    }
    catch(err){
        console.log("Error : ", err);
        res.status(500).json({error : err});
    }
});

// show all pet in hotel of user_id
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

// Show detail pet by user_id
app.post('/details_pet',async (req,res) => {
    try {
        const user_id = req.body.user_id;
        const pet_id = req.body.pet_id;
        dbconfig.query('SELECT * FROM pet JOIN pet_sitter ON pet.ps_id = pet_sitter.ps_id WHERE pet_id = ? AND user_id = ?',[pet_id, user_id], (err,result) => {
            if(err){
                console.log(err);
            }else{
                res.json(result[0]);
            }
        });
    }catch(err){
        console.log("Error : ", err); ``
        res.json({error : err});
    }
}); 

// Show details pet by ps_id
app.post('/details_pet_ps',async (req,res) => {
    try {
        const ps_id = req.body.ps_id;
        dbconfig.query('SELECT * FROM pet WHERE ps_id = ?',[ps_id], (err,result) => {
            if(err){
                console.log(err);
            }else{
                if(result.length == 0){
                    res.json({have_pet : false});
                }else{
                    res.json({have_pet : true, result : result[0]});
                }
            }
        });
    }catch(err){
        console.log("Error : ", err); ``
        res.json({error : err});
    }
}); 

// Submit pet_sitter
app.post('/submit_pet_sitter',async(req,res) => {
    try{
        const ps_id = req.body.ps_id;
        dbconfig.query('DELETE FROM message WHERE ps_id = ?',[ps_id],(err,result) => {
            if(err){
                console.log(err);
            }else{
                dbconfig.query('DELETE FROM pet WHERE ps_id = ?',[ps_id],(err,result) => {
                    if(err){
                        console.log(err);
                    }else{
                        dbconfig.query('UPDATE pet_sitter SET status = NULL WHERE ps_id = ? ',[ps_id],(err,result) => {
                            if(err){
                                console.log(err);
                            }else{
                                res.json({status : true});
                            }
                        });
                    }
                });
            }
        });
    }catch(err){
        console.log(err);
        res.json({error : err});
    }
});

// Cancle pet 
app.post('/cancle_pet_in_hotel',async (req,res) => {
    try {
        const ps_id = req.body.ps_id;
        const pet_id = req.body.pet_id; 
        dbconfig.query('DELETE FROM pet WHERE pet_id = ?',[pet_id],(err,result) => {
            if(err){
                console.log(err);
            }else{
                dbconfig.query('UPDATE pet_sitter SET status = NULL WHERE ps_id = ?',[ps_id],(err,result) => {
                    if(err){
                        console.log(err);
                    }else{
                        dbconfig.query('DELETE FROM message WHERE ps_id = ?',[ps_id],(err,result) => {
                            if(err){
                                console.log(err);
                            }else{
                                res.json({status : true});
                            }
                        });
                    }
                });
            }
        });
    }catch(err){
        console.log("Error : ",err);
        res.json({error : err});
    }
});

// Logout
app.post('/logout',async (req,res) => {
    try{
        const login_id = req.body.login_id;
        for(let i=0; i < array_login.length; i++){
            if(array_login[i]['id'] == login_id){
                array_login.splice(i,1);
                res.json({status : true});
                break;
                
            }
        }
    }catch(err){
        console.log(err);
        res.json("Error : ", err);
    }
    
});

// Delete account
app.delete('/delete_account',async (req,res) => {
    try {
        const id = req.body.id;
        const role = req.body.role;
        if(role == 'user'){
            // check user have pet ?
            dbconfig.query('SELECT * FROM pet WHERE user_id = ?',[id],(err,result) => {
                if(result.length == 0){
                    dbconfig.query('DELETE FROM message WHERE user_id = ?',[id],(err,result) => {
                        if(err){
                            console.log(err);
                        }else{
                            dbconfig.query('DELETE FROM user WHERE user_id = ?',[id],(err,result) => {
                                if(err){
                                    console.log(err);
                                }else{
                                    res.json({status : true});
                                }
                            });
                        }
                    });
                }else{
                    // update status in pet_sitter
                    for(let i=0; i<result.length; i++){
                        dbconfig.query('UPDATE pet_sitter SET status = NULL WHERE ps_id = ?',[result[i]['ps_id'],(err,result) =>{
                            if(err){
                                console.log(err);
                            }   
                        }]);
                    }
                    dbconfig.query('DELETE FROM pet WHERE user_id = ?',[id],(err,result) => {
                        if(err){
                            console.log(err);
                        }else{
                            dbconfig.query('DELETE FROM user WHERE user_id = ?',[id],(err,result) => {
                                if(err){
                                    console.log(err);
                                }else{
                                    res.json({status : true});
                                }
                            });
                        }
                    });
                }
            });
        }
        if(role == 'admin'){
            if(id == 1){
                res.json({message : "not delete"});
            }else{
                dbconfig.query('DELETE FROM admin WHERE admin_id = ?',[id],(err,result) => {
                    if(err){
                        console.log(err);
                    }else{
                        res.json({status : true});
                    }
                });
            }
        }
        if(role == 'ps'){
            dbconfig.query('SELECT ps_id FROM pet WHERE ps_id = ?',[id],(err,result) => {
                if(err){
                    console.log(err);
                }else{
                    if(result.length == 0){
                        dbconfig.query('DELETE FROM pet_sitter WHERE ps_id = ?',[id],(err,result) => {
                            if(err){
                                console.log(err);
                            }else{
                                res.json({status : true});
                            }
                        });
                    }else{
                        res.json({status : false});
                    }
                }
            });
            }
        }catch(err){
        console.log("Error : ",err);
        res.json({error : err});
    }
});


// Show list chat by user_id
app.post('/chat_user',async(req,res) => {
    try{
        const role = req.body.role;
        const id = req.body.id;
        let table = ""
        if(role == 'ps'){
            table = "pet_sitter"
        }else{
            table = role
        }
        dbconfig.query(`SELECT * FROM pet JOIN pet_sitter ON pet.ps_id = pet_sitter.ps_id WHERE pet.${role}_id = ?`,[id],(err,result) =>{
            if(err){
                console.log(err);
            }else{
                res.json(result);
            }
        });
    }catch(err){
        console.log("Error : ",err);
        res.json({error : err});
    }
});

// Show list chat by pet_sitter_id
app.post('/chat_pet_sitter',async(req,res) => {
    try{
        const role = req.body.role;
        const id = req.body.id;
        let table = ""
        if(role == 'ps'){
            table = "pet_sitter"
        }else{
            table = role
        }
        dbconfig.query(`SELECT * FROM pet JOIN user ON pet.user_id = user.user_id WHERE pet.${role}_id = ?`,[id],(err,result) =>{
            if(err){
                console.log(err);
            }else{
                res.json(result);
            }
        });
    }catch(err){
        console.log("Error : ",err);
        res.json({error : err});
    }
});

// // Show list chat by admin_id
// app.post('/chat_admin',async(req,res) => {
//     try{
//         const role = req.body.role;
//         const id = req.body.id;
//         let table = ""
//         if(role == 'ps'){
//             table = "pet_sitter"
//         }else{
//             table = role
//         }
//         dbconfig.query(``,[id],(err,result) =>{
//             if(err){
//                 console.log(err);
//             }else{
//                 res.json(result);
//             }
//         });
//     }catch(err){
//         console.log("Error : ",err);
//         res.json({error : err});
//     }
// });


//Show chat
app.post('/showchat',async(req,res) => {
    try{
        const my_role = req.body.my_role;
        const my_id = req.body.my_id;
        const you_id = req.body.you_id;
        const you_role = req.body.you_role;
        let table = ""
        if(my_role == 'ps'){
            table = 'pet_sitter'
        }else{
            table = my_role
        }
        dbconfig.query(`SELECT * FROM message WHERE ${you_role}_id = ? AND ${my_role}_id = ? `,[you_id, my_id],(err,result) => {
            if(err){
                console.log(err);
            }else{
                res.json(result);
            }
        });


    }catch(err){
        console.log(err);
        res.json({error : err});
    }
});

//Send message
app.post('/send_message',async(req,res)=>{
    try{
        const my_role = req.body.my_role;
        const my_id = req.body.my_id;
        const you_role = req.body.you_role;
        const you_id = req.body.you_id;
        const message_text = req.body.message_text;

        dbconfig.query(`INSERT INTO message(${my_role}_id, ${you_role}_id, message_text, sender) VALUES(?, ?, ?, ?)`,[my_id, you_id,  message_text, my_role],(err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.json({status : 1});
            }
        });
    }catch(err){
        console.log(err);
        res.json({error : err});
    }
});

//Show name user with pet_sitter 
app.post('/show_name_user_with_pet_sitter',(req,res) => {
    try{
        const id = req.body.id;
        dbconfig.query('SELECT user_id FROM pet WHERE ps_id = ?',[id],(err,result) => {
            if(err){
                console.log(err);
            }else{
                if(result.length == 0){
                    res.json({people : false});
                }else{
                    const user_id  = result[0]['user_id']
                    dbconfig.query('SELECT * FROM user WHERE user_id = ?',[user_id],(err,result) => {
                        if(err){
                            console.log(err);
                        }else{
                            res.json({people : true, result : result[0]});
                        }
                    });
                }
            }
        });
    }catch(err){
        console.log(err);
        res.json({error : err});
    }
});

// Listening on port
app
.listen(port,()=>{
    console.log(chalk.yellow(`Ready on port ${port}`));
});