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
      <div>
        <h1 class="texthead"> ข้อมูลพี่เลี้ยง</h1>
        <div ref="alert_no_pet_sitter" style="text-align: center; font-size: xx-large;"></div>

        <div v-for="(pet_sitter, index) in array_pet_sitter" :key="index" >
          <div v-if="pet_sitter['pet_sitter_pic'] == null">
            <div style="display: flex; justify-content: center; margin: 3%;">
              <div style="width: 50%; background-color: rgba(255, 249, 232, 1); border-radius: 15px; display: flex;">
                  <div style="margin: 5% 0 4% 10%;">
                      <img src="../img/Profile_Unknow.png" width="150dvw" alt="">
                </div>
                <div style="width: 100%; justify-content: center;  align-items: center; display: flex;">
                  <div style="font-size: x-large; width: 60%;">
                    <p>พี่เลี้ยงคนที่ {{ index + 1 }}</p>
                    <p>ชื่อ : {{ pet_sitter['firstname'] }}</p>
                    <p>นามสกุล : {{ pet_sitter['lastname'] }}</p>
                    <p>เบอร์โทร : {{ pet_sitter['phone'] }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="pet_sitter['pet_sitter_pic'] != null">
            <div style="display: flex; justify-content: center; margin: 3%;">
              <div style="width: 50%; background-color: rgba(255, 249, 232, 1); border-radius: 15px; display: flex;">
                  <div style="margin: 5% 0 4% 10%;">
                      <img :src="path + pet_sitter['pet_sitter_pic']" style="border-radius: 50%;" height="145vh" width="150dvw" alt="">
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
    <FooterView />
  </template>
  
  <script>
    import newnav from '@/components/newnav.vue'
    export default {
    components: { newnav },
    name:'caretakerView',
    data(){
      return {
        array_pet_sitter: [],
        path : '/API/profile_pic/',
        profile_pic : null,
      count : false,
      select_service : null
      }
    },
    methods: {
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
      async show_pet_sitter(){
        const response = await fetch('http://localhost:3000/all_pet_sitter');
        const response_data = await response.json();
        this.array_pet_sitter = response_data
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
      if(this.$route.params.role == 'admin'){
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
        <div onclick="window.location.href='http://localhost:5173/register_pet_sitter/${this.$route.params.role}/${this.$route.params.id}/${this.$route.params.login_id}'" style="cursor: pointer; background:rgba(255, 237, 191, 1); height: 50px; display: flex; padding-left: 5%; align-items: center; margin-bottom: 1%;"> 
          <img src="/src/img/add_account_pic.png" width="40px" style="margin-right: 5%;" alt="">
          <p>เพิ่มบัญชีพี่เลี้ยง</p>
        </div>
        <div onclick="window.location.href='http://localhost:5173/register_admin/${this.$route.params.role}/${this.$route.params.id}/${this.$route.params.login_id}'" style="cursor: pointer; background:rgba(255, 237, 191, 1); height: 50px; display: flex; padding-left: 5%; align-items: center; margin-bottom: 1%;"> 
          <img src="/src/img/add_account_pic.png" width="40px" style="margin-right: 5%;" alt="">
          <p>เพิ่มบัญชีแอดมิน</p>
        </div>
        <div  onclick="window.location.href='http://localhost:5173/logout/${this.$route.params.login_id}'" style="cursor: pointer; background:rgba(255, 237, 191, 1); height: 50px; display: flex; padding-left: 5%; align-items: center; margin-top: 10%;"> 
          <img src="/src/img/logout_nav.png" width="40px" style="margin-right: 5%;" alt="">
          <p>ออกจากระบบ</p>
        </div>
        <div style="margin-top: 35%; display: flex; justify-content: center; align-items: end;">
          <img src="/src/img/logo.png" width="300px" alt="">
        </div>
      </div>
    </div>`;
      }
      if(this.$route.params.role != 'admin'){
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
      this.show_pet_sitter()
      this.show_pic();
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