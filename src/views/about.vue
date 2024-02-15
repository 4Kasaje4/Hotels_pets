<template>

<div ref="show_menu">
  </div>
  <div style="height: 100px; background: linear-gradient(180deg, #fdde91 0%, #f9f2d4 100%); padding: 0 2% 0 2%; display: flex; justify-content: space-between; align-items: center;">
    <div style="margin-left: -1%;">
      <img src="../img/logo.png" width="40%"  alt="">
    </div>
    <div style="display: flex; justify-content: space-around; width: 30%; align-items: center; margin-right: -10px;">
      <div v-if="this.$route.params.role == 'user'" >
        <select @change="select_value" v-model="select_service" style=" background-color: #f7d275 ; width: 150px; height: 30px;font-size: 15px;padding-left: 5px;border: 1px solid #f7d275;border-radius: 5px;" >
          <option disabled value="null">เลือกบริการ</option>
          <option value="deposit">บริการฝากเลี้ยง</option>
          <option value="activities">บริการกิจกรรมสัตว์</option>
          <option value="grooming">บริการตัดขน</option>
          <option value="bathing">บริการอาบน้ำ</option>
        </select>
      </div>
      <div v-if="this.$route.params.role == 'admin'"></div><div></div><div></div><div></div><div></div><div></div>
      <div v-if="this.$route.params.role != 'admin'">
        <div @click="go_chat()" style="cursor: pointer; border-radius: 50%; width: 55px; height: 60px; background-color:#fdde91; display: flex; align-items: center; padding-left: 7px;">
        <img src="../img/image 2.png"  alt="">
      </div>
      </div>
      <div v-if="this.$route.params.role != 'admin'">
        <div @click="go_caretaker()" style="cursor: pointer; border-radius: 50%; width: 60px; height: 60px; background-color:#fdde91; display: flex; align-items: center; ">
          <img src="../img/image 3.png"   alt="">
        </div>
      </div>
      <div v-if="this.$route.params.role == 'admin'">
        <div @click="this.$router.push({name : 'adminpageView', params : {role : this.$route.params.role, id : this.$route.params.id, login_id : this.$route.params.login_id}});" style="cursor: pointer; border-radius: 50%; width: 60px; height: 60px; background-color:#fdde91; display: flex; align-items: center; ">
          <img src="../img/image 3.png"   alt="">
        </div>
      </div>
      <div @click="go_profile()" style="cursor: pointer; border-radius: 50%; width: 80px; height: 80px; background-color:#fdde91; display: flex; justify-content: center; align-items: center; ">
        <div v-if="profile_pic == null">
          <img src="/src/img/Profile_Unknow.png" width="60px" height="60px" alt="" style="margin-top: 10%; border-radius: 50%;">
        </div>
        <div v-if="profile_pic != null" style=" border-radius: 50%; width: 80px; height: 80px; background-color:#fdde91; display: flex; justify-content: center; align-items: center; ">
          <img :src="path + profile_pic" width="60px" height="60px" alt="" style="border-radius: 50%" >
        </div>
        
      </div>
    </div>
  </div>


  <div>
    <div style="display: flex; justify-content: center; margin-top: 2%;">
      <div style="width: 80%;">
        <div @click="backward()" id="backward">
          <img src="../img/arrow-left.png" style="margin: 8% 0 0 8%;"  width="50dvw"  alt="">
        </div>
      </div>
    </div>
    <h1 class="headtext">เกี่ยวกับเรา</h1>

    <div class="bigbox">
      <div class="box1">
        <h2 class="text">วัตถุประสงค์</h2>
        <img class="cat" src="../img/catttttttttttttt.jpg" alt="">
        <h3 class="text1">เพื่อให้บริการแก่เจ้าของสัตว์เลี้ยงเว็บเรามีบริการรับฝากน้องหมาและน้องแมว</h3>
        <h3 class="text2">โรงแรมมุ่งเน้นให้บริการและสร้างสภาพแวดล้อมที่เหมาะสมและปลอดภัยสำหรับ</h3>  
        <h3 class="text3">การฝากหมาและแมวทั้งในเรื่องอาหาร การออกกำลังกาย และการดูแลสุขภาพ</h3> 
        <h3 class="text4">เว็บไซต์นี้มีเป้าหมายที่จะให้บริการที่มีมาตรฐานในการดูแลหมาและแมว</h3>
        <h3 class="text5">มีการให้บริการอย่างใส่ใจและเอาใจใส่ต่อน้องหมาและน้องแมวอย่างที่เหมาะสม </h3>
        <h3 class="text6">เว็บนี้นี้มีวัตถุประสงค์ที่จะสร้างประสบการณ์ที่ดีและที่ทำให้เจ้าของสัตว์เลี้ยงมี <br> ความพึงพอใจที่สุดในการใช้บริการ</h3>
      </div>
    </div>


    <div class="bigbox2">
      <div class="box2">
        <img class="imgpla" src="../img/วาฬ.jpg" alt="">
      </div>
    </div>
    <h3 class="textid">65022331</h3>
    <h3 class="textname">นางสาวกัญญารัตน์ บุญธิมา</h3>

    <div class="bigbox3">
      <div class="box2">
        <img class="imgbo" src="../img/โบ.jpg" alt="">

      </div>
    </div>
    <h3 class="textid1">65022375</h3>
    <h3 class="textname1">นายเกษมสันต์ แก้วจีน</h3>

    <div class="bigbox4">
      <div class="box2">
        <img class="imgpech" src="../img/เพชร.jpg" alt="">
      </div>
    </div>
    <h3 class="textid2">65022421</h3>
    <h3 class="textname2">นายชินพัฒน์ ทรัพย์สำเริง</h3>

    <div class="bigbox5">
      <div class="box2">
        <img class="imggui" src="../img/ต้าร์.jpg" alt="">
      </div>
    </div>
    <h3 class="textid3">65022915</h3>
    <h3 class="textname3">นางสาวสุมิตตา กิตติชัยฤทธิ์</h3>
    
    <div class="boxxxx"></div>


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
      profile_pic : null,
      path : "/API/profile_pic/",
      count : false,
      select_service : null
    }
  },  
    methods: {
      async backward() {
          this.$router.go(-1);
        },
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
          }else{
            
          }
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
    }
    if(this.$route.params.role == 'user'){
      this.profile_pic = response_data['result']['user_pic'];
    }
    if(this.$route.params.role == 'admin'){
      this.profile_pic = response_data['result']['admin_pic'];
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
    #backward{
  cursor: pointer;
  background-color: #D9D9D9; 
  height: 60px;  
  margin-top: 1%; 
  width: 60px; 
  border-radius: 50%;
  margin-left: 2%;
}

