<template>
    <NavView /> 
    <div>
      <div class="bigbox">
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
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name:'searchproView'
   
  }
  </script>
  
  <style scoped>
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
      margin-left: 195px;
      position: absolute;
      margin-top: 260px;

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