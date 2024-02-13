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
        <div></div><div></div><div></div><div></div>

        <div @click="this.$router.push({name : 'adminpageView', params : {role : this.$route.params.role, id : this.$route.params.id, login_id : this.$route.params.login_id}});" style="cursor: pointer; border-radius: 50%; width: 60px; height: 60px; background-color:#fdde91; display: flex; align-items: center; ">
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
  
  
  
      <div style="display: flex; justify-content: center; margin-top: 2%;">
        <div style="width: 80%;">
          <div @click="backward()" id="backward">
            <img src="../img/arrow-left.png" style="margin: 8% 0 0 8%;"  width="50dvw"  alt="">
          </div>
        </div>
      </div>
      <div style="margin-top: 2%;">
        <div class="bigbox">
          <div class="box">
              <h2 class="textser">ข้อมูลการจองสัตว์เลี้ยง</h2>
              <h2 class="texthead1">รายละเอียดสัตว์เลี้ยง</h2>
              <div class="bigboxtype">
                  <p class="texttype">เป็นสัตว์เลี้ยงประเภทอะไร ?</p>
                  <p class="texttype1">สายพันธ์ุอะไร ?</p>
                 <input type="text" class="boxtype" style="font-size: medium; padding-left: 10px;" :value="type" disabled>
                  <input type="text" class="boxtype" style="font-size: medium; padding-left: 10px; margin-left: 3.5%;" :value="details['breed']" disabled>
                  <p class="texttype">สัตว์เลี้ยงของคุณน้ำหนักเท่าไหร่ (กก.)?</p>
                  <p class="texttype1">ชื่อเล่นสัตว์เลี้ยง</p>
                  <input  type="text" class="boxtype" style="font-size: medium; padding-left: 10px;" :value="details['weight']" disabled>
                  <input type="text" class="boxtype" style="font-size: medium; padding-left: 10px; margin-left: 3.5%;" :value="details['name']" disabled >
              </div>  
              <h2 class="textreserve">รายละเอียดเพิ่มเติม</h2>      
              <div class="bigboxtype">
                  <p class="texttype">โปรดเลือกวันที่จะเริ่มให้บริการ</p>
                  <p class="texttype1">เวลา</p>
                  <input  type="text" class="boxtype" style="font-size: medium; padding-left: 10px;" :value="details['checkin']" disabled>
                  <input  type="text" class="boxtype" style="font-size: medium; padding-left: 10px; margin-left: 3.5%;" :value="details['time_in']" disabled>
                  <p class="texttype">คุณต้องการให้รับสัตว์เลี้ยงถึงที่หรือไม่ ?</p>
                  <p class="texttype1">อาหารที่เเพ้</p>
                  <input type="text" class="boxtype" style="font-size: medium; padding-left: 10px;" :value="pickup" disabled >
                  <input type="text" class="boxtype" style="font-size: medium; padding-left: 10px; margin-left: 3.5%;" :value="details['foodallergies']" disabled>
                  <p class="texttype2">ข้อมูลเพิ่มเติมที่พี่เลี้ยงควรรู้เกี่ยวกับสัตว์เลี้ยงของคุณ </p> <p class="colortext">(ไม่จำเป็น)</p>
                  <input  type="text" class="boxtype2" style="font-size: medium; padding-left: 10px; " :value="details['description']" disabled >
              </div>  
              <p class="texttype">ชื่อเจ้าของสัตว์เลี้ยง</p>
                <input  type="text"  style=" width: 750px ;height: 30px; background-color: #ffffff; border: 2px solid #000000; border-radius: 4px; margin-left: 100px; margin-top: 10px; font-size: medium; padding-left: 10px; " :value="owner_pet_name" disabled > 


          </div>
        </div>
      </div>
      <FooterView />
    </template>
  
    <script>
    import newnav from '@/components/newnav.vue'
      export default {
      components: { newnav },
      name:'details_ps_adminView',
      data(){
          return {
              details : [],
              type : "",
              pickup : "",
              path : "/API/profile_pic/",
              count : false,
              select_service : null,
              profile_pic : null,
              owner_pet_name : null
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
              
            }
          },
          async backward() {
            this.$router.go(-1);
          },
          async loaddata(){
              const data = {
                  ps_id : this.$route.params.your_id
              }
              const response = await fetch('http://localhost:3000/details_pet_ps',{
                  method : 'POST',
                  headers : {'Content-Type' : 'application/json'},
                  body : JSON.stringify(data)
              }); 
              const response_data = await response.json();
              console.log(response_data);
              if(response_data['have_pet'] == false){
                alert('คุณยังไม่มีสัตว์เลี้ยงที่ต้องดูแล');
                this.$router.go(-1);
              }
              this.details = response_data['result'];
              if(response_data['type'] == 'cat'){
                  this.type = "แมว"
              }else{
                  this.type = "หมา"
              }
              if(response_data['pickup'] == "yes"){
                  this.pickup = "ใช่"
              }else{
                  this.pickup = "ไม่"
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
      if(this.$route.params.role == 'ps'){
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
        <div onclick="window.location.href='http://localhost:5173/about'" style="cursor: pointer; background:rgba(255, 237, 191, 1); height: 50px; display: flex; padding-left: 5%; align-items: center; margin-bottom: 1%;"> 
          <img src="/src/img/about_nav.png" width="40px" style="margin-right: 5%;" alt="">
          <p>เกี่ยวกับเรา</p>
        </div>
        <div onclick="window.location.href='http://localhost:5173/booking_for_ps/${this.$route.params.role}/${this.$route.params.id}/${this.$route.params.login_id}'" style="cursor: pointer; background:rgba(255, 237, 191, 1); height: 50px; display: flex; padding-left: 5%; align-items: center; margin-bottom: 1%;"> 
          <img src="/src/img/check_status.png" width="40px" style="margin-right: 5%;" alt="">
          <p>ยืนยันสถานะการเลี้ยง</p>
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
    async submit(){
        const data = {
            ps_id : this.$route.params.id
        }
        const response = await fetch('http://localhost:3000/submit_pet_sitter',{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(data)
        })
        const response_data = await response.json();
        if(response_data['status'] == true){
            alert('ยืนยันเรียบร้อย');
            this.$router.go(-1);
        }
    },
    async show_name_with_ps(){
        const data = {
            id : this.$route.params.your_id
        }
        const response = await fetch('http://localhost:3000/show_name_user_with_pet_sitter',{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(data)
        });
        const response_data = await response.json();
        this.owner_pet_name = response_data['result']['firstname'] + " " + response_data['result']['lastname']
    }
      },
      mounted(){
          this.check_login();
          this.loaddata();
          this.show_pic();
          this.show_name_with_ps();
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
          height: 820px;
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

        .button2{
      width: 200px;
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
    </style>