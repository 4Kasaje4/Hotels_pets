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
        <div ref="show_pic" style=" display: flex; justify-content: center; margin: 2%;">
         <img :src="path_pic" width="100dvw" style="border-radius: 50%;" height="100vh" alt="">
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
            <input type="text"   style="border-radius: 10px; width: 42%; height: 4vh; margin-top: 1%; padding-left: 10px;" :placeholder="profile_data['firstname']" v-model="firstname">
            <input type="text"   style="border-radius: 10px; width: 42%; height: 4vh; margin-top: 1%; padding-left: 10px;" :placeholder="profile_data['lastname']" v-model="lastname">
          </div>
          <div style="font-size: large;  width: 60%; margin-top: 1%;">
            <p>เบอร์โทรศัพท์</p>
            <div style="width: 100%; ">
            <input  type="text" style="border-radius: 10px; width: 97%; height: 4vh; margin-top: 1%; padding-left: 10px;" :placeholder="profile_data['phone']" v-model="phone">
          </div>
          </div>
          <div style="font-size: large;  width: 60%; margin-top: 1%;">
            <p>อีเมล</p>
            <div style="width: 100%; ">
            <input  type="text" style="border-radius: 10px; width: 97%; height: 4vh; margin-top: 1%; padding-left: 10px;" :placeholder="profile_data['email']" v-model="email" >
          </div>
          </div>
          <div style="font-size: large;  width: 60%; margin-top: 1%;">
            <p>ที่อยู่</p>
            <div style="width: 100%; ">
            <input  type="text" style="border-radius: 10px; width: 97%; height: 4vh; margin-top: 1%; padding-left: 10px;" :placeholder="profile_data['address']" v-model="address">
          </div>
          </div>
          <div style="font-size: large;  width: 60%; margin-top: 1%;">
            <p>รูปโปรไฟล์</p>
            <div style="width: 100%; ">
            <input  type="file" style="width: 97%; height: 4vh; margin-top: 1%;" @change="fileChange">
          </div>
          </div>
          <button @click="cancel()" class="button2"> <h4 class="textbut">ประวัติการจอง</h4></button>
        </div>
        <div v-if="role == 'user' || role == 'admin'" style="display: flex; justify-content: center; margin: 3%;"> 
          <p id="delete" @click="Delete()">ลบบัญชีผู้ใช้</p>
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
        address : "",
        profile_pic : null,
        path_pic : "",
        column : "",
        role : ""
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
      async fileChange(event){
        this.profile_pic = event.target.files[0];
      }  
        ,
      async backward(){
          this.$router.go(-1)
        },
      async profile(){
        const role = this.$route.params.role;
        const id = this.$route.params.id;
        this.role = this.$route.params.role;
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
        if(role == 'ps'){
          this.column = "pet_sitter_pic"
          if(this.profile_data[this.column] == null){
            this.path_pic = '/src/img/Profile_Unknow.png'
          }
          else {
            this.profile_pic = this.profile_data[this.column]
            this.path_pic = `/API/profile_pic/${this.profile_pic}`
          }
        }
        else if(role == 'user'){
          this.column = "user_pic"
          if(this.profile_data[this.column] == null){
            this.path_pic = '/src/img/Profile_Unknow.png'
          }
          else {
            this.profile_pic = this.profile_data[this.column]
            this.path_pic = `/API/profile_pic/${this.profile_pic}`
          }
        }
        else if(role == 'admin'){
          this.column = "admin_pic"
          if(this.profile_data[this.column] == null){
            this.path_pic = '/src/img/Profile_Unknow.png'
          }
          else {
            this.profile_pic = this.profile_data[this.column]
            this.path_pic = `/API/profile_pic/${this.profile_pic}`
          }
        }

        },
      async edit_profile(){
        const from_data = new FormData();
        if(this.firstname == ""){
          this.firstname = await this.profile_data['firstname'];
        }
        if(this.lastname == ""){
          this.lastname = await this.profile_data['lastname'];
        }
        if(this.phone == ""){
          this.phone = await this.profile_data['phone'];
        }
        if(this.email == ""){
          this.email = await this.profile_data['email'];
        }
        if(this.address == ""){
          this.address = await this.profile_data['address'];
        }

        from_data.append('role', this.$route.params.role);
        from_data.append('id', this.$route.params.id);
        from_data.append('firstname', this.firstname);
        from_data.append('lastname', this.lastname);
        from_data.append('phone', this.phone);
        from_data.append('email', this.email);
        from_data.append('address', this.address);
        from_data.append('profile_pic', this.profile_pic);
        const response = await fetch('http://localhost:3000/updateprofile',{
          method: 'POST',
          body: from_data,
        });
        const response_data = await response.json();
        if(response_data['status'] == true){
          alert('Update profile successfully')
          this.$router.go(0);
        }
      },
      async cancel(){
        this.$router.push({name: 'cancel', params : {role : this.$route.params.role, id : this.$route.params.id, login_id : this.$route.params.login_id}});
      },
      async Delete(){
        if(confirm('ยืนยันที่จะลบบัญชีหรือไม่') == true){
          this.delete_account();
        }
      },  
      async delete_account(){
        const data = {
          role : this.$route.params.role,
          id : this.$route.params.id
        }
        const response = await fetch('http://localhost:3000/delete_account',{
          method : 'DELETE',
          headers : {'Content-Type' : 'application/json'},
          body : JSON.stringify(data)
        });
        const response_data = await response.json();
        console.log(response_data);
        if(response_data['status'] == true){
          alert('ลบบัญชีเรียบร้อย');
          this.$router.push('/login');
        }
        if(response_data['message'] == "not delete"){
          alert('ไม่สามารถลบบัญชีได้ เนื่องจากคุณเป็นหัวหน้าแอดมิน');
          this.$router.go(0);
        }else{
          console.log(response_data);
        }
      }
    },
    mounted(){
      this.check_login();
      this.profile();
    }
  }
  

  </script>
  
  <style scoped>
#delete:hover{
  color: #ff450d;
  cursor: pointer;
  transition-duration: 0.1s;
}

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