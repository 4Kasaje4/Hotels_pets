<template>
  <div ref="show_menu">
  </div>
  <div style="height: 100px; background: linear-gradient(180deg, #fdde91 0%, #f9f2d4 100%); padding: 0 2% 0 2%; display: flex; justify-content: space-between; align-items: center;">
    <div @click="show_menu(this.count)" style="cursor: pointer;">
      <div style="border: 3.5px solid black; margin: 6%; border-radius: 20px; width: 2vw;"></div>
      <div style="border: 3.5px solid black; margin: 6%; border-radius: 20px; width: 2vw;"></div>
      <div style="border: 3.5px solid black; margin: 6%; border-radius: 20px; width: 2vw;"></div>
    </div>
    <div style="display: flex; justify-content: space-around; width: 30%; align-items: center; margin-right: -10px;">
      <div >
        <select @change="select_value" v-model="select_service" style=" background-color: #f7d275 ; width: 150px; height: 30px;font-size: 15px;padding-left: 5px;border: 1px solid #f7d275;border-radius: 5px;" >
          <option disabled value="null">เลือกบริการ</option>
          <option value="deposit">บริการฝากเลี้ยง</option>
          <option value="activities">บริการกิจกรรมสัตว์</option>
          <option value="grooming">บริการตัดขน</option>
          <option value="bathing">บริการอาบน้ำ</option>
        </select>
      </div>
      <div @click="go_chat()" style="cursor: pointer; border-radius: 50%; width: 55px; height: 60px; background-color:#fdde91; display: flex; align-items: center; padding-left: 7px;">
        <img src="../img/image 2.png"  alt="">
      </div>
      <div @click="go_caretaker()" style="cursor: pointer; border-radius: 50%; width: 60px; height: 60px; background-color:#fdde91; display: flex; align-items: center; ">
        <img src="../img/image 3.png"   alt="">
      </div>
      <div @click="go_profile()" style="cursor: pointer; border-radius: 50%; width: 80px; height: 80px; background-color:#fdde91; display: flex; justify-content: center; align-items: center; ">
        <div v-if="profile_pic == null">
          <img src="../img/Profile_Unknow.png" width="60px" height="60px" alt="" style="margin-top: 10%; border-radius: 50%;">
        </div>
        <div v-if="profile_pic != null" style=" border-radius: 50%; width: 80px; height: 80px; background-color:#fdde91; display: flex; justify-content: center; align-items: center; ">
          <img :src="path + profile_pic" width="60px" height="60px" alt="" style="border-radius: 50%" >
        </div>
        
      </div>
    </div>
  </div>






    <div>
        <h1 class="texthead">การจองบริการฝากเลี้ยงสัตว์เลี้ยง</h1>
      <div class="bigbox">
        <div class="box">
            <h2 class="textser">กรอกข้อมูลการจองสัตว์เลี้ยง</h2>
            <h2 class="texthead1">รายละเอียดสัตว์เลี้ยง</h2>
            <div class="bigboxtype">
                <p class="texttype">เป็นสัตว์เลี้ยงประเภทอะไร ?</p>
                <p class="texttype1">สายพันธ์ุอะไร ?</p>
                <select v-model="type" class="boxtype-select" style="padding-left: 10px;" >
                    <option value="null">กรุณาเลือก</option>
                    <option value="cat">แมว</option>
                    <option value="dog">หมา</option>
                </select>
                <input v-model="breed" type="text" class="boxtype" style="font-size: medium; padding-left: 10px; margin-left: 3.5%;">
                <p class="texttype">สัตว์เลี้ยงของคุณน้ำหนักเท่าไหร่ (กก.)?</p>
                <p class="texttype1">ชื่อเล่นสัตว์เลี้ยง</p>
                <input v-model="weight" type="number" class="boxtype" style="font-size: medium; padding-left: 10px;">
                <input v-model="nickname" type="text" class="boxtype" style="font-size: medium; padding-left: 10px; margin-left: 3.5%;">
            </div>  
            <h2 class="textreserve">รายละเอียดเพิ่มเติม</h2>      
            <div class="bigboxtype">
                <p class="texttype">โปรดเลือกวันที่จะเริ่มให้บริการ</p>
                <p class="texttype1">เวลา</p>
                <input v-model="start_date" type="date" class="boxtype" style="font-size: medium; padding-left: 10px;">
                <input v-model="time" type="time" class="boxtype" style="font-size: medium; padding-left: 10px; margin-left: 3.5%;">
                <p class="texttype">คุณต้องการให้รับสัตว์เลี้ยงถึงที่หรือไม่ ?</p>
                <p class="texttype1">อาหารที่เเพ้</p>
                <select v-model="pickup" class="boxtype-select" style="padding-left: 10px;" >
                    <option value="null">กรุณาเลือก</option>
                    <option value="yes">ใช่</option>
                    <option value="no">ไม่ใช่</option>
                </select>
                <input v-model="allergies" type="text" class="boxtype" style="font-size: medium; padding-left: 10px; margin-left: 3.5%;">
                <p class="texttype2">ข้อมูลเพิ่มเติมที่พี่เลี้ยงควรรู้เกี่ยวกับสัตว์เลี้ยงของคุณ </p> <p class="colortext">(ไม่จำเป็น)</p>
                <input v-model="other" type="text" class="boxtype2" style="font-size: medium; padding-left: 10px;">
                
            </div>   
            <button @click="backward()" class="button2"> <h4 class="textbut">ยกเลิก</h4> </button>
            <button @click="submit()" class="button3"> <h4 class="textbut1">ยืนยัน</h4> </button>

        </div>
      </div>
    </div>

  </template>

  <script>
  import newnav from '@/components/newnav.vue'
