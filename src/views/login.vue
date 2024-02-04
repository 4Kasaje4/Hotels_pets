  <template>
    <NavView /> 
      <div>
        <!-- <div class="bigbox">
          <div class="box">
            <h1 class="textlogin">เข้าสู่ระบบ</h1>

            <h3 class="textemail">อีเมล</h3>
            <div class="boxemail">
              <p class="textplsemail">กรุณากรอกอีเมล . . . </p>
            </div>

            <h3 class="textpassword">รหัสผ่าน</h3>
            <div class="boxpassword">
              <p class="textplspassword">กรุณากรอกรหัสผ่าน . . .  
                <img class="imgpassword" src="../img/image 5.png" alt="">
              </p>
            </div>

            <p class="textforget">ลืมรหัสผ่าน</p>

            <button class="button2"> <p class="textbut">สมัครสมาชิก</p> </button>
            <button class="button3"><p class="textbut1">เข้าสู่ระบบ</p></button>

            <div class="line"> </div> <p class="textline">หรือ</p> <div class="line1"></div>

            <img src="../img/line.png" alt="" width="65px" style="margin-left:100px; margin-top:30px;">
            <img src="../img/facebook.png" alt="" width="65px"  style="margin-left:30px;">
            <img src="../img/twitter.png" alt="" width="65px" style="margin-left:30px;">
            <img src="../img/search.png" alt="" width="65px" style="margin-left:30px;">

          </div>


        </div> -->
          <div style="display: flex; justify-content: center;">
            <div style="border-radius: 10px; width: 35%;  margin-top: 3%; background-color:rgba(255, 249, 232, 1); padding-top: 3%; padding-bottom: 1%;">
          <p style="text-align: center;   font-size: xx-large;">เข้าสู่ระบบ</p>
          <div style="width: 80%; margin: auto; padding-left: 5%;  margin-top: 5%; padding-bottom: 3%;">
              <p style="font-size: larger;">ชื่อผู้ใช้</p>
              <input v-model="username"   type="text" placeholder="กรอกชื่อผู้ใช้..." style="width: 90%; height: 4vh; margin-top: 1%; padding-left: 10px; border-radius: 4px;" >
              <div ref="alert_username"></div>
          </div>
          <div style="width: 80%; margin: auto; padding-left: 5%;  margin-top: 1%; padding-bottom: 3%;">
              <p style="font-size: larger;">รหัสผ่าน</p>
              <input v-model="password"   type="password" placeholder="กรอกรหัสผ่าน..." style="width: 90%; height: 4vh; margin-top: 1%; padding-left: 10px; border-radius: 4px;" >
              <div ref="alert_password"></div>
          </div>
          <div style="display:  flex; flex-wrap: nowrap; justify-content: right; margin-top: 2%; margin-bottom: 3%; width: 87%;">
            <p @click="goto_resetpassword()" id="forgetpassword">ลืมรหัสผ่าน</p>
          </div>
          <div style="margin-top: 2%;">
            <a href="register" class="button2"> <p class="textbut">สมัครสมาชิก</p></a>
            <button @click="login()" class="button3"><p class="textbut1">เข้าสู่ระบบ</p></button>
          </div>
          <div style="display: flex; justify-content: space-evenly; margin-top: 10%;margin-bottom: 5%;">
                  <div style="width: 30%; margin-top: 2%;"><div style=" border: 1px solid #00000047;"></div></div>
                  <p>หรือ</p>
                  <div style=" width: 30%; margin-top: 2%; "><div style="border: 1px solid #00000047;"></div></div>
              </div>
            
                  <div class="img" style="display: flex; margin-bottom: 5%; justify-content: space-evenly;">
                      <img src="../img/line.png" alt="" width="50px" height="50px" >
                      <img src="../img/facebook.png" alt="" width="50px" height="50px"  >
                      <img src="../img/twitter.png" alt="" width="50px" height="50px" >
                      <img src="../img/search.png" alt="" width="50px" height="50px" >
                  </div>
        </div>  
          </div>
      </div>
      <FooterView />
    </template>
