<template>
    <div>
       <div class="bigbox">
        <div class="textfooter">
            <h2>โรงแรมรับฝาก CAT & DOG HOTEL</h2>
            <h2 class="text1">999/9 หน้ามหาวิทยาลัยพะเยา ตำบลแม่กา อำเภอเมือง จังหวัดพะเยา 56000</h2>
            <h2 class="text2" >099-999-9999</h2>
            <h2 class="text3" >CATDOGHOTEL999@GMAIL.COM</h2>   
        </div>
        <div class="img">
            <img class="imgface" src="../img/เฟซ.png" alt="" width="80px" height="61px">
            <img class="imgline" src="../img/ไลน์.png" alt=""  width="100px" height="80px">
            <img class="imgig" src="../img/ไอจี.png" alt=""  width="80px" height="61px"> 
            <img class="imgyoutobe" src="../img/ยูทูป.png" alt=""  width="130px" height="80px">
        </div>

       </div>
    </div>
  </template>
    
  <script>
  export default {
    name:'FooterView'
   
  }
  </script>
  
  <style scoped>
  .img{
    display: flex;
    justify-content: center;
  }
  .imgyoutobe{
    margin-top: 39px;
    margin-left: -20px;
  }
  .imgig{
    margin-top: 45px;
    margin-left: -8px;
  }
    .imgface{
        margin-top: 50px;
    }
    .imgline{
        margin-top: 38px;
        margin-left: -8px;
    }
    .bigbox{
        width: 1536px;
        height: 390px;
        background: #D9D9D9;
        margin-top: 100px;
    }
    .textfooter{
        margin-left: 200px;
        padding-top: 50px;
    }
    .text1{
        margin-top: 10px;
    }
    .text2{
        margin-top: 10px;
    }
    .text3{
        margin-top: 10px;
    }

  </style>