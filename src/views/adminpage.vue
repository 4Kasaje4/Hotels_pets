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
      <div v-if="this.$route.params.role != 'admin'" >
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


  <div style="display: flex; margin-top: 6% ; justify-content: center;">
    <div style="display: flex; justify-content: space-around;width: 40%; font-size: larger;">
        <div @click="show_ps_data()" style="cursor: pointer;"><p>ข้อมูลพี่เลี้ยง</p></div>
        <div @click="show_user_data()" style="cursor: pointer;"><p>ข้อมูลผู้ใช้งาน</p></div>
        <div @click="show_admin_data()" style="cursor: pointer;"><p>ข้อมูลแอดมิน</p></div>
    </div>
  </div>

  <div style="display: flex; justify-content: center; margin-bottom: 5%;  margin-top: -6%; margin-left: -3%;">
      <div style="width: 60%;">
        <div @click="backward()" id="backward">
          <img src="../img/arrow-left.png" style="margin: 8% 0 0 8%;"  width="50dvw"  alt="">
        </div>
      </div>
    </div>

    <div v-if="empty == true">
        <div style="display: flex; height: 24vh; justify-content: center; font-size: 30px; margin-top: 10%;">
            <p>แสดงข้อมูล</p>
        </div>
    </div>
    
    <div v-if="ps_data != null">
        <div v-for="(value, index) in ps_data" :key="index">
            <div v-if="value['pet_sitter_pic'] == null">
                <div style="display: flex; justify-content: center; margin: 3%;">
                  <div style="width: 50%; background-color: rgba(255, 249, 232, 1); border-radius: 15px; display: flex;">
                      <div style="margin: 5% 0 4% 10%;">
                          <img src="../img/Profile_Unknow.png" width="150dvw" alt="">
                    </div>
                    <div style="width: 100%; justify-content: center;  align-items: center; display: flex;">
                      <div style="font-size: x-large; width: 60%;">
                        <p>พี่เลี้ยงคนที่ {{ index + 1 }}</p>
                        <p>ชื่อ : {{ value['firstname'] }}</p>
                        <p>นามสกุล : {{ value['lastname'] }}</p>
                        <p>เบอร์โทร : {{ value['phone'] }}</p>
                            <div @click="go_detail_ps(this.$route.params.role, this.$route.params.id, 'ps', value['ps_id'])" style="display: flex; justify-content: center; margin-top: 5%;"><p id="detail">รายละเอียด</p></div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div v-if="value['pet_sitter_pic'] != null">
            <div style="display: flex; justify-content: center; margin: 3%;">
              <div style="width: 50%; background-color: rgba(255, 249, 232, 1); border-radius: 15px; display: flex;">
                  <div style="margin: 5% 0 4% 10%;">
                      <img :src="path + value['pet_sitter_pic']" style="border-radius: 50%;" height="145vh" width="150dvw" alt="">
                </div>
                <div style="width: 100%; justify-content: center;  align-items: center; display: flex;">
                  <div style="font-size: x-large; width: 60%;">
                    <p>คนที่ {{ index + 1 }}</p>
                    <p>ชื่อ : {{ value['firstname'] }}</p>
                    <p>นามสกุล : {{ value['lastname'] }}</p>
                    <p>เบอร์โทร : {{ value['phone'] }}</p>
                    <div @click="go_detail_ps(this.$route.params.role, this.$route.params.id, 'ps', value['ps_id'])" style="display: flex; justify-content: center; margin-top: 5%;"><p id="detail">รายละเอียด</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div v-if="user_data != null">
        <div v-for="(value, index) in user_data" :key="index">
            <div v-if="value['user_pic'] == null">
                <div style="display: flex; justify-content: center; margin: 3%;">
                  <div style="width: 50%; background-color: rgba(255, 249, 232, 1); border-radius: 15px; display: flex;">
                      <div style="margin: 5% 0 4% 10%;">
                          <img src="../img/Profile_Unknow.png" width="150dvw" alt="">
                    </div>
                    <div style="width: 100%; justify-content: center;  align-items: center; display: flex;">
                      <div style="font-size: x-large; width: 60%;">
                        <p>ผู้ใช้คนที่ {{ index + 1 }}</p>
                        <p>ชื่อ : {{ value['firstname'] }}</p>
                        <p>นามสกุล : {{ value['lastname'] }}</p>
                        <p>เบอร์โทร : {{ value['phone'] }}</p>
                        <div @click="go_detail_user(this.$route.params.role, this.$route.params.id, 'user', value['user_id'])" style="display: flex; justify-content: center; margin-top: 5%;"><p id="detail">รายละเอียด</p></div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div v-if="value['user_pic'] != null">
            <div style="display: flex; justify-content: center; margin: 3%;">
              <div style="width: 50%; background-color: rgba(255, 249, 232, 1); border-radius: 15px; display: flex;">
                  <div style="margin: 5% 0 4% 10%;">
                      <img :src="path + value['user_pic']" style="border-radius: 50%;" height="145vh" width="150dvw" alt="">
                </div>
                <div style="width: 100%; justify-content: center;  align-items: center; display: flex;">
                  <div style="font-size: x-large; width: 60%;">
                    <p>ผู้ใช้คนที่ {{ index + 1 }}</p>
                    <p>ชื่อ : {{ value['firstname'] }}</p>
                    <p>นามสกุล : {{ value['lastname'] }}</p>
                    <p>เบอร์โทร : {{ value['phone'] }}</p>
                    <div @click="go_detail_user(this.$route.params.role, this.$route.params.id, 'user', value['user_id'])" style="display: flex; justify-content: center; margin-top: 5%;"><p id="detail">รายละเอียด</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

    <div v-if="admin_data != null">
        <div v-for="(value, index) in admin_data" :key="index">
            <div v-if="value['admin_pic'] == null">
                <div style="display: flex; justify-content: center; margin: 3%;">
                  <div style="width: 50%; background-color: rgba(255, 249, 232, 1); border-radius: 15px; display: flex;">
                      <div style="margin: 5% 0 4% 10%;">
                          <img src="../img/Profile_Unknow.png" width="150dvw" alt="">
                    </div>
                    <div style="width: 100%; justify-content: center;  align-items: center; display: flex;">
                      <div style="font-size: x-large; width: 60%;">
                        <p>แอดมินคนที่ {{ index + 1 }}</p>
                        <p>ชื่อ : {{ value['firstname'] }}</p>
                        <p>นามสกุล : {{ value['lastname'] }}</p>
                        <p>เบอร์โทร : {{ value['phone'] }}</p>
                        <div @click="go_detail_admin(this.$route.params.role, this.$route.params.id, 'admin', value['admin_id'])" style="display: flex; justify-content: center; margin-top: 5%;"><p id="detail">รายละเอียด</p></div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div v-if="value['admin_pic'] != null">
            <div style="display: flex; justify-content: center; margin: 3%;">
              <div style="width: 50%; background-color: rgba(255, 249, 232, 1); border-radius: 15px; display: flex;">
                  <div style="margin: 5% 0 4% 10%;">
                      <img :src="path + value['admin_pic']" style="border-radius: 50%;" height="145vh" width="150dvw" alt="">
                </div>
                <div style="width: 100%; justify-content: center;  align-items: center; display: flex;">
                  <div style="font-size: x-large; width: 60%;">
                    <p>แอดมินคนที่ {{ index + 1 }}</p>
                    <p>ชื่อ : {{ value['firstname'] }}</p>
                    <p>นามสกุล : {{ value['lastname'] }}</p>
                    <p>เบอร์โทร : {{ value['phone'] }}</p>
                    <div @click="go_detail_admin(this.$route.params.role, this.$route.params.id, 'admin', value['admin_id'])" style="display: flex; justify-content: center; margin-top: 5%;"><p id="detail">รายละเอียด</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>


   <!-- <div>
 
     <div class="texthead">
       <h2 class="text1"><a href="" class="aa">ข้อมูลพี่เลี้ยง</a></h2>
       <h2 class="text1"><a href="" class="aa">ข้อมูลผู้ใช้งาน</a></h2>
       <h2 class="text1"><a href="" class="aa">ข้อมูลเเอดมิน</a></h2>
     </div>
     <img src="../img/arrow-left.png" alt="" width="40px" style="margin-left:90px;">
 
    <div class="BIGBOX">
       <div class="box">
        <img class="imgbox" src="../img/user.png" alt="" width="200px">
        <h1 class="text2">ผู้ดูเเลคนที่ 1</h1>
        <h2 class="text3">ชื่อ : kasaje </h2>
        <h2 class="text4">นามสกุล : kasaju</h2>
        <h2 class="text5">เบอร์ : 099-999-9995</h2>
        <button class="button22"> <p class="textbut">รายละเอียด</p> </button>
       </div>
    </div>
 
    <div class="BIGBOX">
       <div class="box">
        <img class="imgbox" src="../img/user.png" alt="" width="200px">
        <h1 class="text2">ผู้ดูเเลคนที่ 2</h1>
        <h2 class="text3">ชื่อ : โบวี่สุดหล่อ  </h2>
        <h2 class="text4">นามสกุล : ครับผม</h2>
        <h2 class="text5">เบอร์ : 099-999-9998</h2>
        <button class="button22"> <p class="textbut">รายละเอียด</p> </button>
       </div>
    </div>
 
   </div> -->
   <FooterView />
 </template>
 
 <script>
  import newnav from '@/components/newnav.vue'
     export default {
     components: { newnav },
     name:'adminpageView',
     data(){
        return {
            profile_pic : null,
            path : "/API/profile_pic/",
            count : false,
            select_service : null,
            ps_data : null,
            user_data : null,
            admin_data : null,
            empty : true,
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
          }else{
            if(this.$route.params.role != 'admin'){
            this.$router.push({name : 'Homepage', params : {role : this.$route.params.role, id : this.$route.params.id, login_id : this.$route.params.login_id}});
          }
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
          <p>หน้าหลัก</p>
        </div>
        <div onclick="window.location.href='http://localhost:5173/package/${this.$route.params.role}/${this.$route.params.id}/${this.$route.params.login_id}'" style="cursor: pointer; background:rgba(255, 237, 191, 1); height: 50px; display: flex; padding-left: 5%; align-items: center; margin-bottom: 1%;"> 
          <img src="/src/img/package_nav.png" width="40px" style="margin-right: 5%;" alt="">
          <p>แพ็กเกจ / โปรโมชัน</p>
        </div>
        <div onclick="window.location.href='http://localhost:5173/about/${this.$route.params.role}/${this.$route.params.id}/${this.$route.params.login_id}'" style="cursor: pointer; background:rgba(255, 237, 191, 1); height: 50px; display: flex; padding-left: 5%; align-items: center; margin-bottom: 1%;"> 
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
    }
  },
  async select_value(){
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
  },
  async backward(){
          this.$router.go(-1)
        },
    async show_ps_data(){
        const response = await fetch('http://localhost:3000/all_pet_sitter');
        const ps_data = await response.json();
        this.ps_data = ps_data;
        this.user_data = null
        this.admin_data =null
        this.empty = false
    },
    async show_user_data(){
        const response = await fetch('http://localhost:3000/all_user');
        const user_data = await response.json();
        this.user_data = user_data;
        this.ps_data = null
        this.admin_data =null
        this.empty = false
    },
    async show_admin_data(){
        const response = await fetch('http://localhost:3000/all_admin');
        const admin_data = await response.json();
        this.admin_data = admin_data;
        this.ps_data = null
        this.user_data = null
        this.empty = false
    },
    async go_detail_ps(my_role, my_id, your_role, your_id ){
        this.$router.push({name : 'profile_for_ps', params : {role : my_role, id : my_id, login_id : this.$route.params.login_id, your_role : your_role, your_id : your_id}});
    },
    async go_detail_user(my_role, my_id, your_role, your_id ){
        this.$router.push({name : 'profile_for_user', params : {role : my_role, id : my_id, login_id : this.$route.params.login_id, your_role : your_role, your_id : your_id}});
    },
    async go_detail_admin(my_role, my_id, your_role, your_id ){
        this.$router.push({name : 'profile_for_admin', params : {role : my_role, id : my_id, login_id : this.$route.params.login_id, your_role : your_role, your_id : your_id}});
    }

    
    },
     mounted(){
        this.check_login();
        this.show_pic();
    }
    
   }
 </script>
 
 <style>
