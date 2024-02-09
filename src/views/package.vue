<template>
  <div class="Nav" >
        <img class="logo" src="../img/logo.png" alt="" width="300px" height="100px" style="margin-top:-30px" >
      <div style="margin-top: 0.5%;">
        <a id="navchoice" @click="about()" >เกี่ยวกับเรา</a>
      </div>
   </div>


    <div>
      <div>
        <h1 class="texthead">เเพ็กเกจ/โปรโมชั่น</h1>
        <div class="biggbox"> 
          <div class="bigbox">
        
              <h2 class="textpackage">แพ็กเกจตัดขน</h2>
              <h2 class="textpackage1">แพ็กเกจตัดขน</h2>
              <div class="imgbox">  
                <img class="imgpackage" src="../img/cutcat.jpg" alt="" width="466px" >
                <img class="imgpackage1" src="../img/dogswim.jpg" alt="" width="466px" height="315px">
              </div>

                 <div class="imgbox1"> 
                  <h2 class="textpackage2">แพ็กเกจเลี้ยงฟรี</h2>
                  <img  class="imgpackage2" src="../img/cadog.jpg" alt="" width="466px" height="315px">
                 </div>

              <div class="smallbox">
                <p class="textsmall">5 แถม 1</p>    
              </div>
              
              <div class="smallbox1">
                <p class="textsmall1"> 5 แถม 1</p>
              </div>

              <div class="smallbox2">
                <p class="textsmall1"> 5 แถม 1</p>
              </div>
              


          </div>
        </div>
      </div>
    </div>
    <FooterView />
  </template>
  
  <script>
  export default {
    name:'packageView',
    methods: {
      about(){
        this.$router.push('/about');
      },
    },
    mounted(){
    }
  }
  </script>
  
  <style scoped>
  .texthead{
    color: #C07E00;
    text-align: center;
    margin-top: 50px;
  }

  .biggbox{
    display: flex;
    justify-content: center;
  }
  .bigbox{
    width: 1127px;
    height: 1058px;
    border-radius: 25px;
    background: #F4F4F4;
    margin-top: 50px;
  }

  .textpackage{
    margin-top: 50px;
    margin-left: 220px;
  }
  .textpackage1{
    margin-top: -36px;
    margin-left: 750px;
  }
  .textpackage2{
    margin-top: -36px;
    margin-left: 150px;
  }
  
  .imgpackage{
    margin-top: 30px;
    margin-left: 60px;
    border-radius: 20px;
  }
  
  .imgpackage1{
    border-radius: 20px;
    margin-left: 60px;
    margin-top: 30px;
  }
  .imgpackage2{
    border-radius: 20px;
    margin-top: 30px;
  }
  .imgbox{
    display: flex;
  }
  .smallbox{
    width: 133px;
    height: 52px;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.57);
    margin-top: -515px;
    margin-left: 220px;
    position: absolute;
  }
  .textsmall{
    font-size: 25px;
    margin-left: 20px;
    margin-top: 8px;
  }
  .textsmall1{
    font-size: 25px;
    margin-left: 20px;
    margin-top: 8px;
  }
  .smallbox1{
    width: 133px;
    height: 52px;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.57);
    margin-top: -515px;
    margin-left: 745px;
    position: absolute;
  }
  .smallbox2{
    width: 133px;
    height: 52px;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.57);
    margin-top: -70px;
    margin-left: 225px;
    position: absolute;
  }

  .imgbox1{
    margin-top: 100px;
    margin-left: 60px;

  }



  /************************************** */

  *{
  margin: 0px;
}

/* Kasaje */

#navchoice{
  cursor: pointer;
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

 
      
  </style>