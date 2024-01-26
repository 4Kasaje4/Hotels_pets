<template>
  <NavView /> 
    <div>
      <div class="bigbox">
        <div class="box">
          <h1 class="textlogin">เข้าสู่ระบบ</h1>

          <h3 class="textemail">อีเมล</h3>
          <div class="boxemail">
            <p class="textplsemail">กรุณากรอกอีเมล . . . </p>
          </div>

          <h3 class="textpassword">รหัสผ่าน</h3>
          <div class="boxpassword">
            <p class="textplspassword">กรุณากรอกรหัสผ่าน . . .  
              <img class="imgpassword" src="../img/image 5.png" alt="">
            </p>
          </div>

          <p class="textforget">ลืมรหัสผ่าน</p>

          <button class="button2"> <p class="textbut">สมัครสมาชิก</p> </button>
          <button class="button3"><p class="textbut1">เข้าสู่ระบบ</p></button>

          <div class="line"> </div> <p class="textline">หรือ</p> <div class="line1"></div>

          <img src="../img/line.png" alt="" width="65px" style="margin-left:100px; margin-top:30px;">
          <img src="../img/facebook.png" alt="" width="65px"  style="margin-left:30px;">
          <img src="../img/twitter.png" alt="" width="65px" style="margin-left:30px;">
          <img src="../img/search.png" alt="" width="65px" style="margin-left:30px;">

        </div>

      </div>
    </div>
  </template>
  
  <script>
  export default {
    name:'loginView'
   
  }
  </script>
  
  <style scoped>
    .textline{
      margin-top: -15px;
      margin-left: 265px;
      position: absolute;
      color: #00000060;
    }
    .line{
      width: 180px;
      height: 2px;
      background-color: #00000060;
      margin-top: 30px;
      margin-left: 50px;
    }
    .line1{
      width: 180px;
      height: 1.8px;
      background-color: #00000060;
      margin-top: -2px;
      margin-left: 320px;
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
      margin-top: 90px;
    }
    .textlogin{
      text-align: center;
      margin-top: 30px;
    }
    .textemail{
      margin-top: 60px;
      margin-left: 100px;
    }
    .textplsemail{
      margin-left: 15px;
      margin-top: 5px;
      color: #727171;
    }
      
    .boxemail{
      background-color: #ffffff;
      width: 367px;
      height: 34px;
      border: 2px solid #000000;
      padding: 1px;
      margin: 20px;
      border-radius: 4px;
      margin-top: 10px;
      margin-left: 95px;
    }
   
    .textpassword{
      margin-top: 10px;
      margin-left: 100px;
    }
    .boxpassword{
      background-color: #ffffff;
      width: 367px;
      height: 34px;
      border: 2px solid #000000;
      padding: 1px;
      margin: 20px;
      border-radius: 4px;
      margin-top: 10px;
      margin-left: 95px;
    }
    .textplspassword{
      margin-left: 15px;
      margin-top: 5px;
      color: #727171;
    }
    .imgpassword{
      margin-left: 160px;
      margin-top: 5px;
      position: absolute;
    }
    .textforget{
      margin-left: 380px;
      margin-top: -10px;
      color: #727171;
    }
    .textbut{
      text-align: center;
      margin-top: -9px;
      font-size: 19px;
    }
    .button2{
      width: 169px;
      height: 43px;
      background-color: #04AA6D;
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
      margin-left: 100px;
    }
    .button2 {
      background-color: #464141; 
      color: rgb(255, 255, 255); 
      border: 2px solid #464141;
    }

    .button2:hover {
      background-color: #1e1a1a;
      color: #ffffff;
    }
    .textbut1{
      text-align: center;
      margin-top: -9px;
      font-size: 19px;
    }

    .button3{
      width: 169px;
      height: 43px;
      background-color: #ffffff;
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
      margin-left: 20px;
    }
    .button3 {
      background-color: #D8AB53; 
      color: #ffffff; 
      border: 2px solid #D8AB53;
    }

    .button3:hover {
      background-color: #8c6311;
      color: #ffffff;
    }
      
  </style>