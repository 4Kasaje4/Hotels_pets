<template>
   <NavView />
    <div>
        <img class="arrowleft" src="../img/arrow-left.png" alt="" width="40px;">
       <div class="bigbox"> 
        <div class="box">
            <img class="imgpro" src="../img/a1_7.jpg" alt="" >
            <h2 class="textname">ลุงพลหล่อสุดใจ</h2>
            <p class="textreset">รีเซ็ตรหัสผ่าน</p>

            <p class="textpassword">รหัสผ่าน</p>
          <div class="boxpassword">
            <p class="textplspassword">ใส่รหัสผ่านใหม่(6-16ตัวอักษร) </p>
          </div>

          <p class="textagainpassword">รหัสผ่านอีกครั้ง</p>
          <div class="boxagainpassword">
            <p class="textplsagainpassword">ใส่รหัสผ่านใหม่อีกครั้ง(6-16ตัวอักษร) </p>
          </div>

          <button class="button2"> <p class="textbut">สมัครสมาชิก</p> </button>

          <p class="textlogin">กลับเข้าสู่หน้าล็อกอิน</p>

        </div>
       </div>
   
    </div>
  </template>
  
  <script>
    export default {
   
   
  }
  </script>
  
  <style scoped>
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
      margin-left: 10px;
      position: absolute;
      margin-top: 460px;
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