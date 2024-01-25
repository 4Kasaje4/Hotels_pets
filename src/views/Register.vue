<template>
    <NavView />
    <div>

        <div>
            
        </div>

        <!-- <div class="Bigbox">
            <div class="box">
                <h1 class="textrejis" >สมัครสมาชิก</h1>
                <div class="boxtext">
                    <h3 class="textmail">Username</h3>
                    <div class="boxemail"> <p class="plsemail">Username</p></div>
                    <div style="text-align: center; margin-top: 1%;">
                        <input name="username" style="width: 367px; height: 32px; border-radius: 4px; padding-left: 10px; font-size:medium"  placeholder="Username" type="text">
                    </div>

                    <h3 class="textname">ชื่อ</h3> 
                     <h3 class="textsurname">นามสกุล</h3>
                    <div class="boxname"><p class="plsname">กรอกชื่อ</p></div> 
                    <div style="text-align: center; display: flex; justify-content: center;">
                        <div style="display: flex;  justify-content:space-between; width: 385px;">
                            <input name="fristname" style="width: 173px; height: 32px; border-radius: 4px; font-size: medium; padding-left: 10px;" placeholder="ชื่อ" type="text">
                            <input name="lastname" style="width: 173px; height: 32px; border-radius: 4px; font-size: medium; padding-left: 10px;" placeholder="นามสกุล" type="text">
                        </div>
                    </div>
                    <div class="boxsurname" style="margin-top:-38px;"><p class="plssurname">กรอกนามสกุล</p></div> 

                    <h3 class="textpasswordagain">อีเมล</h3>
                    <div class="boxpasswordagain"><p class="plspassword">กรอกอีเมล</p></div> 

                    <h3 class="textpasswordagain">เบอร์โทรศัพท์</h3>
                    <div class="boxpasswordagain"><p class="plspassword">กรอกเบอร์โทรศัพท์</p></div> 

                    <h3 class="textpassword">รหัสผ่าน</h3>
                    <div class="boxpassword"><p class="plspassword">ใส่รหัสผ่าน(6-16ตัวอักษร)</p></div>

                    <h3 class="textpasswordagain">รหัสผ่านอีกครั้ง</h3>
                    <div class="boxpasswordagain"><p class="plspassword">ใส่รหัสผ่าน(6-16ตัวอักษร)</p></div>  
                    

                </div>
                <div class="boxsmall"> </div>
                <p class="accept">รับทราบและยอมรับ นโยบายความเป็นส่วนตัว</p>
                <button class="accept button"> ยืนยัน </button>
                <div class="line"> </div>
                <div class="line1"> </div>
                <p class="linetext">หรือ</p>

                <div class="img">
                    <img src="../img/line.png" alt="" width="55px" height="55px" style="margin-left:125px; ">
                    <img src="../img/facebook.png" alt="" width="55px" height="55px"  style="margin-left:30px">
                    <img src="../img/twitter.png" alt="" width="55px" height="55px" style="margin-left:30px">
                    <img src="../img/search.png" alt="" width="55px" height="55px" style="margin-left:30px">
                </div>

            </div>

        </div> -->
    </div>
  </template>
  
  <script>
  export default {
    name:'RegisterView'
   
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
        margin-left: 215px;
        margin-top: 20px;
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