#backward:hover{
  transition-duration: 0.4s;
  background-color: #D8AB53;
}
  .imgpla{
    position: absolute;
    width: 230px;
    margin-left: 15px;
    margin-top: 10px;
    border-radius: 20px;
    height: 260px;
  }
  .imgbo{
    position: absolute;
    width: 230px;
    margin-left: 15px;
    margin-top: 10px;
    border-radius: 20px;
    height: 260px;
  }
  .imgpech{
    position: absolute;
    width: 230px;
    margin-left: 15px;
    margin-top: 10px;
    border-radius: 20px;
    height: 260px;
  }
  .imggui{
    position: absolute;
    width: 230px;
    margin-left: 15px;
    margin-top: 10px;
    border-radius: 20px;
    height: 260px;         
  }
  .text1{
    position: absolute;
    margin-top: -280px;
    margin-left: 10px;
  }
  .text2{
    position: absolute;
    margin-top: -250px;
    margin-left: 10px;
  }
  .text3{
    position: absolute;
    margin-top: -220px;
    margin-left: 10px;
  } 
  .text4{
    position: absolute;
    margin-top: -190px;
    margin-left: 10px;
  }
  .text5{
    position: absolute;
    margin-top: -160px;
    margin-left: 10px;
  }
  .text6{
    position: absolute;
    margin-top: -130px;
    margin-left: 10px;
  }
  .arrow{
    width: 50px;
    margin-top: 20px;
    margin-left: 110px;
  }
  .boxxxx{
    width: 500px;
    height: 20px;
    margin-top: 150px;
  }
.headtext{
  text-align: center;
  margin-top: 30px;
  color: #765D2E;
}
.bigbox{
  display: flex;
  justify-content: center;
}
.box1{
  width: 1150px;
  height: 400px;
  background-color: #FFEDBF;
  margin-top: 50px;
}
.text{
  margin-left: 240px;
  margin-top: 20px;
  font-size: 30px;
  position: absolute;
}
.cat{
  width: 450px;
  border-radius: 10px;
  margin-left: 660px;
  margin-top: 50px;
}
.bigbox2{
  display: flex;
}
.box2{
  width: 260px;
  height: 280px;
  background-color: #FFEDBF;
  margin-top: 50px;
  border-radius: 20px;
  margin-left: 180px;
}
.bigbox3{
  margin-top: -330px;
  margin-left: 300px;
  position: absolute;
}

.bigbox4{
  margin-top: -330px;
  margin-left: 600px;
  position: absolute;
}

.bigbox5{
  margin-top: -330px;
  margin-left: 900px;
  position: absolute;
}
.textid{
  margin-top: 10px;
  margin-left: 270px;
  position: absolute;
}
.textname{
  margin-left: 200px;
  margin-top: 40px;
  position: absolute;
}

.textid1{
  margin-top: 10px;
  margin-left: 570px;
  position: absolute;
}
.textname1{
  margin-left: 520px;
  margin-top: 40px;
  position: absolute;
}

.textid2{
  margin-top: 10px;
  margin-left: 870px;
  position: absolute;
}
.textname2{
  margin-left: 800px;
  margin-top: 40px;
  position: absolute;
}

.textid3{
  margin-top: 10px;
  margin-left: 1175px;
  position: absolute;
}
.textname3{
  margin-left: 1100px;
  margin-top: 40px;
  position: absolute;
}
</style>