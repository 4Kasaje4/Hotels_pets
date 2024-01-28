<template>
    <newnav/>
    <div>
      <div class="bigbox">
        <div class="box">
            <img class="profile" src="../img/ลุงพล.jpg" alt="">

            <div class="reset"><p class="textre" >แก้ไข</p></div>

            <p class="textpassword">ชื่อ</p>
            <div class="boxpassword">
            <p class="textplspassword">ลุงพลหล่อสุดใจ </p>
          </div>

          <p class="textaddress">ที่อยู่</p>
            <div class="boxaddress">
            <p class="textplsaddress">999/9 หน้ามหาวิทยาลัยพะเยา ต.เเม่กา อ.เมือง จ.พะเยา 56000/9 </p>
          </div>

          <p class="textnumber">เบอร์โทรศัพท์</p>
            <div class="boxnumber">
            <p class="textplsnumber">099-999-9999</p>
          </div>

          <p class="textemail">อีเมล</p>
            <div class="boxemail">
            <p class="textplsemail">CATDOGHOTEL999@GMAIL.COM</p>
          </div>

          <button class="button2"> <h4 class="textbut">ประวัติการจอง</h4> </button>

          <p class="textlogin">ลบบัญชีผู้ใช้</p>

        </div>
      </div>
    </div>
  </template>
  
  <script>
  import newnav from '@/components/newnav.vue'
    export default {
    components: { newnav },
    name:'profileView',
   
  }
  </script>
  
  <style scoped>
    .textre{
        margin-top: -2px;
        margin-left: 10px;
        color: #ffffff;
    }
      .bigbox{
        display: flex;
        justify-content: center;
      }
      .box{
        margin-top: 100px;
        width: 567px;
        height: 678px;
        border-radius: 5px;
        background: linear-gradient(0deg, #FFF9E8 0%, #FFF9E8 100%), #FFF;
      }
      .profile{
        width: 100px;
        height: 100px;
        border-radius: 100px;
        margin-top: 50px;
        margin-left: 230px;
      }
      .textpassword{
      margin-top: 45px;
      margin-left: 110px;
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
      margin-top: 75px;
      margin-left: 100px;
      position: absolute;
    }
    .textaddress{
      margin-top: 125px;
      margin-left: 110px;
      position: absolute;   
      font-size: 16px;
    }
    .textplsaddress{
      margin-left: 15px;
      margin-top: 8px;
      color: #727171a9;
      position: absolute;
      font-size: 12.5px;
    }
      
    .boxaddress{
      background-color: #ffffff;
      width: 367px;
      height: 32px;
      border: 2px solid #000000;
      padding: 1px;
      margin: 20px;
      border-radius: 4px;
      margin-top: 150px;
      margin-left: 100px;
      position: absolute;
    }
    .textnumber{
      margin-top: 198px;
      margin-left: 110px;
      position: absolute;   
      font-size: 16px;
    }
    .textplsnumber{
      margin-left: 15px;
      margin-top: 8px;
      color: #727171a9;
      position: absolute;
      font-size: 12.5px;
    }
      
    .boxnumber{
      background-color: #ffffff;
      width: 367px;
      height: 32px;
      border: 2px solid #000000;
      padding: 1px;
      margin: 20px;
      border-radius: 4px;
      margin-top: 223px;
      margin-left: 100px;
      position: absolute;
    }
    .reset{
        width: 55px;
        height: 22px;
        background-color: #D9B571;
        border-radius: 10px;
        margin-left: 410px;
        position: absolute;
        margin-top: 45px;
    }
    .textemail{
      margin-top: 270px;
      margin-left: 110px;
      position: absolute;   
      font-size: 16px;
    }
    .textplsemail{
      margin-left: 15px;
      margin-top: 8px;
      color: #727171a9;
      position: absolute;
      font-size: 12.5px;
    }
    .boxemail{
      background-color: #ffffff;
      width: 367px;
      height: 32px;
      border: 2px solid #000000;
      padding: 1px;
      margin: 20px;
      border-radius: 4px;
      margin-top: 295px;
      margin-left: 100px;
      position: absolute;
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
      margin-left: -120px;
      position: absolute;
      margin-top: 520px;
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
    .textbut{
      text-align: center;
      margin-top: -7px;
      font-size: 15px;
    }
    .textlogin{
        position: absolute;
        margin-top: 480px;
        margin-left: 256px;
        color: #0000008f;
        font-weight: bold;
    } 
  </style>