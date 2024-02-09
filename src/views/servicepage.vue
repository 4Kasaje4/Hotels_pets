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
    <h1 class="texthead">บริการสำหรับสัตว์เลี้ยงของคุณ</h1>
    <div class="bigbox">
      <div class="box">
        <img class="imgdog" src="../img/dog2.jpg" alt="">
        <h1 class="textser">บริการฝากเลี้ยงสัตว์เลี้ยง</h1>
        <p class="textservice1">เป็นบริการรับฝากเลี้ยงสัตว์ </p>
           <p class="textservice1">ทุกช่วงเวลา นานเท่าที่ต้องการ </p>
           <p class="textservice1"> มีบ้านสำหรับน้องหมาน้องเเมว </p>
           <p class="textservice1">พร้อมของใช้สำหรับสัตว์เลี้ยง</p>
           <button @click="confirmationpage()" class="button2"> <h4 class="textbut">จอง</h4> </button>
      </div>
    </div>

    <div class="bigbox">
      <div class="box">
        <img class="imgdog" src="../img/หมาว่ายน้ำ.webp" alt="">
        <h1 class="textser">กิจกรรมสำหรับสัตว์เลี้ยง</h1>
        <p class="textservice1">เป็นบริการเกี่ยวกับให้สัตว์เลี้ยง </p>
           <p class="textservice1">ได้ออกกำลังกาย ทำให้น้องหมา </p>
           <p class="textservice1"> น้องเเมวของคุณผ่อนคลาย </p>
           <button @click="newconpage()" class="button2"> <h4 class="textbut">จอง</h4> </button>
      </div>
    </div>

    <div class="bigbox">
      <div class="box">
        <img class="imgdog" src="../img/แมวตัดขน.jpg" alt="">
        <h1 class="textser">บริการตัดขนสัตว์เลี้ยง</h1>
        <p class="textservice1">เป็นบริการรับฝากเลี้ยงสัตว์ </p>
           <p class="textservice1">ทุกช่วงเวลา นานเท่าที่ต้องการ </p>
           <p class="textservice1"> มีบ้านสำหรับน้องหมาน้องเเมว </p>
           <p class="textservice1">พร้อมของใช้สำหรับสัตว์เลี้ยง</p>
           <button @click="cutcon()" class="button2"> <h4 class="textbut">จอง</h4> </button>
      </div>
    </div>

    <div class="bigbox">
      <div class="box">
        <img class="imgdog" src="../img/หมาอาบน้ำ.jpg" alt="">
        <h1 class="textser">บริการอาบน้ำสัตว์เลี้ยง</h1>
        <p class="textservice1">เป็นบริการรับอาบน้ำสัตว์เลี้ยง</p>
           <p class="textservice1">พร้อมบริการเเบบเบามือต่อ</p>
           <p class="textservice1"> สัตว์เลี้ยง ทำให้น้องหมาน้อง </p>
           <p class="textservice1">เเมวสะอาดเเละหอมสดชื่น</p>
           <button @click="takeacon()" class="button2"> <h4 class="textbut">จอง</h4> </button>
      </div>
    </div>

  </div>
  <FooterView />
</template>

<script>
  import newnav from '@/components/newnav.vue'
  export default {
  components: { newnav },
  name:'caretakerView',
  data(){
    return {
      path : "/API/profile_pic/",
      count : false,
      select_service : null,
      profile_pic : null,
    }
  },
  methods:{
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
    async confirmationpage(){
      this.$router.push({name : 'confirmationpage', params : {role : this.$route.params.role, id : this.$route.params.id, login_id : this.$route.params.login_id}})
    },
    async newconpage(){
      this.$router.push('/newconpage')
    },
    async cutcon(){
      this.$router.push({name : 'cutcon', params : {role : this.$route.params.role, id : this.$route.params.id, login_id : this.$route.params.login_id}})
    },
    async takeacon(){
      this.$router.push({name : 'takeacon', params : {role : this.$route.params.role, id : this.$route.params.id, login_id : this.$route.params.login_id}})
    },
    async go_profile(){
    const role = this.$route.params.role;
    const id = this.$route.params.id;
    this.$router.push({name: 'profile', params: {role : role, id : id, login_id : this.$route.params.login_id}});
  },
  async go_caretaker(){
    this.$router.push({name : 'caretaker', params : {role : this.$route.params.role, id : this.$route.params.id, login_id : this.$route.params.login_id}});
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
    }else{
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
        <div onclick="window.location.href='http://localhost:5173/package'" style="cursor: pointer; background:rgba(255, 237, 191, 1); height: 50px; display: flex; padding-left: 5%; align-items: center; margin-bottom: 1%;"> 
          <img src="/src/img/package_nav.png" width="40px" style="margin-right: 5%;" alt="">
          <p>แพ็กเกจ / โปรโมชัน</p>
        </div>
        <div onclick="window.location.href='http://localhost:5173/about'" style="cursor: pointer; background:rgba(255, 237, 191, 1); height: 50px; display: flex; padding-left: 5%; align-items: center; margin-bottom: 1%;"> 
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
.texthead{
  text-align: center;
  margin-top: 50px;
  background: linear-gradient( 50deg, #765D2E, #eba729);
  background-size: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bigbox{
  display: flex;
  justify-content: center;
}
.box{
  width: 950px;
  height: 400px;
  border-radius: 10px;
  background-color: #F6F6F6;
  margin-top: 50px;
}
.imgdog{
  width: 350px;
  height: 300px;
  margin-left: 50px;
  margin-top: 50px;
  border-radius: 25px;
  display: flex;
}
.textser{
  margin-left: 450px;
  margin-top: -280px;
}
.textservice{
  margin-left: 450px;
  margin-top: 20px;
  font-weight: bold;
  color: #797979;
  font-size: 20px;
}
.textservice1{
  margin-left: 450px;
  margin-top: 3px;
  font-weight: bold;
  color: #797979;
  font-size: 20px;
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
      margin-left: 500px;
      position: absolute;
      margin-top: 30px;
    }
    .button2 {
      background-color: #C07E00; 
      color: rgb(255, 255, 255); 
      border: 2px solid #C07E00;
    }

    .button2:hover {
      background-color: #875a06;
      color: #ffffff;
    }
    .textbut{
      text-align: center;
      margin-top: -13px;
      font-size: 25px;
    }
  
  
    
</style>