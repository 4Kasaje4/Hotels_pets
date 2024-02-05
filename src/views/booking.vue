<template>
    <newnav/>
    <div>
        <img class="arrow" src="../img/arrow-left.png" alt="" width="40px;">
        <div class="bigbox">
        <div class="box">
            <h2 class="textser">ข้อมูลการจองสัตว์เลี้ยง</h2>
            <h2 class="texthead1">รายละเอียดสัตว์เลี้ยง</h2>
            <div class="bigboxtype">
                <p class="texttype">เป็นสัตว์เลี้ยงประเภทอะไร ?</p>
                <p class="texttype1">สายพันธ์ุอะไร ?</p>
                <div class="boxtype"> <p class="text1">สุนัข </p></div>
                <div class="boxtype1"> <p class="text1">ไซบีเรียนฮัสกี้ </p> </div>
                <p class="texttype">สัตว์เลี้ยงของคุณขนาดเท่าไหร่ ?</p>
                <p class="texttype1">ชื่อเล่นสัตว์เลี้ยง</p>
                <div class="boxtype"> <p class="text1">10 - 15 kg </p> </div>
                <div class="boxtype1"> <p class="text1">ไทนี่</p></div>
            </div>  

            <h2 class="textreserve">รายละเอียดเพิ่มเติม</h2>      
            <div class="bigboxtype">
                <p class="texttype">โปรดเลือกวันที่จะเริ่มให้บริการ</p>
                <p class="texttype1">เวลา</p>
                <div class="boxtype"> <p class="text1">9/9/2566</p></div>
                <div class="boxtype1"><p class="text1">9.30</p></div>
                <p class="texttype">คุณต้องการให้รับสัตว์เลี้ยงถึงที่หรือไม่ ?</p>
                <p class="texttype1">อาหารที่เเพ้</p>
                <div class="boxtype"><p class="text1">Maxima productnation</p></div>
                <div class="boxtype1"></div>
                <p class="texttype2">ข้อมูลเพิ่มเติมที่พี่เลี้ยงควรรู้เกี่ยวกับสัตว์เลี้ยงของคุณ </p> <p class="colortext">(ไม่จำเป็น)</p>
                <div class="boxtype2"><p class="text1">น้องหมาไม่กินอาหารเม็ดยี่ห้อ Maxima productnation ต้องการให้น้องหมาว่ายน้ำทุกเย็น</p></div>
            </div> 

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
  
  <style scoped>
  .arrow{
    margin-left: 100px;
    margin-top: 50px;
  }
  .bigbox{
        display: flex;
        justify-content: center;
    }
      .box{
        width: 1000px;
        height: 750px;
        background-color: #FFF9E8;
        border-radius: 20px;
        margin-top: -10px;
      }
  
      .textser{
        margin-left: 100px;
        margin-top: 60px;
        font-size: 25px;
        color: #C07E00;
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
      .text1{
        margin-top: 5px;
        margin-left: 10px;
        color: #797979;
        
      }
  </style>