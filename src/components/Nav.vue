<template>
  <div class="Nav">
        <img class="logo" src="../img/logo.png" alt="" width="300px" height="100px" style="margin-top:-30px" >
      <div class="text"> 
        <h3 class="t">หน้าแรก</h3>
        <h3 class="t">แพ็กเกจ/โปรโมชั่น</h3>
        <h3 class="t"> เกี่ยวกับเรา</h3>
      </div>
      <div id="tt" class="t"> 
        <h3>เข้าสู่ระบบ</h3>
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
.t:hover{
  color: #C07E00;
}
 .Nav{
  width: 1495px;
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