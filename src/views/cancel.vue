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
    <div ref="alert_cancle">
    </div>
    <div>
      <div style="display: flex; justify-content: center; margin-top: 2%">
        <div
          style="
            width: 60%;
            display: flex;
            font-size: x-large;
            align-items: center;
          "
        >
          <div @click="backward()" id="backward">
            <img
              src="../img/arrow-left.png"
              style="margin: 8% 0 0 8%"
              width="50dvw"
              alt=""
            />
          </div>
          <p style="margin-left: 5%">ประวัติการจอง</p>
        </div>
      </div>

      <div
        v-for="(pet_data, index) in pet_data"
        :key="index"
        style="margin-top: 5%"
      >
        <div style="display: flex; justify-content: center">
          <div
            style="
              background-color: #f6f6f6;
              width: 55%;
              height: 39dvh;
              border-radius: 10px;
              display: flex;
            "
          >
            <div style="display: flex; flex-direction: column; margin-left: 2%">
              <img
                src="../img/logo.png"
                width="60%"
                style="margin-left: 3%"
                alt=""
              />
              <img
                src="../img/dog2.jpg"
                width="300dvw"
                style="border-radius: 25px; margin-left: 3%"
                alt=""
              />
            </div>
            <div style="width: 100%; margin-left: -5%">
              <p
                style="
                  text-align: end;
                  font-size: x-large;
                  margin: 5% 5% 0 0;
                  color: #c07e00;
                "
              >
                น้อง {{ pet_data["name"] }}
              </p>
              <p style="font-size: x-large; margin-top: 5%"> 
                บริการฝากเลี้ยงสัตว์เลี้ยง 
              </p>
              <div style="font-size: large; margin-top: 3%">
                <p>เป็นบริการรับฝากเลี้ยงสัตว์</p>
                <p>ทุกช่วงเวลา นานเท่าที่ต้องการ</p>
                <p>มีบ้านสำหรับน้องหมาน้องเเมว</p>
                <p>พร้อมของใช้สำหรับสัตว์เลี้ยง</p>
              </div>
              <button @click="details_pet(pet_data['pet_id'])" class="button2"><p class="textbut">รายละเอียด</p></button>
              <button @click="cancle(pet_data['pet_id'], pet_data['ps_id'])" class="button3">
                <p class="textbut3">ยกเลิก</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterView />
  </div>
</template>

<script>
import newnav from "@/components/newnav.vue";
export default {
  components: { newnav },
  name: "cancelView",
  data() {
    return {
      pet_data: [],
      pet_id: "",
      path : "/API/profile_pic/",
      count : false,
      select_service : null,
      profile_pic : null,
    };
  },
  methods: {
    async check_login() {
      let login_id = this.$route.params.login_id;
      const data = {
        login_id: login_id,
      };
      const response = await fetch("http://localhost:3000/check_login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response_data = await response.json();
      if (response_data["isLogin"] == false) {
        this.$router.push("/login");
      }
    },
    async backward() {
      this.$router.go(-1);
    },
    async loaddata() {
      const data = {
        user_id: this.$route.params.id,
      };
      const response = await fetch("http://localhost:3000/pets_of_user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const response_data = await response.json();
      if (response_data["user"] == 0) {
        alert("ไม่พบข้อมูลประวัติการจอง");
        this.$router.go(-1);
      } else {
        this.pet_data = response_data["result"];
      }
    },
    async cancle(input_pet_id, input_ps_id) {
      this.$refs.alert_cancle.innerHTML = `      <div class="centered-container" style="  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);">
        <div
          style="
            width: 600px;
            height: 300px;
            background-color: #d4d4d4;
            align-items: center;
            opacity: 95%;
            box-shadow: 2px 5px 10px rgb(238, 238, 238);
            border-radius: 25px;
            display: flex;
            justify-content: center;
            margin: auto;
          "
        >
          <div>
            <p style="font-size: xx-large; margin-bottom: 20%">
              ยืนยันที่จะยกเลิกการจอง
            </p>
            <button 
              style="
                background-color: #c02607;
                border-radius: 10px;
                width: 200px;
                margin-right: 20px;
                height: 50px;
                border: none;
                color: white;
                padding: 16px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 20px;
                margin: 2px 2px;
                transition-duration: 0.4s;
                cursor: pointer;
              "
              onclick="window.location.reload()">
              ยกเลิก
            </button>
            <button
              style="
                background-color: #0a7d23;
                border-radius: 10px;
                width: 200px;
                margin-right: 20px;
                height: 50px;
                border: none;
                color: white;
                padding: 16px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 20px;
                margin: 4px 2px;
                cursor: pointer;
                width: 200px;
                margin-left: 20px;
                height: 50px;
              "
              onclick="window.location.href = 'http://localhost:5173/hide_cancle_pet/${this.$route.params.role}/${this.$route.params.id}/${this.$route.params.login_id}/${input_pet_id}/${input_ps_id}'">
              ยืนยัน
            </button>
          </div>
        </div>
      </div>`;
    },
    async details_pet(input_pet_id){
      this.$router.push({name: 'booking', params: {role: this.$route.params.role, id: this.$route.params.id, login_id: this.$route.params.login_id, pet_id : input_pet_id}})
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
  mounted() {
    this.check_login();
    this.loaddata();
    this.show_pic();
  },
};
</script>

<style scoped>
#backward {
  cursor: pointer;
  background-color: #d9d9d9;
  height: 60px;
  margin-top: 1%;
  width: 60px;
  border-radius: 50%;
}

#backward:hover {
  transition-duration: 0.4s;
  background-color: #d8ab53;
}
.arrow {
  margin-left: 100px;
  margin-top: 50px;
}
.texthead {
  margin-left: 200px;
  margin-top: -42px;
}
.bigbox {
  display: flex;
  justify-content: center;
}
.box {
  width: 850px;
  height: 330px;
  background-color: #f6f6f6;
  border-radius: 10px;
  margin-top: 50px;
}
.imglogo {
  margin-top: 5px;
  margin-left: 50px;
}
.reserve {
  font-size: 20px;
  position: absolute;
  margin-top: -50px;
  color: #c07e00;
  display: flex;
  margin-left: 47%;
}
.img {
  position: absolute;
  margin-top: 70px;
  margin-left: -275px;
  border-radius: 25px;
}
.textser {
  margin-left: 470px;
}
.text {
  margin-left: 470px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #797979;
}
.text1 {
  margin-left: 470px;
  margin-top: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #797979;
}
.textbut {
  text-align: center;
  margin-top: -12px;
  font-size: 19px;
}
.button2 {
  width: 160px;
  height: 9px;
  background-color: #cf8920;
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
  margin-top: 20px;
}
.button2 {
  background-color: #c07e00;
  color: rgb(255, 255, 255);
  border: 2px solid #c07e00;
}
.button2:hover {
  background-color: #8c6311;
  border: 2px solid #8c6311;
  color: #ffffff;
}
.text {
  margin-left: 470px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #797979;
}
.text1 {
  margin-left: 470px;
  margin-top: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #797979;
}
.textbut3 {
  text-align: center;
  margin-top: -12px;
  font-size: 19px;
}
.button3 {
  width: 140px;
  height: 9px;
  background-color: #cf8920;
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
  margin-left: 30px;
  margin-top: 20px;
}
.button3 {
  background-color: #ffffff;
  color: #c07e00;
  border: 2px solid #c07e00;
}
.button3:hover {
  background-color: #8c6311;
  border: 2px solid #8c6311;
  color: #ffffff;
}
</style>