#detail{
    text-align: center;
    width: 200px;
    height: 35px;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    border: 2px solid white;
    background-color: #D8AB53;
}
#detail:hover{
    background-color: #C07E00;
}

#backward{
    margin-left: -10%;
  cursor: pointer;
  background-color: #D9D9D9; 
  height: 60px;   
  width: 60px; 
  border-radius: 50%;
}

#backward:hover{
  transition-duration: 0.4s;
  background-color: #D8AB53;
}
     .texthead{
       display: flex;
       justify-content: center;
     }
     .text1{
       margin-left: 50px;
       margin-top: 50px;
     }
 /* visited link */
   a:visited {
   color: #979797;
   }
 /* mouse over link */
   a:hover {
   color: #AE8A44;
   } 
 /* selected link */
   a:active {
   color: #AE8A44;
   }
   .aa{
     text-decoration: none;
   }
   .BIGBOX{
     display: flex;
     justify-content: center ;
   }
   .box{
     width: 800px;
     height: 350px;
     background-color: #FFF8E4;
     border-radius: 20px;
     margin-top: 50px;
   }
   .imgbox{
     margin-top: 70px;
     margin-left: 100px;
   }
   .text2{
     position: absolute;
     margin-top: -200px;
     margin-left: 400px;
   }
   .text3{
     position: absolute;
     margin-top: -150px;
     margin-left: 400px;
     color: #575757;
   }
   .text4{
     position: absolute;
     margin-top: -115px;
     margin-left: 400px;
     color: #575757;
   }
   .text5{
     position: absolute;
     margin-top: -80px;
     margin-left: 400px;
     color: #575757;
   }
   .button22{
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
       margin-left: 120px;
       position: absolute;
       margin-top: 245px;
     }
     .button22 {
       background-color: #ffffff; 
       color: #C07E00; 
       border: 2px solid #C07E00;
     }
     .button22:hover {
       background-color: #C07E00;
       color: #ffffff;
     }
     .textbut{
       text-align: center;
       margin-top: -10px;
       font-size: 20px;
     }
   
 </style>