import { setTransitionHooks } from 'vue';
  export default {
  components: { newnav },
  name:'confirmationpage',
  data(){
    return {
        type : null,
        breed : null,
        weight : null,
        nickname : null,
        start_date : null,
        time : null,
        pickup : null,
        allergies : null,
        other : null,
        path : "/API/profile_pic/",
      count : false,
      select_service : null,
      profile_pic : null,
    }
  },
  methods : {
    async check_login(){
          let login_id = this.$route.params.login_id
          const data = {
            login_id : login_id
          }
          const response = await fetch('http://localhost:3000/check_login', {
            method : 'POST',
            headers : {
              'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
          });
          const response_data = await response.json();
          if(response_data['isLogin'] == false){
            this.$router.push('/login'); 
          }
        },
    async backward(){
        this.$router.go(-1)
    },
    async submit(){
        if(this.type == null || this.breed == null || this.weight == null || this.nickname == null || this.start_date == null || this.time == null || this.pickup == null || this.allergies == null ){
            alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        }else{
            const data = {
                user_id : this.$route.params.id,
                type : this.type,
                breed : this.breed,
                weight : this.weight,
                nickname : this.nickname,
                start_date : this.start_date,
                time : this.time,
                pickup : this.pickup,
                allergies : this.allergies,
                other : this.other
            }

            const response = await fetch('http://localhost:3000/add_pet_to_hotel',{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(data)
            });
            const response_data = await response.json();
            console.log(response_data);
            if(response_data['status'] === true){
                alert('บันทึกข้อมูลเรียบร้อย');
                this.$router.push({name : 'Homepage', params : {role : this.$route.params.role, id : this.$route.params.id, login_id : this.$route.params.login_id}});
            }else{
                alert('ไม่มีพี่เลี้ยงว่างให้บริการขณะนี้ โปรดทำรายการอีกครั้งในภายหลัง');
            }
        }
    },
    async go_profile(){
    const role = this.$route.params.role;
    const id = this.$route.params.id;
    this.$router.push({name: 'profile', params: {role : role, id : id, login_id : this.$route.params.login_id}});
  },
  async go_caretaker(){
    this.$router.push({name : 'caretaker', params : {role : this.$route.params.role, id : this$route.params.id, login_id : this.$route.params.login_id}});
  },  
  async go_to_service(){
    const role = this.$route.params.role;
    const id = this.$route.params.id;
    this.$router.push({name: 'servicepage', params: {role : role, id : id, login_id : this.$route.params.login_id}});
  },
  go_chat(){
    const role = this.$route.params.role;
    const id = this.$route.params.id;
    this.$router.push({name: 'chat', params: {role : role, id : id, login_id : this.$route.params.login_id}});
  },
  async show_pic(){
    const data = {
      role : this.$route.params.role,
      id : this.$route.params.id
    }
    const response = await fetch('http://localhost:3000/show_pic',{
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(data)
    });
    const response_data = await response.json();
    if(this.$route.params.role == 'ps'){
      this.profile_pic = response_data['result']['pet_sitter_pic'];
    }if(this.$route.params.role == 'user'){
      this.profile_pic = response_data['result']['user_pic'];
    }    if(this.$route.params.role == 'admin'){
      this.profile_pic = response_data['result']['admin_pic'];
    }
  },
  async show_menu(count){

    if(count == true){
      this.count = false;
      this.$refs.show_menu.innerHTML = '';
    }else{
      this.count =true;
      console.log(this.$route.params.role, this.$route.params.id, this.$route.params.login_id);
      this.$refs.show_menu.innerHTML = `<div style="margin-top: 100px; position: absolute; width: 30%;border-radius: 0 25px 25px 0; background:#f9f2d4 ; height: 90dvh;">
      <div style="font-size: x-large; padding-top: 10%;">
        <div onclick="window.location.href='http://localhost:5173/Homepage/${this.$route.params.role}/${this.$route.params.id}/${this.$route.params.login_id}'"  style="cursor: pointer; background:rgba(255, 237, 191, 1); height: 50px; display: flex; padding-left: 5%; align-items: center; margin-bottom: 1%;"> 
          <img src="/src/img/home_nav.png" width="40px" style="margin-right: 5%;" alt="">
          <p>หน้าแรก</p>
        </div>
        <div onclick="window.location.href='http://localhost:5173/package/${this.$route.params.role}/${this.$route.params.id}/${this.$route.params.login_id}'" style="cursor: pointer; background:rgba(255, 237, 191, 1); height: 50px; display: flex; padding-left: 5%; align-items: center; margin-bottom: 1%;"> 
          <img src="/src/img/package_nav.png" width="40px" style="margin-right: 5%;" alt="">
          <p>แพ็กเกจ / โปรโมชัน</p>
        </div>
        <div onclick="window.location.href='http://localhost:5173/about/${this.$route.params.role}/${this.$route.params.id}/${this.$route.params.login_id}'" style="cursor: pointer; background:rgba(255, 237, 191, 1); height: 50px; display: flex; padding-left: 5%; align-items: center; margin-bottom: 1%;"> 
          <img src="/src/img/about_nav.png" width="40px" style="margin-right: 5%;" alt="">
          <p>เกี่ยวกับเรา</p>
        </div>
        <div  onclick="window.location.href='http://localhost:5173/logout/${this.$route.params.login_id}'" style="cursor: pointer; background:rgba(255, 237, 191, 1); height: 50px; display: flex; padding-left: 5%; align-items: center; margin-top: 10%;"> 
          <img src="/src/img/logout_nav.png" width="40px" style="margin-right: 5%;" alt="">
          <p>ออกจากระบบ</p>
        </div>
        <div style="margin-top: 60%; display: flex; justify-content: center; align-items: end;">
          <img src="/src/img/logo.png" width="300px" alt="">
        </div>
      </div>
    </div>`;
    }
  },
  async select_value(){
    console.log(this.select_service);
    if(this.select_service == null){}
    else if(this.select_service == "deposit"){
      this.$router.push({name : 'confirmationpage', params : {role : this.$route.params.role, id : this.$route.params.id, login_id : this.$route.params.login_id}});
    }else if(this.select_service == "activities"){
      this.$router.push({name : 'newconpage', params : {role : this.$route.params.role, id : this.$route.params.id, login_id : this.$route.params.login_id}});
    }else if(this.select_service == "grooming"){
      this.$router.push({name : 'cutcon', params : {role : this.$route.params.role, id : this.$route.params.id, login_id : this.$route.params.login_id}});
    }else if(this.select_service == "bathing"){
      this.$router.push({name : 'takeacon', params : {role : this.$route.params.role, id : this.$route.params.id, login_id : this.$route.params.login_id}});
    }
  }
  },
  mounted(){
    this.check_login();
    this.show_pic();
  }
   
  }
  </script>

  <style scoped>
    .bigbox{
        display: flex;
        justify-content: center;
    }
      .box{
        width: 1000px;
        height: 950px;
        background-color: #FFF9E8;
        border-radius: 20px;
        margin-top: 50px;
      }
      .texthead{
       text-align: center;
        margin-top: 50px;
        color: #C07E00;
        font-size: 30px;
      }
      .textser{
        margin-left: 100px;
        margin-top: 60px;
        font-size: 25px;
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
      .boxtype-select{
        width: 365px;
        height: 35px;
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
      .button2{
      width: 169px;
      height: 43px;
      background-color: #000000;
      border: none;
      color: #C07E00;
      padding: 16px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      transition-duration: 0.4s;
      cursor: pointer;
      border-radius: 10px;
      margin-left: 250px;
      position: absolute;
      margin-top: 50px;
    }
    .button2 {
      background-color: #ffffff; 
      color: #C07E00; 
      border: 2px solid #C07E00;
    }
    .button2:hover {
      background-color: #C07E00;
      color: #ffffff;
    }
    .textbut{
      text-align: center;
      margin-top: -13px;
      font-size: 25px;
    }
    .button3{
      width: 169px;
      height: 43px;
      background-color: #000000;
      border: none;
      color: #C07E00;
      padding: 16px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      transition-duration: 0.4s;
      cursor: pointer;
      border-radius: 10px;
      margin-left: 500px;
      position: absolute;
      margin-top: 50px;
    }
    .button3 {
      background-color: #C07E00; 
      color: #ffffff; 
      border: 2px solid #C07E00;
    }
    .button3:hover {
      background-color: #ffffff;
      color: #C07E00;
    }
    .textbut1{
      text-align: center;
      margin-top: -13px;
      font-size: 25px;
    }
  </style>