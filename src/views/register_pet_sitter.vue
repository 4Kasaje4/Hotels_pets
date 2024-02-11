<template>
  <div ref="show_menu">
  </div>
  <div style="height: 100px; background: linear-gradient(180deg, #fdde91 0%, #f9f2d4 100%); padding: 0 2% 0 2%; display: flex; justify-content: space-between; align-items: center;">
    <div @click="show_menu(this.count)" style="cursor: pointer;">
      <div style="border: 3.5px solid black; margin: 6%; border-radius: 20px; width: 2vw;"></div>
      <div style="border: 3.5px solid black; margin: 6%; border-radius: 20px; width: 2vw;"></div>
      <div style="border: 3.5px solid black; margin: 6%; border-radius: 20px; width: 2vw;"></div>
    </div>
    <div style="display: flex; justify-content: space-around; width: 30%; align-items: center; margin-right: -10px;">
      <div v-if="this.$route.params.role != 'admin'" >
        <select @change="select_value" v-model="select_service" style=" background-color: #f7d275 ; width: 150px; height: 30px;font-size: 15px;padding-left: 5px;border: 1px solid #f7d275;border-radius: 5px;" >
          <option disabled value="null">เลือกบริการ</option>
          <option value="deposit">บริการฝากเลี้ยง</option>
          <option value="activities">บริการกิจกรรมสัตว์</option>
          <option value="grooming">บริการตัดขน</option>
          <option value="bathing">บริการอาบน้ำ</option>
        </select>
      </div>
      <div v-if="this.$route.params.role == 'admin'"></div><div></div><div></div><div></div><div></div><div></div>
      <div v-if="this.$route.params.role != 'admin'">
        <div @click="go_chat()" style="cursor: pointer; border-radius: 50%; width: 55px; height: 60px; background-color:#fdde91; display: flex; align-items: center; padding-left: 7px;">
        <img src="../img/image 2.png"  alt="">
      </div>
      </div>
      <div v-if="this.$route.params.role != 'admin'">
        <div @click="go_caretaker()" style="cursor: pointer; border-radius: 50%; width: 60px; height: 60px; background-color:#fdde91; display: flex; align-items: center; ">
          <img src="../img/image 3.png"   alt="">
        </div>
      </div>
      <div v-if="this.$route.params.role == 'admin'">
        <div @click="this.$router.push({name : 'adminpageView', params : {role : this.$route.params.role, id : this.$route.params.id, login_id : this.$route.params.login_id}});" style="cursor: pointer; border-radius: 50%; width: 60px; height: 60px; background-color:#fdde91; display: flex; align-items: center; ">
          <img src="../img/image 3.png"   alt="">
        </div>
      </div>
      <div @click="go_profile()" style="cursor: pointer; border-radius: 50%; width: 80px; height: 80px; background-color:#fdde91; display: flex; justify-content: center; align-items: center; ">
        <div v-if="profile_pic == null">
          <img src="/src/img/Profile_Unknow.png" width="60px" height="60px" alt="" style="margin-top: 10%; border-radius: 50%;">
        </div>
        <div v-if="profile_pic != null" style=" border-radius: 50%; width: 80px; height: 80px; background-color:#fdde91; display: flex; justify-content: center; align-items: center; ">
          <img :src="path + profile_pic" width="60px" height="60px" alt="" style="border-radius: 50%" >
        </div>
        
      </div>
    </div>
  </div>

    <div style="display: flex; justify-content: center; margin-top: 0%;">

            <div style="width: 30vw; background-color: rgba(255, 249, 232, 1); border-radius: 10px; margin-top: 1%; padding-bottom: 2%;">
            <p style="text-align: center; font-size: xx-large; margin-top: 4%; margin-bottom: 5%;">สร้างบัญชีพี่เลี้ยงสัตว์</p>
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
    name:'register_pet_sitter',
    data(){
        return {
            username : "",
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            password1: "",
            password2: "",
            checkbox: "",
            profile_pic : null,
            path : "/API/profile_pic/",
            count : false,
            select_service : null
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
                    const response = await fetch('http://127.0.0.1:3000/register_pet_sitter', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data_for_register)
                    });

                    const response_data = await response.json();
                    alert('Register Successfully.');
                    this.$router.push({name : 'Homepage', params : {role : this.$route.params.role, id : this.$route.params.id, login_id : this.$route.params.login_id}});
                }
            }
        },
        async go_profile(){
    const role = this.$route.params.role;
    const id = this.$route.params.id;
    this.$router.push({name: 'profile', params: {role : role, id : id, login_id : this.$route.params.login_id}});
  },
  async go_caretaker(){
    this.$router.push({name : 'caretaker', params : {role : this.$route.params.role, id : this.$route.params.id, login_id : this.$route.params.login_id}});
  },  
  async go_to_service(){
    const role = this.$route.params.role;
    const id = this.$route.params.id;
    this.$router.push({name: 'servicepage', params: {role : role, id : id, login_id : this.$route.params.login_id}});
  },
  go_chat(){
    const role = this.$route.params.role;
    const id = this.$route.params.id;
    this.$router.push({name: 'chat', params: {role : role, id : id, login_id : this.$route.params.login_id}});
  },
  async show_pic(){
    const data = {
      role : this.$route.params.role,
      id : this.$route.params.id
    }
    const response = await fetch('http://localhost:3000/show_pic',{
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(data)
    });
    const response_data = await response.json();
    if(this.$route.params.role == 'ps'){
      this.profile_pic = response_data['result']['pet_sitter_pic'];
    }
    if(this.$route.params.role == 'user'){
      this.profile_pic = response_data['result']['user_pic'];
    }
    if(this.$route.params.role == 'admin'){
      this.profile_pic = response_data['result']['admin_pic'];
    }
  },
  async show_menu(count){

    if(count == true){
      this.count = false;
      this.$refs.show_menu.innerHTML = '';
    }else{
      this.count =true;
      if(this.$route.params.role == 'admin'){
        this.$refs.show_menu.innerHTML = `<div style="margin-top: 100px; position: absolute; width: 30%;border-radius: 0 25px 25px 0; background:#f9f2d4 ; height: 90dvh;">
      <div style="font-size: x-large; padding-top: 10%;">
        <div onclick="window.location.href='http://localhost:5173/Homepage/${this.$route.params.role}/${this.$route.params.id}/${this.$route.params.login_id}'"  style="cursor: pointer; background:rgba(255, 237, 191, 1); height: 50px; display: flex; padding-left: 5%; align-items: center; margin-bottom: 1%;"> 
          <img src="/src/img/home_nav.png" width="40px" style="margin-right: 5%;" alt="">
          <p>หน้าแรก</p>
        </div>
        <div onclick="window.location.href='http://localhost:5173/package'" style="cursor: pointer; background:rgba(255, 237, 191, 1); height: 50px; display: flex; padding-left: 5%; align-items: center; margin-bottom: 1%;"> 
          <img src="/src/img/package_nav.png" width="40px" style="margin-right: 5%;" alt="">
          <p>แพ็กเกจ / โปรโมชัน</p>
        </div>
        <div onclick="window.location.href='http://localhost:5173/about'" style="cursor: pointer; background:rgba(255, 237, 191, 1); height: 50px; display: flex; padding-left: 5%; align-items: center; margin-bottom: 1%;"> 
          <img src="/src/img/about_nav.png" width="40px" style="margin-right: 5%;" alt="">
          <p>เกี่ยวกับเรา</p>
        </div>
        <div onclick="window.location.href='http://localhost:5173/register_pet_sitter/${this.$route.params.role}/${this.$route.params.id}/${this.$route.params.login_id}'" style="cursor: pointer; background:rgba(255, 237, 191, 1); height: 50px; display: flex; padding-left: 5%; align-items: center; margin-bottom: 1%;"> 
          <img src="/src/img/add_account_pic.png" width="40px" style="margin-right: 5%;" alt="">
          <p>เพิ่มบัญชีพี่เลี้ยง</p>
        </div>
        <div onclick="window.location.href='http://localhost:5173/register_admin/${this.$route.params.role}/${this.$route.params.id}/${this.$route.params.login_id}'" style="cursor: pointer; background:rgba(255, 237, 191, 1); height: 50px; display: flex; padding-left: 5%; align-items: center; margin-bottom: 1%;"> 
          <img src="/src/img/add_account_pic.png" width="40px" style="margin-right: 5%;" alt="">
          <p>เพิ่มบัญชีแอดมิน</p>
        </div>
        <div  onclick="window.location.href='http://localhost:5173/logout/${this.$route.params.login_id}'" style="cursor: pointer; background:rgba(255, 237, 191, 1); height: 50px; display: flex; padding-left: 5%; align-items: center; margin-top: 10%;"> 
          <img src="/src/img/logout_nav.png" width="40px" style="margin-right: 5%;" alt="">
          <p>ออกจากระบบ</p>
        </div>
        <div style="margin-top: 35%; display: flex; justify-content: center; align-items: end;">
          <img src="/src/img/logo.png" width="300px" alt="">
        </div>
      </div>
    </div>`;
      }
      if(this.$route.params.role != 'admin'){
        this.$refs.show_menu.innerHTML = `<div style="margin-top: 100px; position: absolute; width: 30%;border-radius: 0 25px 25px 0; background:#f9f2d4 ; height: 90dvh;">
      <div style="font-size: x-large; padding-top: 10%;">
        <div onclick="window.location.href='http://localhost:5173/Homepage/${this.$route.params.role}/${this.$route.params.id}/${this.$route.params.login_id}'"  style="cursor: pointer; background:rgba(255, 237, 191, 1); height: 50px; display: flex; padding-left: 5%; align-items: center; margin-bottom: 1%;"> 
          <img src="/src/img/home_nav.png" width="40px" style="margin-right: 5%;" alt="">
          <p>หน้าแรก</p>
        </div>
        <div onclick="window.location.href='http://localhost:5173/package'" style="cursor: pointer; background:rgba(255, 237, 191, 1); height: 50px; display: flex; padding-left: 5%; align-items: center; margin-bottom: 1%;"> 
          <img src="/src/img/package_nav.png" width="40px" style="margin-right: 5%;" alt="">
          <p>แพ็กเกจ / โปรโมชัน</p>
        </div>
        <div onclick="window.location.href='http://localhost:5173/about'" style="cursor: pointer; background:rgba(255, 237, 191, 1); height: 50px; display: flex; padding-left: 5%; align-items: center; margin-bottom: 1%;"> 
          <img src="/src/img/about_nav.png" width="40px" style="margin-right: 5%;" alt="">
          <p>เกี่ยวกับเรา</p>
        </div>
        <div  onclick="window.location.href='http://localhost:5173/logout/${this.$route.params.login_id}'" style="cursor: pointer; background:rgba(255, 237, 191, 1); height: 50px; display: flex; padding-left: 5%; align-items: center; margin-top: 10%;"> 
          <img src="/src/img/logout_nav.png" width="40px" style="margin-right: 5%;" alt="">
          <p>ออกจากระบบ</p>
        </div>
        <div style="margin-top: 60%; display: flex; justify-content: center; align-items: end;">
          <img src="/src/img/logo.png" width="300px" alt="">
        </div>
      </div>
    </div>`;
      }
      
    }
  },
  async select_value(){
    console.log(this.select_service);
    if(this.select_service == null){}
    else if(this.select_service == "deposit"){
      this.$router.push({name : 'confirmationpage', params : {role : this.$route.params.role, id : this.$route.params.id, login_id : this.$route.params.login_id}});
    }else if(this.select_service == "activities"){
      this.$router.push({name : 'newconpage', params : {role : this.$route.params.role, id : this.$route.params.id, login_id : this.$route.params.login_id}});
    }else if(this.select_service == "grooming"){
      this.$router.push({name : 'cutcon', params : {role : this.$route.params.role, id : this.$route.params.id, login_id : this.$route.params.login_id}});
    }else if(this.select_service == "bathing"){
      this.$router.push({name : 'takeacon', params : {role : this.$route.params.role, id : this.$route.params.id, login_id : this.$route.params.login_id}});
    }
  }


    },
    mounted(){
        this.show_pic();
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