<script>
    export default {
      name:'loginView',
      data(){
        return {
          username: "",
          password: "",
          role : "",
          id : ""
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
          if(response_data['isLogin'] == true){
            this.$router.push('/homepage'); 
          }
        },
        async login(){
          if(this.username == ""){
            this.$refs.alert_username.innerHTML = '<p style="color:red;">กรุณากรอกชื่อผู้ใช้</p>'
          }
          if (this.password == ""){
            this.$refs.alert_password.innerHTML = '<p style="color:red;">กรุณากรอกรหัสผ่าน</p>'
          }
          if (this.username != ""){
            this.$refs.alert_username.innerHTML = '' 
          }
          if (this.password != ""){
            this.$refs.alert_password.innerHTML = ''
          }
          if(this.username != "" && this.password != ""){
            const login_data = {
              username: this.username,
              password: this.password
            }
            const response = await fetch('http://localhost:3000/login',{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(login_data),
              
            });
            const response_data = await response.json();

            if(response_data['user'] == 0){
              alert('No account, Please try again.');
              this.$router.go(0);  
            }
            else if (response_data['message'] == "password_is_not_match"){
              alert('Password is not correct, Please try again.');
              this.$router.go(0); 
            } 
            else if (response_data['user'] == 1){
              
              if(response_data['role'] == "user"){
                this.$router.push({name: 'Homepage', params: {role: "user", id : response_data['user_id'], login_id : response_data['login_id'] }});
              }
              if(response_data['role'] == "pet_sitter"){
                this.$router.push({name: 'Homepage', params: {role: "ps", id : response_data['ps_id'], login_id : response_data['login_id'] }});
              }
              if(response_data['role'] == "admin"){
                this.$router.push({name: 'Homepage', params: {role: "admin", id : response_data['admin_id'], login_id : response_data['login_id'] }});
              }
              
            }
          }
        },
        async goto_resetpassword(){
          this.$router.push('/searchpro');
        }
      },
      

    }
    </script>
    
    <style scoped>

      #forgetpassword:hover{
        cursor: pointer; 
        transition-duration: 0.2s;
        color: #D8AB53;
      }
      .textline{
        margin-top: -15px;
        margin-left: 265px;
        position: absolute;
        color: #00000060;
      }
      .line{
        width: 180px;
        height: 2px;
        background-color: #00000060;
        margin-top: 30px;
        margin-left: 50px;
      }
      .line1{
        width: 180px;
        height: 1.8px;
        background-color: #00000060;
        margin-top: -2px;
        margin-left: 320px;
      }
      .bigbox{
        display: flex;
        justify-content: center;
      }
      .box{
        width: 567px;
        height: 608px;
        border-radius: 5px;
        background: linear-gradient(0deg, #FFF9E8 0%, #FFF9E8 100%), #FFF;
        margin-top: 50px;
      }
      .textlogin{
        text-align: center;
        margin-top: 30px;
      }
      .textemail{
        margin-top: 60px;
        margin-left: 100px;
      }
      .textplsemail{
        margin-left: 15px;
        margin-top: 5px;
        color: #727171;
      }
        
      .boxemail{
        background-color: #ffffff;
        width: 367px;
        height: 34px;
        border: 2px solid #000000;
        padding: 1px;
        margin: 20px;
        border-radius: 4px;
        margin-top: 10px;
        margin-left: 95px;
      }
    
      .textpassword{
        margin-top: 10px;
        margin-left: 100px;
      }
      .boxpassword{
        background-color: #ffffff;
        width: 367px;
        height: 34px;
        border: 2px solid #000000;
        padding: 1px;
        margin: 20px;
        border-radius: 4px;
        margin-top: 10px;
        margin-left: 95px;
      }
      .textplspassword{
        margin-left: 15px;
        margin-top: 5px;
        color: #727171;
      }
      .imgpassword{
        margin-left: 160px;
        margin-top: 5px;
        position: absolute;
      }
      .textforget{
        margin-left: 380px;
        margin-top: -10px;
        color: #727171;
      }
      .textbut{
        text-align: center;
        margin-top: -9px;
        font-size: 19px;
      }
      .button2{
        width: 110px;
        height: 9px;
        background-color: #04AA6D;
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
        margin-left: 80px;
      }
      .button2 {
        background-color: #464141; 
        color: rgb(255, 255, 255); 
        border: 2px solid #464141;
      }

      .button2:hover {
        background-color: #1e1a1a;
        color: #ffffff;
      }
      .textbut1{
        text-align: center;
        margin-top: -9px;
        font-size: 19px;
      }

      .button3{
        width: 169px;
        height: 43px;
        background-color: #ffffff;
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
        margin-left: 20px;
      }
      .button3 {
        background-color: #D8AB53; 
        color: #ffffff; 
        border: 2px solid #D8AB53;
      }

      .button3:hover {
        background-color: #8c6311;
        color: #ffffff;
      }
        
    </style>