<template>
  <div>
   
    <div class="container"> 
          <div class="img">
            <img class="slides" src="../img/cat.jpg" alt="" width="1536px" height="550px">
          </div>

          <div class="img">
            <img class="slides" src="../img/dcat.jpg" alt="" width="1536px" height="550px">
          </div>

          <div class="img">
            <img class="slides" src="../img/dog.jpg" alt="" width="1536px" height="550px">
          </div>

          <div class="img">
            <img class="slides" src="../img/dogg.jpg" alt="" width="1536px" height="550px">
          </div>
    </div>
    
    <div class="centertext"> 
         <img class="imgcenter" src="../img/logo.png" alt="">
    </div>

    <div class="textcenter">
      <h2 class="text1">ให้บริการดูแลและรับฝากสัตว์เลี้ยงของคุณ</h2>
      <h2 class="text1">มีพี่เลี้ยงให้คำปรึกษาและดูแลด้วยความใส่ใจการเดินทางสะดวกสบาย</h2>
      <h2 class="text1">มีห้องหลายขนาด รองรับน้องหมาสายพันธุ์ขนาดใหญ่</h2>
      <h2 class="text1">และยังเข้ามาดูสัตว์เลี้ยงได้ตลอด 24 ชม.</h2>
    </div>

    <div>
      <h1 class="text2" >รายละเอียดห้องพักสัตว์เลี้ยง</h1>
    </div>

      <div class="Bigbox">
        <div class="smallbox">
          <div class="pricebox"> <p class="pricetext">440 บาท/วัน</p></div>  
            <img class="imgbig" src="../img/คอกเล็ก.webp" alt="" width="436px" height="357px">
            
            <div class="picbox">
              <img class="imgsmall" src="../img/คอก.jpg" alt="" width="212px;" height="139px;" >
              <img class="imgsmalll" src="../img/คอก3.jpg" alt="" width="212px;" height="139px;">
            </div>
        </div>  
      </div>
    <h1>as</h1>
       
      
    </div>
    


  
  
  
</template>

<script>
    

</script >

<style scoped >
.Slides {
  display:flex;}


.img{
  margin-top: 20px;
}
.centertext{
  display: flex;
  justify-content: center;
}
.text1{
  display: flex;
  justify-content: center;
  color: #838383;
}
.textcenter{
  margin-top: -25px;
}
.text2{
  display: flex;
  justify-content: center;
  color: #DA8F00;
  margin-top: 90px;
  font-family: 'Kanit', sans-serif;
}

.Bigbox{
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.smallbox{
  width: 1108px;
  height: 454px;
  border-radius: 10px;
  background: #F6F6F6;
}
.pricebox{
  width: 141px;
  height: 44px;border-radius: 25px;
  background: linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.72) 100%);
  margin-left: 580px;
  margin-top: 90px;
  position: absolute;
}
.imgbig{
  margin-left: -10px;
  border-radius: 25px;
  margin-top: 50px;
  margin-left: 650px;
}
.picbox{
  display: flex;

}
.imgsmall{
  margin-left: 140px;
  margin-top: -140px;
  border-radius: 25px;
}
.imgsmalll{
  margin-left: 30px;
  margin-top: -140px;
  border-radius: 25px;
}
.pricetext{
  margin-top: 12px;
  margin-left: 30px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  
}








</style >