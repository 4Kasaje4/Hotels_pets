<template>
  <div class="Nav" >
        <img class="logo" src="../img/logo.png" alt="" width="300px" height="100px" style="margin-top:-30px" >
      <!-- <div class="text"> 
        <h3 style="cursor: pointer;" class="t">หน้าแรก</h3>
        <h3 style="cursor: pointer;" class="t">แพ็กเกจ/โปรโมชั่น</h3>
        <h3 style="cursor: pointer;" class="t"> เกี่ยวกับเรา</h3>
      </div>
      <div id="tt" class="t"> 
        <h3 style="cursor: pointer;">เข้าสู่ระบบ</h3>
      </div> -->
      <div style="margin-top: 0.5%;">
        <a id="navchoice" href="HomeView" >หน้าแรก</a>
        <a id="navchoice" href="package" >แพ็กเกจ/โปรโมชั่น</a>
        <a id="navchoice" href="about" >เกี่ยวกับเรา</a>
        <a id="navchoice" href="login" >เข้าสู่ระบบ</a>
      </div>
   </div>
</template>

<script>
export default {
    name:'NavView'
}
</script>

<style>
*{
  margin: 0px;
}

/* Kasaje */

#navchoice{
  padding-left: 1vw;
  text-decoration: none; 
  font-size: large; 
  font-weight:600;
  color: black;
}

#navchoice:hover {
  color: #C07E00;
}

/* Kasaje */


.t:hover{
  color: #C07E00;
}
 .Nav{
  width: auto;
  height: 40px;
  background: linear-gradient(180deg, #fdde91 0%, #f9f2d4 100%);
  display: flex;
  justify-content: space-between;
  padding: 20px;

 }
.t{
  margin-left: 35px;
  margin-top: 10px; 
 }
 .text{
    margin-left: 650px;
    display: flex;
    margin-top: -5px;
 }

 #tt{
  margin-top: 5px;
 }

 
</style >