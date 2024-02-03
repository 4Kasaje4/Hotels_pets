<template>
    <newnav/>
    <div style="display: flex; justify-content: center; margin-top: 2%;">
      <div style="width: 60%;">
        <div @click="backward()" id="backward">
          <img src="../img/arrow-left.png" style="margin: 8% 0 0 8%;"  width="50dvw"  alt="">
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: center;">
      <div style="width: 35%; background-color: rgba(255, 249, 232, 1); border-radius: 10px; margin: 0 0 5%;">
        <div style="display: flex; justify-content: center; margin: 2%;">
          <img src="../img/Profile_Unknow.png" width="100dvw" alt="">
        </div>
        <div style="display: flex; justify-content: center;">
          <div style=" width: 60%; display: flex; justify-content: end;">
            <div id="edit" @click="edit_profile()" >
              <p  style="color:white">แก้ไข</p>
            </div>
          </div>
        </div>
        <div style="display: flex; justify-content: center; align-items: center; flex-direction: column; margin: 3% 0 0 0 ;">
          <div style="font-size: large; display: flex; justify-content: space-between; width: 60%;">
            <div style="text-align: left; width: 100%; ">
              <p>ชื่อ</p>
            </div>
            <div style="text-align: left; width: 100%; margin-left: 7%;">
              <p>นามสกุล</p>
            </div>
          </div>
          <div style="width: 60%; display: flex; justify-content: space-between;">
            <input type="text" disabled  style="border-radius: 10px; width: 42%; height: 4vh; margin-top: 1%; padding-left: 10px;" :placeholder="profile_data['firstname']" v-model="firstname">
            <input type="text" disabled  style="border-radius: 10px; width: 42%; height: 4vh; margin-top: 1%; padding-left: 10px;" :placeholder="profile_data['lastname']" v-model="firstname">
          </div>
          <div style="font-size: large;  width: 60%; margin-top: 1%;">
            <p>เบอร์โทรศัพท์</p>
            <div style="width: 100%; ">
            <input disabled type="text" style="border-radius: 10px; width: 97%; height: 4vh; margin-top: 1%; padding-left: 10px;" :placeholder="profile_data['phone']" v-model="phone">
          </div>
          </div>
          <div style="font-size: large;  width: 60%; margin-top: 1%;">
            <p>อีเมล</p>
            <div style="width: 100%; ">
            <input disabled type="text" style="border-radius: 10px; width: 97%; height: 4vh; margin-top: 1%; padding-left: 10px;" :placeholder="profile_data['email']">
          </div>
          </div>
          <div style="font-size: large;  width: 60%; margin-top: 1%;">
            <p>ที่อยู่</p>
            <div style="width: 100%; ">
            <input disabled type="text" style="border-radius: 10px; width: 97%; height: 4vh; margin-top: 1%; padding-left: 10px;" :placeholder="profile_data['address']" v-model="address">
          </div>
          </div>
          <button @click="edit_profile()" class="button2"> <h4 class="textbut">ประวัติการจอง</h4> </button>
        </div>
      </div>
    </div>


    <!-- <div>
      <div class="bigbox">
        <div class="box">
            <img class="profile" src="../img/ลุงพล.jpg" alt="">

            <div class="reset"><p class="textre" >แก้ไข</p></div>

            <p class="textpassword">ชื่อ</p>
            <div class="boxpassword">
            <p class="textplspassword">ลุงพลหล่อสุดใจ </p>
          </div>

          <p class="textaddress">ที่อยู่</p>
            <div class="boxaddress">
            <p class="textplsaddress">999/9 หน้ามหาวิทยาลัยพะเยา ต.เเม่กา อ.เมือง จ.พะเยา 56000/9 </p>
          </div>

          <p class="textnumber">เบอร์โทรศัพท์</p>
            <div class="boxnumber">
            <p class="textplsnumber">099-999-9999</p>
          </div>

          <p class="textemail">อีเมล</p>
            <div class="boxemail">
            <p class="textplsemail">CATDOGHOTEL999@GMAIL.COM</p>
          </div>

          <button class="button2"> <h4 class="textbut">ประวัติการจอง</h4> </button>

          <p class="textlogin">ลบบัญชีผู้ใช้</p>

        </div>
      </div>
    </div>
    <FooterView />

  </template>
  
  <script>
  import newnav from '@/components/newnav.vue'
    export default {
    components: { newnav },
    name:'profileView',
    data(){
      return {
        profile_data : [],
        firstname : "",
        lastname : "",
        phone : "",
        email : "",
        address : ""

      }
    },
    methods:{
      async check_login(){
          const response = await fetch('http://localhost:3000/check_login');
          const response_data = await response.json();
          if(response_data['isLogin'] == 0){
            this.$router.push('/login'); 
          }
        },
      async backward(){
          this.$router.go(-1)
        },
      async profile(){
        const data = {
          role : this.$route.params.role,
          id : this.$route.params.id
        }
        const response = await fetch('http://localhost:3000/profile',{
          method: 'POST',
          headers:{
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify(data)
        });
        const response_data = await response.json();
        this.profile_data = await response_data;
        },
      async edit_profile(){
        console.log(this.name);
      }
    },
    mounted(){
      this.check_login();
      this.profile();
    }
  }
  

  </script>
  
  <style scoped>
#edit{
  background-color:rgba(217, 181, 113, 1);
   width: fit-content; 
   border-radius: 10px; 
   padding: 0 2% 0 2%; 
   cursor: pointer;
}
#edit:hover{
  transition-duration: 0.4s;
  background-color: #8c6311;
      color: #ffffff;
}

  #backward{
  cursor: pointer;
  background-color: #D9D9D9; 
  height: 60px;  
  margin-top: 1%; 
  width: 60px; 
  border-radius: 50%;
}

