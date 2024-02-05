<template>
    <newnav/>
    <div>
        <img class="arrow" src="../img/arrow-left.png" alt="" width="40px;">
        <h1 class="texthead">ประวัติการจอง</h1>    

      <div class="bigbox">
        <div class="box"> 
            <img class="imglogo" src="../img/logo.png" alt="" width="250px;">
            <p class="reserve">จองสำเร็จ</p>
            <img class="img" src="../img/dog2.jpg" alt="" width="350px;">
            <h2 class="textser">บริการฝากเลี้ยงสัตว์เลี้ยง</h2>
            <p class="text">เป็นบริการรับฝากเลี้ยงสัตว์</p>
            <p class="text1">ทุกช่วงเวลา นานเท่าที่ต้องการ</p>
            <p class="text1">มีบ้านสำหรับน้องหมาน้องเเมว</p>
            <p class="text1">พร้อมของใช้สำหรับสัตว์เลี้ยง</p>
            <button class="button2"> <p class="textbut">รายละเอียด</p> </button>
            <button class="button3"> <p class="textbut3">ยกเลิก</p> </button>
        </div>
      </div>
    </div>
    <FooterView />
  </template>
  
  <script>
  import newnav from '@/components/newnav.vue'
    export default {
    components: { newnav },
    name:'caretakerView',
   
  }
  </script>
  
  <style scoped>
  .arrow{
    margin-left: 100px;
    margin-top: 50px;
  }
  .texthead{
    margin-left: 200px;
    margin-top: -42px;
  }
  .bigbox{
    display: flex;
    justify-content: center;
  }
  .box{
    width: 850px;
    height: 330px;
    background-color: #F6F6F6;
    border-radius: 10px;
    margin-top: 50px;
  }
  .imglogo{
    margin-top: 5px;
    margin-left: 50px;
  }
  .reserve{
    font-size: 20px;
    position: absolute;
    margin-top: -50px;
    color: #C07E00;
    margin-left: 730px;
  }
  .img{
    position: absolute;
    margin-top: 70px;
    margin-left: -230px;
    border-radius: 25px;
  }
  .textser{
    margin-left: 470px;
  }
  .text{
    margin-left: 470px;
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #797979;
  }
  .text1{
    margin-left: 470px;
    margin-top: 5px;
    font-size: 16px;
    font-weight: bold;
    color: #797979;
  }
  .textbut{
        text-align: center;
        margin-top: -12px;
        font-size: 19px;
      }
      .button2{
        width: 160px;
        height: 9px;
        background-color: #cf8920;
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
        margin-left: 470px;
        margin-top: 20px;
      }
      .button2 {
        background-color: #C07E00; 
        color: rgb(255, 255, 255); 
        border: 2px solid #C07E00;
      }

      .button2:hover {
        background-color: #8c6311;
        border: 2px solid #8c6311;
        color: #ffffff;
      }

      .text{
    margin-left: 470px;
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #797979;
  }
  .text1{
    margin-left: 470px;
    margin-top: 5px;
    font-size: 16px;
    font-weight: bold;
    color: #797979;
  }
  .textbut3{
        text-align: center;
        margin-top: -12px;
        font-size: 19px;
      }
      .button3{
        width: 140px;
        height: 9px;
        background-color: #cf8920;
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
        margin-left: 30px;
        margin-top: 20px;
        position: absolute;
      }
      .button3 {
        background-color: #ffffff; 
        color: #C07E00; 
        border: 2px solid #C07E00;
      }

      .button3:hover {
        background-color: #8c6311;
        border: 2px solid #8c6311;
        color: #ffffff;
      }
  </style>