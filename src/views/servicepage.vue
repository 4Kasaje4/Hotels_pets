<template>
  <newnav/>
  <div>
    <h1 class="texthead">บริการสำหรับสัตว์เลี้ยงของคุณ</h1>
    <div class="bigbox">
      <div class="box">
        <img class="imgdog" src="../img/dog2.jpg" alt="">
        <h1 class="textser">บริการฝากเลี้ยงสัตว์เลี้ยง</h1>
        <p class="textservice1">เป็นบริการรับฝากเลี้ยงสัตว์ </p>
           <p class="textservice1">ทุกช่วงเวลา นานเท่าที่ต้องการ </p>
           <p class="textservice1"> มีบ้านสำหรับน้องหมาน้องเเมว </p>
           <p class="textservice1">พร้อมของใช้สำหรับสัตว์เลี้ยง</p>
           <button class="button2"> <h4 class="textbut">จอง</h4> </button>
      </div>
    </div>

    <div class="bigbox">
      <div class="box">
        <img class="imgdog" src="../img/หมาว่ายน้ำ.webp" alt="">
        <h1 class="textser">กิจกรรมสำหรับสัตว์เลี้ยง</h1>
        <p class="textservice1">เป็นบริการเกี่ยวกับให้สัตว์เลี้ยง </p>
           <p class="textservice1">ได้ออกกำลังกาย ทำให้น้องหมา </p>
           <p class="textservice1"> น้องเเมวของคุณผ่อนคลาย </p>
           <button class="button2"> <h4 class="textbut">จอง</h4> </button>
      </div>
    </div>

    <div class="bigbox">
      <div class="box">
        <img class="imgdog" src="../img/แมวตัดขน.jpg" alt="">
        <h1 class="textser">บริการตัดขนสัตว์เลี้ยง</h1>
        <p class="textservice1">เป็นบริการรับฝากเลี้ยงสัตว์ </p>
           <p class="textservice1">ทุกช่วงเวลา นานเท่าที่ต้องการ </p>
           <p class="textservice1"> มีบ้านสำหรับน้องหมาน้องเเมว </p>
           <p class="textservice1">พร้อมของใช้สำหรับสัตว์เลี้ยง</p>
           <button class="button2"> <h4 class="textbut">จอง</h4> </button>
      </div>
    </div>

    <div class="bigbox">
      <div class="box">
        <img class="imgdog" src="../img/หมาอาบน้ำ.jpg" alt="">
        <h1 class="textser">บริการอาบน้ำสัตว์เลี้ยง</h1>
        <p class="textservice1">เป็นบริการรับอาบน้ำสัตว์เลี้ยง</p>
           <p class="textservice1">พร้อมบริการเเบบเบามือต่อ</p>
           <p class="textservice1"> สัตว์เลี้ยง ทำให้น้องหมาน้อง </p>
           <p class="textservice1">เเมวสะอาดเเละหอมสดชื่น</p>
           <button class="button2"> <h4 class="textbut">จอง</h4> </button>
      </div>
    </div>

  </div>
  <FooterView />
</template>

<script>
  import newnav from '@/components/newnav.vue'
  export default {
  components: { newnav },
  name:'caretakerView'
}

</script>

<style scoped>
.texthead{
  text-align: center;
  margin-top: 50px;
  background: linear-gradient( 50deg, #765D2E, #eba729);
  background-size: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bigbox{
  display: flex;
  justify-content: center;
}
.box{
  width: 950px;
  height: 400px;
  border-radius: 10px;
  background-color: #F6F6F6;
  margin-top: 50px;
}
.imgdog{
  width: 350px;
  height: 300px;
  margin-left: 50px;
  margin-top: 50px;
  border-radius: 25px;
  display: flex;
}
.textser{
  margin-left: 450px;
  margin-top: -280px;
}
.textservice{
  margin-left: 450px;
  margin-top: 20px;
  font-weight: bold;
  color: #797979;
  font-size: 20px;
}
.textservice1{
  margin-left: 450px;
  margin-top: 3px;
  font-weight: bold;
  color: #797979;
  font-size: 20px;
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
      margin-left: 500px;
      position: absolute;
      margin-top: 30px;
    }
    .button2 {
      background-color: #C07E00; 
      color: rgb(255, 255, 255); 
      border: 2px solid #C07E00;
    }

    .button2:hover {
      background-color: #875a06;
      color: #ffffff;
    }
    .textbut{
      text-align: center;
      margin-top: -13px;
      font-size: 25px;
    }
  
  
    
</style>