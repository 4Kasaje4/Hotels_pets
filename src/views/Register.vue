<template>
    <NavView />
    <div style="display: flex; justify-content: center; margin-top: 0%;">

            <div style="width: 30vw; background-color: rgba(255, 249, 232, 1); border-radius: 10px; margin-top: 2%; padding-bottom: 2%;">
            <p style="text-align: center; font-size: xx-large; margin-top: 4%;">สมัครสมาชิก</p>
            <div style="width: 80%; margin: auto; margin-top: 1%; padding-bottom: 3%;">
                <p style="font-size: larger;">ชื่อผู้ใช้</p>
                <input v-model="username"   type="text" placeholder="กรอกชื่อผู้ใช้" style="width: 90%; height: 4vh; margin-top: 1%; padding-left: 10px; border-radius: 4px;" required>
                <div ref="alert_username"></div>
            </div>
            <div style="width: 80%; display: flex; margin: auto; justify-content:start;  padding-bottom: 3%;"> 
                <div style="text-align: left;">
                    <p style="font-size: larger;">ชื่อ</p>
                    <input v-model="firstname"  type="text" placeholder="กรอกชื่อ" style="width: 80%; height: 4vh; margin-top: 1%; padding-left: 10px;  border-radius: 4px;" required>
                    <div ref="alert_firstname"></div>
                </div>
                <div style="margin-left: auto;">
                    <p style="font-size: larger;">นามสกุล</p>
                    <input v-model="lastname" type="text" placeholder="กรอกนามสกุล" style="width: 80%; height: 4vh; margin-top: 1%; padding-left: 10px;  border-radius: 4px;" required>
                    <div ref="alert_lastname"></div>
                </div>
            </div>
            <div style="width: 80%; margin: auto; padding-bottom: 3%;">
                <p style="font-size: larger;">อีเมล</p>
                <input  v-model="email" type="text" placeholder="กรอกอีเมล" style="width: 90%; height: 4vh; margin-top: 1%; padding-left: 10px; border-radius: 4px;" required>
                <div ref="alert_email"></div>
            </div>
            <div style="width: 80%; margin: auto; padding-bottom: 3%;">
                <p style="font-size: larger;">เบอร์โทรศัพท์</p>
                <input v-model="phone" type="text" placeholder="กรอกเบอร์โทรศัพท์" style="width: 90%; height: 4vh; margin-top: 1%; padding-left: 10px; border-radius: 4px;" required>
                <div ref="alert_phone"></div>
            </div>
            <div style="width: 80%; margin: auto; padding-bottom: 3%;">
                <p style="font-size: larger;">รหัสผ่าน</p>
                <input v-model="password1"  type="password" placeholder="ใส่รหัสผ่าน(6-16ตัวอักษร)" style="width: 90%; height: 4vh; margin-top: 1%; padding-left: 10px;  border-radius: 4px;" required>
                <div ref="alert_password1"></div>
            </div>
            <div style="width: 80%; margin: auto; padding-bottom: 3%;">
                <p style="font-size: larger;">รหัสผ่านอีกครั้ง</p>
                <input  v-model="password2" type="password" placeholder="ใส่รหัสผ่าน(6-16ตัวอักษร)" style="width: 90%; height: 4vh; margin-top: 1%; padding-left: 10px;  border-radius: 4px;" required>
                <div ref="alert_password2"></div>
            </div>
            <div style="display: flex; justify-content: center; margin-bottom: 2%; margin-top: 2%;">
                <div style="width: 60%; display: flex; justify-content: space-around;">
                    <input v-model="checkbox" style="height: 2vh; width: 2vw; margin-top: 1%;" type="checkbox" required>
                    <p style="font-size: small;">รับทราบและยอมรับ นโยบายความเป็นส่วนตัว</p>
                </div>
            </div>
            <div style="display: flex; justify-content: center;">
                <div style="width: 45%; margin-top: -2%; margin-bottom: 2%;">
                    <div style="font-size: small;" ref="alert_checkbox"></div>
                </div>
            </div>
            
            <div style="text-align: center;">
                <button class="accept button" type="submit" @click="register_Form" >ยืนยัน</button>
            </div>

            </div>

        
    </div>
    <FooterView />
  </template>
  
  <script>
  export default {
    name:'RegisterView',
    data(){
        return {
            username : "",
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            password1: "",
            password2: "",
            checkbox: ""
        }
    },
    methods:{
        async register_Form(){
            if(this.username == ""){
                this.$refs.alert_username.innerHTML = '<p style="color:red;">กรุณากรอกชื่อผู้ใช้</p>'
            }
            if(this.username != ""){
                this.$refs.alert_username.innerHTML = ''
            }
            if(this.firstname == ""){
                this.$refs.alert_firstname.innerHTML = '<p style="color:red;">กรุณากรอกชื่อ</p>'
            }
            if(this.firstname != ""){
                this.$refs.alert_firstname.innerHTML = ''
            }
            if(this.lastname == ""){
                this.$refs.alert_lastname.innerHTML = '<p style="color:red;">กรุณากรอกนามสกุล</p>'
            }
            if(this.lastname != ""){
                this.$refs.alert_lastname.innerHTML = ''
            }
            if(this.email == ""){
                this.$refs.alert_email.innerHTML = '<p style="color:red;">กรุณากรอกอีเมล</p>'
            }
            if(this.email != ""){
                this.$refs.alert_email.innerHTML = ''
            }
            if(this.phone == ""){
                this.$refs.alert_phone.innerHTML = '<p style="color:red;">กรุณากรอกเบอร์โทรศัพท์</p>'
            }
            if(this.phone != ""){
                this.$refs.alert_phone.innerHTML = ''
            }
            if(this.password1 == ""){
                this.$refs.alert_password1.innerHTML = '<p style="color:red;">กรุณากรอกรหัสผ่าน</p>'
            }
            if(this.password1 != ""){
                this.$refs.alert_password1.innerHTML = ''
            }
            if(this.password2 == ""){
                this.$refs.alert_password2.innerHTML = '<p style="color:red;">กรุณากรอกรหัสผ่าน</p>'
            }
            if(this.password2 != ""){
                this.$refs.alert_password2.innerHTML = ''
            }
            if(this.checkbox == ""){
                this.$refs.alert_checkbox.innerHTML = '<p style="color:red;">จำเป็นจะต้องยินยอม</p>'
            }
            if(this.checkbox != ""){
                this.$refs.alert_checkbox.innerHTML = ''
            }
            
            if(this.username != "" && this.firstname != "" && this.lastname != "" && this.email != "" && this.phone !== "" && this.password1 !== "" && this.password2 != "" && this.checkbox !== "") {
                if(this.password1 != this.password2){
                    this.$router.go(0);
                    alert("Password is not match, Please try again.");
                }else{
                    const data_for_register = {
                        username : this.username,
                        firstname : this.firstname,
                        lastname : this.lastname,
                        email : this.email,
                        phone : this.phone,
                        password1 : this.password1
                    }
                    const response = await fetch('http://127.0.0.1:3000/register_user', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data_for_register)
                    });

                    const response_data = await response.json();
                    alert('Register Successfully.');
                    this.$router.push('/login');
                }
            }
        }


    }
   
  }

 
  </script>
  
  <style scoped>


    .box{
        width: 567px;
        height: 852px;
        border-radius: 5px;
        background: linear-gradient(0deg, #FFF9E8 0%, #FFF9E8 100%), #FFF;
        margin-top: 60px;
    }
    .Bigbox{
        display: flex;
        justify-content: center;
    }
    .textrejis{
        margin-top: 30px;
        text-align: center;
    }
    .textmail{
        padding-top: 30px;
        padding-left: 95px;
    }
    .textpassword{
        padding-top: 15px;
        padding-left: 95px;
    }
    .textpasswordagain{
        padding-top: 15px;
        padding-left: 95px;
    }
    .textname{
        margin-top: 15px;
        padding-left: 95px;
    }
    .textsurname{
        margin-top: -30px;
        padding-left: 300px;
    }
    .plsemail{
        font-size: 16px;
        margin-top: 6px;
        margin-left: 10px;
        color: #00000047;     
    }
    .plspassword{
        font-size: 16px;
        margin-top: 6px;
        margin-left: 10px;
        color: #00000047; 
    }
    .plsname{
        font-size: 16px;
        margin-top: 4px;
        margin-left: 10px;
        color: #00000047; 
    }
    .plssurname{
        font-size: 16px;
        margin-top: 4px;
        margin-left: 10px;
        color: #00000047; 
    }
    .boxemail{
        width: 367px;
        height: 32px;
        border-radius: 4px;
        background-color: #FFF;
        border: 2px solid #000000;
        margin: 2px;
        margin-left: 90px;
    }
    .boxpassword{
        width: 367px;
        height: 32px;
        border-radius: 4px;
        background-color: #FFF;
        border: 2px solid #000000;
        margin: 2px;
        margin-left: 90px;
    }
    .boxpasswordagain{
        width: 367px;
        height: 32px;
        border-radius: 4px;
        background-color: #FFF;
        border: 2px solid #000000;
        margin: 2px;
        margin-left: 90px;
    }
    .boxname{
        width: 173px;
        height: 32px;
        border-radius: 4px;
        background-color: #FFF;
        border: 2px solid #000000;
        margin: 2px;
        margin-left: 90px;
    }
    .boxsurname{
        width: 173px;
        height: 32px;
        border-radius: 4px;
        background-color: #FFF;
        border: 2px solid #000000;
        margin: 2px;
        margin-left: 285px;
        margin-top: -66px;
    }
    .boxsmall{
        width: 20px;
        height: 20px;
        background: #D9D9D9;
        margin-left: 95px;
        margin-top: 50px;
    }
    .accept{
        padding-left: 130px;
        margin-top: -20px;
    }
    .button{
        width: 121px;
        height: 43px;
        background-color: #D8AB53;
        border: none;
        color: white;
        padding: 6px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 20px;
        margin: 4px 2px;
        transition-duration: 0.4s;
        cursor: pointer;
        border-radius: 20px;
        

    }
    .button {
    background-color: #D8AB53; 
    color: #ffffff; 
     border: 2px solid #D8AB53;
    }
    .button:hover {
    background-color: #996805;
    color: white;
    }
    .line{
        width: 200.003px;
        height: 1px;
        background: #00000047;
        margin-top: 30px;
        margin-left: 45px;
    }
    .line1{
        width: 200.003px;
        height: 0.9px;
        background: #00000047;
        margin-left: 310px;
        
    }

    .linetext{
        margin-top: -16px;
        margin-left: 260px;
        color: #00000047;
        font-size: 20px;
    }
      
  </style>