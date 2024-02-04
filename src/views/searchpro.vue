<template>
    <NavView /> 
    <div style="display: flex; justify-content: center;">

      <div style="width: 40%; border-radius: 10px; background-color: rgba(255, 249, 232, 1) ; margin: 3%; margin-bottom: 1%;">
        <p style="font-size: xx-large; text-align: center; margin: 5% 0 3% 0;">ค้นหาบัญชีผู้ใช้งาน</p>
  
        <div style="display: flex; justify-content: center;">
          <div style="width: 70%; margin-top: 10%;">
            <p>ชื่อผู้ใช้งาน</p>
            <input v-model="username" type="text" placeholder="ค้นหาชื่อผู้ใช้งาน" style=" padding-left: 10px; width: 100%;  height:30px; border-radius: 4px; margin-top: 2%; ">
            <div ref="alert_username"></div>
            <p style="margin-top: 3%;">อีเมล</p>
            <input v-model="email" type="text" placeholder="ใส่อีเมลที่ผูกบัญชี" style="  padding-left: 10px; width: 100%;  height:30px; border-radius: 4px; margin-top: 2%; ">
            <div ref="alert_email"></div>
            <div style="display: flex; justify-content: center; margin-bottom: 10%; margin-top: 10%; ">
              <button @click="searchprofile()" class="button2"> <p class="textbut">ค้นหา</p> </button>
            </div>
            <div style="display: flex; justify-content: center; margin-bottom: 10%; margin-top: 20%;">
              <a id="buttonbackward" href="/login">กลับเข้าสู่หน้าล็อกอิน</a>
            </div>
          </div>
        </div>           
      </div>

      <!-- <div class="bigbox">
        <div class="box">
            <h2 class="textsearch">ค้นหาบัญชีผู้ใช้งาน</h2>

            <p class="textname">ชื่อผู้ใช้งาน</p>
            <div class="boxname">
            <p class="textplsname">ค้นหาชื่อผู้ใช้งาน </p>
            </div>

            <p class="textemail">อีเมล</p>
            <div class="boxemail">
            <p class="textplsemail">ใส่อีเมลที่ผูกบัญชี </p>
            </div>

            <button class="button2"> <p class="textbut">ยืนยัน</p> </button>

            <p class="textlogin">กลับเข้าสู่หน้าล็อกอิน</p>

        </div>
      </div> -->
    </div>
    <FooterView />
  </template>
  
  <script>

  export default {
    name:'searchproView',
    data(){
      return {
        username: "",
        email: ""
      }
    },
    methods: {
      async searchprofile(){
        if(this.username == ""){
          this.$refs.alert_username.innerHTML = '<p style="color:red;">จำเป็นต้องกรอก</p>'
        }
        if(this.username != ""){
          this.$refs.alert_username.innerHTML = ""
        }
        if(this.email == ""){
          this.$refs.alert_email.innerHTML = '<p style="color:red;">จำเป็นต้องกรอก</p>'
        }
        if(this.email != ""){
          this.$refs.alert_email.innerHTML = ""
        }
        if(this.username != "" && this.email != ""){
          const data = {
            username : this.username,
            email : this.email
          }
          const response = await fetch('http://localhost:3000/searchprofile',{
            method: "POST",
            headers: {
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
          });
          const response_data = await response.json();
          if(response_data['role'] == "user"){
            this.$router.push({ name: 'resetpassword', params: { role: 'user', id: response_data['result']['user_id'] } });
          }
          if(response_data['role'] == "pet_sitter"){
            this.$router.push({ name: 'resetpassword', params: { role: 'ps', id: response_data['result']['ps_id'] } });
          }
          if(response_data['role'] == "admin"){
            this.$router.push({ name: 'resetpassword', params: { role: 'admin', id: response_data['result']['admin_id'] } });
          }
          if(response_data['user'] == 0){
            alert("No account, Please try again.");
            this.$router.go(0);
          }
        }
      }
    } 
  }
  </script>
  
  <style scoped>

#buttonbackward{
  text-decoration: none;
  color: #000000;
}

#buttonbackward:hover{
  transition-duration: 0.4s;
  color: #D8AB53;
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
        margin-top: 100px;
    }
    .textsearch{
        text-align: center;
        margin-top: 30px;
    }
    .textname{
      margin-top: 65px;
      margin-left: 110px;
      position: absolute;   
      font-size: 16px;
    }
    .textplsname{
      margin-left: 15px;
      margin-top: 5px;
      color: #727171a9;
      position: absolute;
      font-size: 15px;
    }
      
    .boxname{
      background-color: #ffffff;
      width: 367px;
      height: 32px;
      border: 2px solid #000000;
      padding: 1px;
      margin: 20px;
      border-radius: 4px;
      margin-top: 95px;
      margin-left: 100px;
      position: absolute;
    }

    .textemail{
      margin-top: 155px;
      margin-left: 110px;
      position: absolute;   
      font-size: 16px;
    }
    .textplsemail{
      margin-left: 15px;
      margin-top: 5px;
      color: #727171a9;
      position: absolute;
      font-size: 15px;
    }
      
    .boxemail{
      background-color: #ffffff;
      width: 367px;
      height: 32px;
      border: 2px solid #000000;
      padding: 1px;
      margin: 20px;
      border-radius: 4px;
      margin-top: 180px;
      margin-left: 100px;
      position: absolute;
    }
    .textbut{
      text-align: center;
      margin-top: -9px;
      font-size: 19px;
    }
    .button2{
      width: 169px;
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
        margin-top: 495px;
        color: #727171a9;
        margin-left: 220px;
    }
  </style>