<template>
  <div>
    <div class="nav">
     <div class="bigline">
        <div class="line"> </div>
        <div class="line2"> </div>
        <div class="line3"> </div>
     </div>
     <div class="smallbox"><img src="../img/image 3.png" alt=""> </div>
     <div class="smallbox1"> <img class="img2" src="../img/image 2.png" alt=""> </div>
     <img class="arrow" src="../img/arrow-down.png" alt="" width="25px">
     <img class="imgcicle" src="../img/ลุงพล.jpg" alt=""  width="75" height="70">
     <h3 class="textser">บริการ</h3>
    </div>
  </div>
</template>

<script>
export default {
  name:'mainView'
 
}
</script>

<style scoped>
    .img2{
      margin-left: 8px;
      margin-top: 10px;
    }
    .nav{
      width: 1535px;
      height: 101px;
      background: linear-gradient(180deg, #fdde91 0%, #f9f2d4 100%);

    }
    .bigline{
      margin-top: 15px;
      position: absolute;
    }
    .line{
      width: 35px;
      height: 5px;
      background-color: black;
      margin-left: 50px;
      margin-top: 30px;
      position: absolute;
      border-radius: 5px;

    }
    .line2{
      width: 35px;
      height: 5px;
      background-color: black;
      margin-left: 50px;
      margin-top: 22px;
      position: absolute;
      border-radius: 5px;

    }
    .line3{
      width: 35px;
      height: 5px;
      background-color: black;
      margin-left: 50px;
      margin-top: 38px;
      position: absolute;
      border-radius: 5px;
    }
    .textser{
      margin-left: 1060px;
      margin-top: -57px;
      position: absolute;
    }
    .imgcicle{
      border-radius: 50%;
      margin-left: 1395px;
      margin-top: 13px;
    }
    .smallbox{
      width: 65px;
      height: 65px;
      margin-left: 1295px;
      margin-top: 18px;
      border-radius: 50px;
      background-color: #fdd56e;
      position: absolute;
    }
    .smallbox1{
      width: 65px;
      height: 65px;
      margin-left: 1200px;
      margin-top: 18px;
      border-radius: 50px;
      background-color: #fdd56e;
      position: absolute;
    }
    .arrow{
      margin-left: 1130px;
      margin-top: 34px;
      position: absolute;
    }
</style>
