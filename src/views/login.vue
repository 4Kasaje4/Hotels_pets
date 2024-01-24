<template>
  <NavView />
    <div>
      
      <div class="box">
        <div class="bigbox">
          <h1 class="textlogin">เข้าสู่ระบบ</h1>

          <h3 class="textemail">อีเมล</h3>
          <div class="boxemail"><p class="plsemail">กรอกอีเมล . . .</p></div>  

          <h3 class="textpassword">รหัสผ่าน</h3>
          <div class="boxpassword">
            <p class="plspassword">กรอกรหัสผ่าน . . .
              <img class="imgeye" src="../img/eye-open.png" alt="" width="20px;">
            </p>
            <p class="forget">ลืมรหัสผ่าน</p>

            <div class="boxbutton">
              <button class="accept button"> เข้าสู่ระบบ </button>
              <button class="accept button1"> เข้าสู่ระบบ </button>
            </div>

            <div class="line"> </div>
                <div class="line1"> </div>
                <p class="linetext">หรือ</p>
                <div class="img">
                    <img src="../img/line.png" alt="" width="55px;" style="margin-top:10px; margin-left:50px;">
                    <img src="../img/facebook.png" alt="" width="55px" style="margin-left:20px;"> 
                    <img src="../img/twitter.png" alt="" width="55px" style="margin-left:20px;">
                    <img src="../img/search.png" alt="" width="55px" style="margin-left:20px;" >
                </div>
    
          </div>  

    

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

    .box{
      display: flex;
      justify-content: center;
    }
    .bigbox{
      width: 567px;
      height: 608px;
      border-radius: 5px;
      background: linear-gradient(0deg, #FFF9E8 0%, #FFF9E8 100%), #FFF;
      margin-top: 50px;
    }
    .textlogin{
      text-align: center;
      margin-top: 40px;
    }
    .textemail{
        padding-top: 55px;
        padding-left: 95px;
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
     .plsemail{
        font-size: 16px;
        margin-top: 4px;
        margin-left: 10px;
        color: #00000047; 
    }

    .textpassword{
        padding-top: 25px;
        padding-left: 95px;
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
     .plspassword{
        font-size: 16px;
        margin-top: 4px;
        margin-left: 10px;
        color: #00000047; 
    }
    .imgeye{
      padding-top: -25px;
      margin-left: 200px;
      position: absolute;

    }
    .forget{
      font-size: 16px;
      margin-top: 15px;
      margin-left: 280px;
      color: #000000;
    }
    .boxbutton{
      display: flex;
      margin-top: 30px;
    }
    .button{
      width: 169px;
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
      margin-left: 190px;
      margin-top: 20px;
    }
    .button {
    background-color: #D8AB53; 
    color: #ffffff; 
     border: 2px solid #D8AB53;
    }
    .button:hover {
    background-color: #996805;
    border: 2px solid #996805;
    color: white;
    }

    .button1{
      width: 169px;
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
      margin-left:  -355px;
      margin-top: 21px;
    }
    .button1{
    background-color: #464141; 
    color: #ffffff; 
    border: 2px solid #464141;
    }
    .button1:hover {
    background-color: #996805;
    border: 2px solid #996805;
    color: white;
    }

    .line{
        width: 170px;
        height: 1px;
        background: #00000047;
        margin-top: 30px;
        margin-left: -30px;
    }
    .line1{
        width: 170px;
        height: 1px;
        background: #00000047;
        margin-left: 220px;
        
    }
    .linetext{
        margin-top: -21px;
        margin-left: 165px;
        color: #00000047;
        font-size: 20px;
    }

  </style>