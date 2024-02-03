<template>
    <newnav/>
    <div>
      <div>
        <h1 class="texthead"> ข้อมูลพี่เลี้ยง</h1>
        <div ref="alert_no_pet_sitter" style="text-align: center; font-size: xx-large;"></div>

        <div v-for="(pet_sitter, index) in array_pet_sitter" :key="index" >
          <div v-if="pet_sitter['pet_sitter_pic'] == null">
            <div style="display: flex; justify-content: center; margin: 3%;">
              <div style="width: 50%; background-color: #D9D9D9; border-radius: 15px; display: flex;">
                  <div style="margin: 5% 0 4% 10%;">
                      <img src="../img/Profile_Unknow.png" width="150dvw" alt="">
                </div>
                <div style="width: 100%; justify-content: center;  align-items: center; display: flex;">
                  <div style="font-size: x-large; width: 60%;">
                    <p>สมากชิกคนที่ {{ index + 1 }}</p>
                    <p>ชื่อ : {{ pet_sitter['firstname'] }}</p>
                    <p>นามสกุล : {{ pet_sitter['lastname'] }}</p>
                    <p>เบอร์โทร : {{ pet_sitter['phone'] }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <p>Helloooo</p>
          </div>
        </div>  
      
      
        <!-- <div class="img"> 
          <img class="imgbox" src="../img/อีทิพย์-แม่หญิงลี-13-1.jpg" alt="">
          <h2 class="textname">ชื่อ : พี่หญิงลี</h2>
          <h3 class="textage">อายุ : 34 ปี</h3>
          <h3 class="textgender">เพศ : หญิง</h3>
          <button class="button1"> <p class="textbut">ดู</p> </button>
        </div>

        <div class="img1"> 
          <img class="imgbox1" src="../img/ลีน่าจัง.jpg" alt="">
          <h2 class="textname1">ชื่อ : พี่ลีน่า</h2>
          <h3 class="textage1">อายุ : 30 ปี</h3>
          <h3 class="textgender1">เพศ : หญิง</h3>
          <button class="button2"> <p class="textbut1">ดู</p> </button>
        </div>

        <div class="img2"> 
          <img class="imgbox2" src="../img/blob.jpg" alt="">
          <h2 class="textname2">ชื่อ : พี่บัง</h2>
          <h3 class="textage2">อายุ : 40 ปี</h3>
          <h3 class="textgender2">เพศ : ชาย</h3>
          <button class="button3"> <p class="textbut2">ดู</p> </button>
        </div>

        <div class="img3"> 
          <img class="imgbox3" src="../img/OIP.jpg" alt="">
          <h2 class="textname3">ชื่อ : พี่ตู่</h2>
          <h3 class="textage3">อายุ : 42 ปี</h3>
          <h3 class="textgender3">เพศ : ชาย</h3>
          <button class="button4"> <p class="textbut3">ดู</p> </button>
        </div> -->
      </div>

    </div>
  </template>
  
  <script>
import newnav from '@/components/newnav.vue'
  export default {
  components: { newnav },
    name:'caretakerView',
    data(){
      return {
        array_pet_sitter: []
      }
    },
    methods: {
      async show_pet_sitter(){
        const response = await fetch('http://localhost:3000/all_pet_sitter');
        const response_data = await response.json();
        this.array_pet_sitter = response_data
        // if(this.array_pet_sitter.length == 0){
        //   this.$refs.alert_no_pet_sitter.innerHTML = '<p>ไม่มีข้อมูล</p>'
        // }else{
        //   for(let i = 0; i< this.array_pet_sitter.length; i++){
        //     console.log(this.array_pet_sitter[i]);
        //     if(this.array_pet_sitter[i]['pet_sitter_pic'] == null){
              
        //     //   const Profile_Unknow = '../img/Profile_Unknow.png'
        //     //   let profile = `
            //   <div style="display: flex; justify-content: center;">
            //   <div style="width: 50%; background-color: #D9D9D9; border-radius: 15px; display: flex;">
            //       <div style="margin: 5% 0 4% 10%;">
            //         <div style="background-color: aliceblue; border-radius: 50%; height: 90%;">
            //           <img src="${Profile_Unknow}" width="150dvw" alt="">
            //       </div>
            //     </div>
            //     <div style="width: 100%; justify-content: center;  align-items: center; display: flex;">
            //       <div style="font-size: x-large;">
            //         <p>สมากชิกคนที่ : ${i+1}</p>
            //         <p>${this.array_pet_sitter[i]['firstname']}  ${this.array_pet_sitter[i]['lastname']}</p>
            //         <p></p>
            //       </div>
            //     </div>
            //   </div>
            // </div>
        //     //   `
        //     }

        //   }
        // }
      }
    },
    mounted(){
      this.show_pet_sitter()
    }
  }
  </script>
  
  <style scoped>
  .texthead{
    text-align: center;
    margin-bottom: 3%;
    margin-top: 30px;
    background: linear-gradient(180deg, #765D2E 0%, #D9B571 99.99%, #FFF 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .imgbox{
    width: 250px;
    height: 200px;
    border-radius: 10px;
    margin-left: 450px;
    margin-top: 80px;
  }
  .img{
    display: flex;
  }
  .textname{
    margin-top: 100px;
    margin-left: 120px;
    
  }
  .textage{
    margin-top: 145px;
    margin-left: -135px;

  }
  .textgender{
    margin-top: 185px;
    margin-left: -90px;

  }
  .textbut{
    margin-top: -13px;
    font-size: 22px;
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
      margin-left: -90px;
      margin-top: 230px;
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
    .imgbox1{
    width: 250px;
    height: 200px;
    border-radius: 10px;
    margin-left: 450px;
    margin-top: 80px;
  }
  .img1{
    display: flex;
  }
  .textname1{
    margin-top: 100px;
    margin-left: 125px;
    
  }
  .textage1{
    margin-top: 145px;
    margin-left: -110px;

  }
  .textgender1{
    margin-top: 185px;
    margin-left: -90px;

  }
  .textbut1{
    margin-top: -13px;
    font-size: 22px;
  }
  .button2{
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
      margin-left: -90px;
      margin-top: 230px;
    }
    .button2 {
      background-color: #C07E00; 
      color: rgb(255, 255, 255); 
      border: 2px solid #C07E00;
    }

    .button2:hover {
      background-color: #744c04;
      color: #ffffff;
    }

    .imgbox2{
    width: 250px;
    height: 200px;
    border-radius: 10px;
    margin-left: 450px;
    margin-top: 80px;
  }
  .img2{
    display: flex;
  }
  .textname2{
    margin-top: 110px;
    margin-left: 110px;
    
  }
  .textage2{
    margin-top: 145px;
    margin-left: -110px;

  }
  .textgender2{
    margin-top: 185px;
    margin-left: -90px;

  }
  .textbut2{
    margin-top: -13px;
    font-size: 22px;
  }
  .button3{
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
      margin-left: -100px;
      margin-top: 230px;
    }
    .button3{
      background-color: #C07E00; 
      color: rgb(255, 255, 255); 
      border: 2px solid #C07E00;
    }

    .button3:hover {
      background-color: #744c04;
      color: #ffffff;
    }

  .imgbox2{
    width: 250px;
    height: 200px;
    border-radius: 10px;
    margin-left: 450px;
    margin-top: 80px;
  }
  .img2{
    display: flex;
  }
  .textname2{
    margin-top: 100px;
    margin-left: 130px;
    
  }
  .textage2{
    margin-top: 145px;
    margin-left: -100px;

  }
  .textgender2{
    margin-top: 185px;
    margin-left: -90px;

  }
  .textbut2{
    margin-top: -13px;
    font-size: 22px;
  }
  .button3{
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
      margin-left: -90px;
      margin-top: 230px;
    }
    .button3{
      background-color: #C07E00; 
      color: rgb(255, 255, 255); 
      border: 2px solid #C07E00;
    }

    .button3:hover {
      background-color: #744c04;
      color: #ffffff;
    }

    .imgbox3{
    width: 250px;
    height: 200px;
    border-radius: 10px;
    margin-left: 450px;
    margin-top: 80px;
  }
  .img3{
    display: flex;
  }
  .textname3{
    margin-top: 100px;
    margin-left: 130px;
    
  }
  .textage3{
    margin-top: 145px;
    margin-left: -85px;

  }
  .textgender3{
    margin-top: 185px;
    margin-left: -90px;

  }
  .textbut3{
    margin-top: -13px;
    font-size: 22px;
  }
  .button4{
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
      margin-left: -80px;
      margin-top: 230px;
    }
    .button4{
      background-color: #C07E00; 
      color: rgb(255, 255, 255); 
      border: 2px solid #C07E00;
    }

    .button4:hover {
      background-color: #744c04;
      color: #ffffff;
    }
    
    
      
  </style>