#backward:hover{
  transition-duration: 0.4s;
  background-color: #D8AB53;
}
    .textre{
        margin-top: -2px;
        margin-left: 10px;
        color: #ffffff;
    }
      .bigbox{
        display: flex;
        justify-content: center;
      }
      .box{
        margin-top: 100px;
        width: 567px;
        height: 678px;
        border-radius: 5px;
        background: linear-gradient(0deg, #FFF9E8 0%, #FFF9E8 100%), #FFF;
      }
      .profile{
        width: 100px;
        height: 100px;
        border-radius: 100px;
        margin-top: 50px;
        margin-left: 230px;
      }
      .textpassword{
      margin-top: 45px;
      margin-left: 110px;
      position: absolute;   
      font-size: 16px;
    }
    .textplspassword{
      margin-left: 15px;
      margin-top: 5px;
      color: #727171a9;
      position: absolute;
      font-size: 15px;
    }
      
    .boxpassword{
      background-color: #ffffff;
      width: 367px;
      height: 32px;
      border: 2px solid #000000;
      padding: 1px;
      margin: 20px;
      border-radius: 4px;
      margin-top: 75px;
      margin-left: 100px;
      position: absolute;
    }
    .textaddress{
      margin-top: 125px;
      margin-left: 110px;
      position: absolute;   
      font-size: 16px;
    }
    .textplsaddress{
      margin-left: 15px;
      margin-top: 8px;
      color: #727171a9;
      position: absolute;
      font-size: 12.5px;
    }
      
    .boxaddress{
      background-color: #ffffff;
      width: 367px;
      height: 32px;
      border: 2px solid #000000;
      padding: 1px;
      margin: 20px;
      border-radius: 4px;
      margin-top: 150px;
      margin-left: 100px;
      position: absolute;
    }
    .textnumber{
      margin-top: 198px;
      margin-left: 110px;
      position: absolute;   
      font-size: 16px;
    }
    .textplsnumber{
      margin-left: 15px;
      margin-top: 8px;
      color: #727171a9;
      position: absolute;
      font-size: 12.5px;
    }
      
    .boxnumber{
      background-color: #ffffff;
      width: 367px;
      height: 32px;
      border: 2px solid #000000;
      padding: 1px;
      margin: 20px;
      border-radius: 4px;
      margin-top: 223px;
      margin-left: 100px;
      position: absolute;
    }
    .reset{
        width: 55px;
        height: 22px;
        background-color: #D9B571;
        border-radius: 10px;
        margin-left: 410px;
        position: absolute;
        margin-top: 45px;
    }
    .textemail{
      margin-top: 270px;
      margin-left: 110px;
      position: absolute;   
      font-size: 16px;
    }
    .textplsemail{
      margin-left: 15px;
      margin-top: 8px;
      color: #727171a9;
      position: absolute;
      font-size: 12.5px;
    }
    .boxemail{
      background-color: #ffffff;
      width: 367px;
      height: 32px;
      border: 2px solid #000000;
      padding: 1px;
      margin: 20px;
      border-radius: 4px;
      margin-top: 295px;
      margin-left: 100px;
      position: absolute;
    }
    .button2{
      width: 169px;
      height: 43px;
      background-color: #000000;
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
      margin: 5% 0 3% 0 ;


    }
    .button2 {
      background-color: #D8AB53; 
      color: rgb(255, 255, 255); 
      border: 2px solid #D8AB53;
    }

    .button2:hover {
      background-color: #8c6311;
      color: #ffffff;
    }
    .textbut{
      text-align: center;
      margin-top: -7px;
      font-size: 15px;
    }
    .textlogin{
        position: absolute;
        margin-top: 480px;
        margin-left: 256px;
        color: #0000008f;
        font-weight: bold;
    } 
  </style>