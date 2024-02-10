<template>
   <newnav/>
  <div>
    
    <div class="texthead">
      <h2 class="text1"><a href="" class="aa">ข้อมูลพี่เลี้ยง</a></h2>
      <h2 class="text1"><a href="" class="aa">ข้อมูลผู้ใช้งาน</a></h2>
      <h2 class="text1"><a href="" class="aa">ข้อมูลเเอดมิน</a></h2>
    </div>
    <img src="../img/arrow-left.png" alt="" width="40px" style="margin-left:90px;">

   <div class="BIGBOX">
      <div class="box">
       <img class="imgbox" src="../img/user.png" alt="" width="200px">
       <h1 class="text2">ผู้ดูเเลคนที่ 1</h1>
       <h2 class="text3">ชื่อ : kasaje </h2>
       <h2 class="text4">นามสกุล : kasaju</h2>
       <h2 class="text5">เบอร์ : 099-999-9995</h2>
       <button class="button2"> <p class="textbut">รายละเอียด</p> </button>
      </div>
   </div>

   <div class="BIGBOX">
      <div class="box">
       <img class="imgbox" src="../img/user.png" alt="" width="200px">
       <h1 class="text2">ผู้ดูเเลคนที่ 2</h1>
       <h2 class="text3">ชื่อ : โบวี่สุดหล่อ  </h2>
       <h2 class="text4">นามสกุล : ครับผม</h2>
       <h2 class="text5">เบอร์ : 099-999-9998</h2>
       <button class="button2"> <p class="textbut">รายละเอียด</p> </button>
      </div>
   </div>

  </div>
  <FooterView />
</template>

<script>
 import newnav from '@/components/newnav.vue'
    export default {
    components: { newnav },
    name:'bookingView',
   
  }
</script>

<style>
    .texthead{
      display: flex;
      justify-content: center;
    }
    .text1{
      margin-left: 50px;
      margin-top: 50px;
    }

/* visited link */
  a:visited {
  color: #979797;
  }

/* mouse over link */
  a:hover {
  color: #AE8A44;
  } 

/* selected link */
  a:active {
  color: #AE8A44;
  }
  .aa{
    text-decoration: none;
  }
  .BIGBOX{
    display: flex;
    justify-content: center ;
  }
  .box{
    width: 800px;
    height: 350px;
    background-color: #FFF8E4;
    border-radius: 20px;
    margin-top: 50px;
  }
  .imgbox{
    margin-top: 70px;
    margin-left: 100px;
  }
  .text2{
    position: absolute;
    margin-top: -200px;
    margin-left: 400px;
  }
  .text3{
    position: absolute;
    margin-top: -150px;
    margin-left: 400px;
    color: #575757;
  }
  .text4{
    position: absolute;
    margin-top: -115px;
    margin-left: 400px;
    color: #575757;
  }
  .text5{
    position: absolute;
    margin-top: -80px;
    margin-left: 400px;
    color: #575757;
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
      margin-left: 120px;
      position: absolute;
      margin-top: 245px;
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
      margin-top: -10px;
      font-size: 20px;
    }
 
 
 

  

</style>