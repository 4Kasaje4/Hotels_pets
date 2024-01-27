<template>
  <newnav/>
  <div>
    <div class="img">
      <img class="imgcat" src="../img/catty.jpg" alt="" width="1100px" height="500px">
    </div>
    <h1 class="textser">เลือกบริการของคุณกันเลย !</h1>
    <h1 class="textchoose">เลือกใช้บริการที่คุณต้องการสำหรับสัตว์เลี้ยงของคุณ</h1>
    <button class="button1"> <p class="textbut">บริการ</p> </button>

 

  </div>
</template>

<script>
import newnav from '@/components/newnav.vue'
export default {
components: { newnav },
  name:'HomepageView'
 
}
</script>

<style scoped>
.img{
  display: flex;
  justify-content: center;
}
.imgcat{
  margin-top: 60px;
}
.textser{
  text-align: center;
  margin-top: 80px;
  font-size: 50px;
}
.textchoose{
  font-size: 25px;
  text-align: center;
  color: #777;
  margin-top: 15px;
}
.textbut{
  font-size: 30px;
  margin-top: -18px;
}
.button1{
      width: 140px;
      height: 40px;
      background-color: #C07E00;
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
      margin-left: 680px;
      margin-top: 50px;
    } 
    .button1 {
      background-color: #C07E00; 
      color: rgb(255, 255, 255); 
      border: 2px solid #C07E00;
    }

    .button1:hover {
      background-color: #744c04;
      color: #ffffff;
    }
    
</style>