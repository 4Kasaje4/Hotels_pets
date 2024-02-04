<template>
    <newnav/>
    <div>
        <h1 class="texthead">การจองบริการฝากเลี้ยงสัตว์เลี้ยง</h1>
      <div class="bigbox">
        <div class="box">
            <h2 class="textser">กรอกข้อมูลการจองสัตว์เลี้ยง</h2>
            <h2 class="texthead1">รายละเอียดสัตว์เลี้ยง</h2>
            <div class="bigboxtype">
                <p class="texttype">เป็นสัตว์เลี้ยงประเภทอะไร ?</p>
                <p class="texttype1">สายพันธ์ุอะไร ?</p>
                <div class="boxtype"></div>
                <div class="boxtype1"></div>
                <p class="texttype">สัตว์เลี้ยงของคุณขนาดเท่าไหร่ ?</p>
                <p class="texttype1">ชื่อเล่นสัตว์เลี้ยง</p>
                <div class="boxtype"></div>
                <div class="boxtype1"></div>
            </div>
            <h2 class="textreserve">รายละเอียดเพิ่มเติม</h2>      
            <div class="bigboxtype">
                <p class="texttype">โปรดเลือกวันที่จะเริ่มให้บริการ</p>
                <p class="texttype1">เวลา</p>
                <div class="boxtype"></div>
                <div class="boxtype1"></div>
                <p class="texttype">คุณต้องการให้รับสัตว์เลี้ยงถึงที่หรือไม่ ?</p>
                <p class="texttype1">อาหารที่เเพ้</p>
                <div class="boxtype"></div>
                <div class="boxtype1"></div>
                <p class="texttype2">ข้อมูลเพิ่มเติมที่พี่เลี้ยงควรรู้เกี่ยวกับสัตว์เลี้ยงของคุณ </p> <p class="colortext">(ไม่จำเป็น)</p>
                <div class="boxtype2"></div>
            </div>   
            <button class="button2"> <h4 class="textbut">ยกเลิก</h4> </button>
            <button class="button3"> <h4 class="textbut1">ยืนยัน</h4> </button>
                  
        </div>
      </div>
    </div>

  </template>
  
  <script>
  import newnav from '@/components/newnav.vue'
  export default {
  components: { newnav },
  name:'servicepageView'
   
  }
  </script>
  
  <style scoped>
    .bigbox{
        display: flex;
        justify-content: center;
    }
      .box{
        width: 1000px;
        height: 950px;
        background-color: #FFF9E8;
        border-radius: 20px;
        margin-top: 50px;
      }
      .texthead{
       text-align: center;
        margin-top: 50px;
        color: #C07E00;
        font-size: 30px;
      }
      .textser{
        margin-left: 100px;
        margin-top: 60px;
        font-size: 25px;
      }
      .texthead1{
        margin-left: 100px;
        margin-top: 40px;
        font-size: 23px;
       }

      .texttype{
        margin-left: 100px;
        margin-top: 20px;
        font-size: 20px;
        display: flex;
      }
      .texttype1{
        margin-left: 500px;
        margin-top: -25px;
        font-size: 20px;
        position: absolute;
      }
      .boxtype{
        width: 350px;
        height: 30px;
        background-color: #ffffff;
        border: 2px solid #000000;
        border-radius: 4px;
        margin-left: 100px;
        margin-top: 10px;
      }
      .boxtype1{
        width: 350px;
        height: 30px;
        background-color: #ffffff;
        border: 2px solid #000000;
        border-radius: 4px;
        margin-left: 500px;
        margin-top: -33px;
      }
      .textreserve{
        margin-left: 100px;
        margin-top: 40px;
        font-size: 23px
      }
      .texttype2{
        margin-left: 100px;
        margin-top: 20px;
        font-size: 20px;
        position: absolute;
      }
      .boxtype2{
        width: 750px;
        height: 30px;
        background-color: #ffffff;
        border: 2px solid #000000;
        border-radius: 4px;
        margin-left: 100px;
        margin-top: 65px;
      }
      .colortext{
        margin-left: 530px;
        margin-top: 20px;
        font-size: 20px;
        position: absolute;
        color: #7C7C7C;
      }
      .button2{
      width: 169px;
      height: 43px;
      background-color: #000000;
      border: none;
      color: #C07E00;
      padding: 16px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      transition-duration: 0.4s;
      cursor: pointer;
      border-radius: 10px;
      margin-left: 250px;
      position: absolute;
      margin-top: 50px;
    }
    .button2 {
      background-color: #ffffff; 
      color: #C07E00; 
      border: 2px solid #C07E00;
    }

    .button2:hover {
      background-color: #C07E00;
      color: #ffffff;
    }
    .textbut{
      text-align: center;
      margin-top: -13px;
      font-size: 25px;
    }
    .button3{
      width: 169px;
      height: 43px;
      background-color: #000000;
      border: none;
      color: #C07E00;
      padding: 16px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      transition-duration: 0.4s;
      cursor: pointer;
      border-radius: 10px;
      margin-left: 500px;
      position: absolute;
      margin-top: 50px;
    }
    .button3 {
      background-color: #C07E00; 
      color: #ffffff; 
      border: 2px solid #C07E00;
    }

    .button3:hover {
      background-color: #ffffff;
      color: #C07E00;
    }
    .textbut1{
      text-align: center;
      margin-top: -13px;
      font-size: 25px;
    }
  </style>