<template>
   <NavView />
    <div style="display: flex; justify-content: center; margin-top: 2%;">
      <div style="width: 60%;">
        <div @click="backward()" id="backward">
          <img src="../img/arrow-left.png" style="margin: 8% 0 0 8%;"  width="50dvw"  alt="">
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: center; margin-bottom: 7%;">
      <div style="width: 25%; padding: 3%; background-color: rgba(255, 249, 232, 1); border-radius: 10px;">
        <div style="text-align: center; display: flex; justify-content: center;">
          <div ref="profile_pic" style="background-color: #D9D9D9; width: 110px; height: 104px; padding-top: 1%; border-radius: 50%; ">
            <img :src="path" width="100dvw" height="100dvh" style="border-radius: 50%;" alt="">
          </div>
        </div>
        <div style="margin-top: 3%;">
          <div style="text-align: center; margin-bottom: 5%;">
            <div ref="name"></div>
          </div>
          <div>
            <p style="margin-bottom: 1%;">รหัสผ่านใหม่</p>
            <input v-model="password1" type="password" style="width: 100%; height: 30px; border-radius: 4px; padding-left: 10px;"  placeholder="ใส่รหัสผ่านใหม่ (6-16 ตัวอักษร)">
            <div ref="alert_password1"></div>
            <p style="margin-bottom: 1%; margin-top: 2%;">รหัสผ่านอีกครั้ง</p>
            <input v-model="password2" type="password" style="width: 100%; height: 30px; border-radius: 4px; padding-left: 10px;"  placeholder="ใส่รหัสผ่านใหม่อีกครั้ง (6-16 ตัวอักษร)">
            <div ref="alert_password2"></div>
            <div style="display: flex; justify-content: center;">
              <button @click="resetpassword()" class="button2"> <p class="textbut">เปลี่ยนรหัสผ่าน</p> </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterView />

  </template>
  
  <script>

    export default {
      data(){
        return {
          password1: "",
          password2: "",
          profile_pic : null,
          column : "",
          path : "",
          login_id : ""
        }
      },
      methods: {
        async check_login(){
          let login_id = this.$route.params.login_id
          const data = {
            login_id : login_id
          }
          const response = await fetch('http://localhost:3000/check_login', {
            method : 'POST',
            headers : {
              'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
          });
          const response_data = await response.json();
          if(response_data['isLogin'] == false){
            this.$router.push('/login'); 
          }
        },
        async resetpassword(){
          if(this.password1 == ""){
            this.$refs.alert_password1.innerHTML = '<p style="color:red;">จำเป็นต้องกรอก</p>'
          }
          if(this.password1 != ""){
            this.$refs.alert_password1.innerHTML = ''
          }
          if(this.password2 == ""){
            this.$refs.alert_password2.innerHTML = '<p style="color:red;">จำเป็นต้องกรอก</p>'
          }
          if(this.password2 != ""){
            this.$refs.alert_password2.innerHTML = ''
          }
          if(this.password1 != this.password2){
            alert("Password in not match, Please try again.");
            this.$router.go(0)
          }
          if(this.password1 == this.password2){
            const role = this.$route.params.role;
            const id = this.$route.params.id;
            const data = {
              role : role,
              id : id,
              new_password : this.password1
            }
            const response = await fetch(`http://localhost:3000/resetpassword`,{
              method: 'POST',
              headers: {
                'Content-Type' : 'application/json'
              },
              body: JSON.stringify(data)
            });
            const response_data = await response.json();
            if(response_data['status'] == 1){
              alert("Reset password successfully.");
              this.$router.push('/login');
            }
          }
        },

        async backward(){
          this.$router.go(-1)
        },

        async loaddata(){
          const role = this.$route.params.role;
          const id = this.$route.params.id;
          const data = {
            role : role,
            id : id
          }
          const response = await fetch(`http://localhost:3000/profile`,{
            method: 'POST',
            headers: {
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
          });
          const response_data = await response.json();
          const firstname =  response_data['firstname'];
          const lastname =  response_data['lastname']
          this.$refs.name.innerHTML = `<p>${firstname} ${lastname}</p>`
          if(this.$route.params.role == "ps"){
            this.column = "pet_sitter";
          }else{
            this.column = this.$route.params.role;
          }

          this.profile_pic = response_data[`${this.column}_pic`]
          if(this.profile_pic == null){
            this.path = '/src/img/Profile_Unknow.png'
          }else{
            this.path = `/API/profile_pic/${this.profile_pic}`
          }
        }
      },
      
      mounted(){
        this.check_login();
        this.loaddata();
      }


  
   
  }

  </script>

  <style scoped>

#backward{
  cursor: pointer;
  background-color: #D9D9D9; 
  height: 60px;  
  margin-top: 1%; 
  width: 60px; 
  border-radius: 50%;
}

#backward:hover{
  transition-duration: 0.4s;
  background-color: #D8AB53;
}
.arrowleft{
        margin-left: 260px;
        margin-top: 50px;
    }
    .bigbox{
        display: flex;
        justify-content: center;
    }
    .box{
        width: 567px;
        height: 608px;
        border-radius: 5px;
        background: linear-gradient(0deg, #FFF9E8 0%, #FFF9E8 100%), #FFF;
        display: flex;
        justify-content: center;
    }
    .imgpro{
        width: 110px;
        height: 110px;
        border-radius: 110px;
        margin-top: 50px;
    }
    .textname{
        margin-top: 180px;
        position: absolute;
        text-align: center;
        margin-left: 10px;
    }
    .textreset{
        position: absolute;
        margin-top: 250px;
        margin-left: -290px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.64);
    }
    .textpassword{
      margin-top: 285px;
      margin-left: -320px;
      position: absolute;   
      font-size: 16px;
    }
    .textplspassword{
      margin-left: 15px;
      margin-top: 5px;
      color: #727171a9;
      position: absolute;
      font-size: 15px;
    }
      
    .boxpassword{
      background-color: #ffffff;
      width: 367px;
      height: 32px;
      border: 2px solid #000000;
      padding: 1px;
      margin: 20px;
      border-radius: 4px;
      margin-top: 310px;
      margin-left: 0px;
      position: absolute;
    }
    .textagainpassword{
      margin-top: 365px;
      margin-left: -270px;
      position: absolute;   
      font-size: 16px;
    }
    .textplsagainpassword{
      margin-left: 15px;
      margin-top: 5px;
      color: #727171a9;
      position: absolute;
      font-size: 15px;
    }
      
    .boxagainpassword{
      background-color: #ffffff;
      width: 367px;
      height: 32px;
      border: 2px solid #000000;
      padding: 1px;
      margin: 20px;
      border-radius: 4px;
      margin-top: 390px;
      margin-left: 0px;
      position: absolute;
    }
    .textbut{
      text-align: center;
      margin-top: -9px;
      font-size: 19px;
    }
    .button2{
      width: 190px;
      height: 43px;
      background-color: #000000;
      border: none;
      color: white;
      padding: 16px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      transition-duration: 0.4s;
      cursor: pointer;
      border-radius: 10px;
      margin-left: 10px;
      margin-top: 12%;
    }
    .button2 {
      background-color: #D8AB53; 
      color: rgb(255, 255, 255); 
      border: 2px solid #D8AB53;
    }

    .button2:hover {
      background-color: #8c6311;
      color: #ffffff;
    }
    .textlogin{
        position: absolute;
        margin-top: 540px;
        color: #727171a9;
    }
  
    
        
  </style>