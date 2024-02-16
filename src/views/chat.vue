<template>
    <div>
       <div class="BIGBOX">
         <div class="container">
              <div class="leftSide">
                  <!-- headder -->
                  <div class="header" >

                      <div @click="go_profile()">
                        <!-- User Profile -->
                        <div v-if="role == 'user'">
                          <div v-if="profile_data['user_pic'] != null" class="userimg">
                          <img :src="path_profile" alt="" class="cover">
                        </div>
                        <div v-if="profile_data['user_pic'] == null" class="userimg">
                            <div style="width: 50px; height: 50px; border-radius: 50%; background-color: aliceblue;">
                              <img src="/src/img/Profile_Unknow.png" alt="" class="cover">
                            </div>
                        </div>
                      </div>

                      <!-- Pet sitter profile -->
                      <div v-if="role == 'ps'">
                        <div v-if="profile_data['pet_sitter_pic'] != null" class="userimg">
                          <img :src="path_profile" alt="" class="cover">
                        </div>
                        <div v-if="profile_data['pet_sitter_pic'] == null" class="userimg">
                            <div style="width: 50px; height: 50px; border-radius: 50%; background-color: aliceblue;">
                              <img src="/src/img/Profile_Unknow.png" alt="" class="cover">
                            </div>
                        </div>
                      </div>
                      
                      <!-- Admin profile -->
                      <div v-if="role == 'admin'">
                        <div v-if="profile_data['admin_pic'] != null" class="userimg">
                          <img :src="path_profile" alt="" class="cover">
                        </div>
                        <div v-if="profile_data['admin_pic'] == null" class="userimg">
                            <div style="width: 50px; height: 50px; border-radius: 50%; background-color: aliceblue;">
                              <img src="/src/img/Profile_Unknow.png" alt="" class="cover">
                            </div>
                        </div>
                      </div>

                      </div>
                      <ul class="nav_icons">
                          <li><ion-icon name="scan-circle-outline"></ion-icon></li>
                          <li><ion-icon name="chatbox"></ion-icon></li>
                          <li><ion-icon name="ellipsis-vertical"></ion-icon></li>
                      </ul>
                  </div>
                  <!-- search -->
                  <div class="search_chat">
                      <div>
                          <input type="text" placeholder="ค้นหา">
                          <ion-icon name="search-outline"></ion-icon>
                      </div>
                  </div>
                  <!-- chat list -->

                  <div style="display: flex; padding: 3% 0 0 1%; flex-direction: column; width: 420px; height: 560px; overflow: scroll; background-color: antiquewhite;">
                        <div v-if="role == 'user'">
                          <div v-for="(value, index) in list_chat_data" :key="index">
                          
                          <div @click="open_chat(index, value['ps_id'], 'ps')" v-if="value['pet_sitter_pic'] == null">
                            <div  style="display: flex; height: 70px; justify-content: start; margin: 2%; cursor: pointer; background-color:#fdde91; border-radius: 10px; padding: 1%; ">
                              <img src="/src/img/Profile_Unknow.png" width="65px" alt="">
                              <div style="margin-left: 5%; margin-top: 3%; width: 280px;  overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
                                <p  style="font-size: larger;">{{ value['firstname'] }} {{ value['lastname'] }}</p>
                                <p></p>
                              </div>
                            </div>
                          </div>
                          <div @click="open_chat(index, value['ps_id'], 'ps')" v-if="value['pet_sitter_pic'] != null">
                            <div style="display: flex; height: 70px; justify-content: start; margin: 2%; cursor: pointer; background-color:#fdde91; border-radius: 10px; padding: 1%; " >
                              <img :src="path + value['pet_sitter_pic']" width="65px" style="border-radius: 50%;" alt="">
                              <div style="margin-left: 5%; margin-top: 3%; width: 280px;  overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
                                <p style="font-size: larger;">{{ value['firstname'] }}  {{ value['lastname'] }}</p>
                                <p></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Pet sitter View -->
                      <div v-if="role == 'ps'">
                        <div v-for="(value, index) in list_chat_data" :key="index">
                          <div @click="open_chat(index, value['user_id'], 'user')" v-if="value['user_pic'] == null">
                            <div style="display: flex; height: px; justify-content: start; margin: 2%; cursor: pointer; background-color:#fdde91; border-radius: 10px; padding: 1%; ">
                              <img src="/src/img/Profile_Unknow.png" width="65px" alt="">
                              <div style="margin-left: 5%; margin-top: 3%; width: 280px;  overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
                                <p style="font-size: larger;">{{ value['firstname'] }}  {{ value['lastname'] }}</p>
                                <p></p>
                              </div>
                            </div>
                          </div>
                          <div @click="open_chat(index, value['user_id'], 'user')" v-if="value['user_pic'] != null">
                            <div style="display: flex; height: 70px; justify-content: start; margin: 2%; cursor: pointer; background-color:#fdde91; border-radius: 10px; padding: 1%; ">
                              <img :src="path + value['user_pic']" width="65px" style="border-radius: 50%;" alt="">
                              <div style="margin-left: 5%; margin-top: 3%; width: 280px;  overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
                                <p style="font-size: larger;">{{ value['firstname'] }}  {{ value['lastname'] }}</p>
                                <p></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>


                      <!-- Admin View -->

                      <div v-if="role == 'admin'">
                        <div v-for="(value, index) in list_chat_data" :key="index">
                          <div  v-if="value['admin_pic'] == null">
                            
                            <div style="display: flex; height: px; justify-content: start; margin: 2%; cursor: pointer; background-color:#fdde91; border-radius: 10px; padding: 1%; ">
                              <img src="/src/img/Profile_Unknow.png" width="65px" alt="">
                              <div style="margin-left: 5%; margin-top: 3%; width: 280px;  overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
                                <p style="font-size: larger;">{{ value['firstname'] }}  {{ value['lastname'] }}</p>
                                <p></p>
                              </div>
                            </div>
                          </div>
                          <div v-if="value['admin_pic'] != null">
                            <div style="display: flex; height: 70px; justify-content: start; margin: 2%; cursor: pointer; background-color:#fdde91; border-radius: 10px; padding: 1%; " >
                              <img :src="path + value['admin_pic']" width="65px" style="border-radius: 50%;" alt="">
                              <div style="margin-left: 5%; margin-top: 3%; width: 280px;  overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
                                <p style="font-size: larger;">{{ value['firstname'] }}  {{ value['lastname'] }}</p>
                                <p></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

  
                  </div>
              </div>


              <div class="rightSide">
                  <div class="header">
                    <div class="imgText">
                      <div v-if="profile_select == null" class="userimg">
                      </div>
                      <div v-if="profile_select != null" class="userimg">
                          <img :src="profile_select" style="width:40px;" alt="">
                      </div>
                      <h4 style="margin-bottom: 10px;">{{ name_select }}<br></h4>
                    </div>
                      <ul class="nav_icons">
                          <li><ion-icon name="search-outline"></ion-icon></li>
                          <li><ion-icon name="ellipsis-vertical"></ion-icon></li>
                      </ul>
                  </div>

                  <!-- Chat box -->
                  <div class="chatBox">

                    <div ref="chat_box_scroll" style=" padding-top:20px; width:976px; height:600px; padding: 0 0 50px 0; overflow: scroll; white-space: nowrap; text-overflow: ellipsis;">
                      <div style="margin-left: 3%; width:94%;">
                        <div v-for="(value, index) in chat_data" :key="index" >
                          <div v-if="value['sender'] == role">
                            <div style="display:flex; justify-content: right;"  class="message mymessage">
                              <p>{{ value['message_text'] }}</p>
                              
                            </div>
                          </div>
                          <div v-if="value['sender'] != role">
                            <div style="display:flex; justify-content: left;"  class="message frnd_message">
                              <p>{{ value['message_text'] }}</p>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                      <!-- <div class="message my_message">
                          <p>สวัสดีครับ </p>
                      </div>

                      <div class="message frnd_message">
                          <p>สวัสดีครับ</p>
                      </div>

                      <div class="message my_message">
                          <p>ตอนนี้น้องหมาเป็นไงยังไงบ้างครับ</p>
                      </div>

                      <div class="message frnd_message">
                          <p>น้องสบายดีครับกำลังพาไปเดินเล่นครับ</p>
                      </div>

                      <div class="message my_message">
                          <p>โอเคครับ</p>
                      </div>

                      <div class="message my_message">
                          <p>เดินเล่นเสร็จพาอาบน้ำด้วยนะครับ</p>
                      </div>

                      <div class="message frnd_message">
                          <p>ได้ครับ</p>
                      </div>

                      <div class="message frnd_message">
                          <p>ไม่ต้องเป็นห่วงนะครับทางเราดูแลอย่างดีครับ :)</p>
                      </div> -->

                  </div>
                   <!-- chatbox input -->
              <div class="chatbox_input">
                  <ion-icon name="happy-outline"></ion-icon>
                  <ion-icon name="attach-outline"></ion-icon>
                  <input v-model="message_text" type="text" style="width: 80%;"  placeholder="พิมพ์ข้อความ">
                  <button  @click="send_message(my_role,my_id , you_role, you_id)" id="send">send</button>
              </div>
              </div>
         </div>
       </div>
    </div>

  </template>

  <script>
  export default {
    name:'chatView',
    data(){
      return {
        my_role : null,
        my_id : null,
        you_role : null,
        you_id : null,
        role : "",
        path : '/API/profile_pic/',
        profile_data : [],
        profile_pic : null,
        list_chat : null,
        col_pic : '',
        list_chat_data : "",
        profile_select : null,
        name_select : null,
        chat_data : null,
        message_text : null,
        index : null
      }
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
      async go_profile(){
        this.$router.push({name : 'profile', params : {role : this.$route.params.role, id : this.$route.params.id, login_id : this.$route.params.login_id}});
      },  
      async show_profile(){
        this.role = await this.$route.params.role
        const data = {
          role : this.$route.params.role,
          id : this.$route.params.id
        }
        const response = await fetch('http://localhost:3000/profile',{
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify(data)
        });
        const response_data = await response.json();
        this.profile_data = response_data;
        if(this.role == 'user' && response_data['user_pic'] != undefined){
          this.path_profile = '/API/profile_pic/' + response_data['user_pic']
        }if(this.role == 'ps' && response_data['pet_sitter_pic'] != undefined){
          this.path_profile = '/API/profile_pic/' + response_data['pet_sitter_pic']
        }if(this.role == 'admin' && response_data['admin_pic'] != undefined){
          this.path_profile = '/API/profile_pic/' + response_data['admin_pic']
        }

      },
      async show_list_chat(){
        const data = {
            role : this.$route.params.role,
            id : this.$route.params.id
          }
          if(this.$route.params.role == 'user'){
            const response = await fetch('http://localhost:3000/chat_user',{
              method: 'POST',
              headers: {'Content-Type' : 'application/json'},
              body: JSON.stringify(data)
            });
            const response_data = await response.json();
            this.list_chat_data = response_data;
          }if(this.$route.params.role == 'ps'){
            const response = await fetch('http://localhost:3000/chat_pet_sitter',{
              method: 'POST',
              headers: {'Content-Type' : 'application/json'},
              body: JSON.stringify(data)
            });
            const response_data = await response.json();
            this.list_chat_data = response_data;
          }
          if(this.$route.params.role == 'admin'){
            const response = await fetch('http://localhost:3000/chat_admin',{
              method: 'POST',
              headers: {'Content-Type' : 'application/json'},
              body: JSON.stringify(data)
            });
            const response_data = await response.json();
            this.list_chat_data = response_data;
          }
      },
      async open_chat(index, id, you_role){
        this.$refs.chat_box_scroll.scrollTop = this.$refs.chat_box_scroll.scrollHeight;
        this.index = index
        this.my_role = this.$route.params.role;
        this.my_id = this.$route.params.id;
        this.you_role = you_role;
        this.you_id = id;
        const data = {
          my_role : this.$route.params.role,
          my_id : this.$route.params.id,
          you_role : you_role,
          you_id : id
        }
        const response = await fetch('http://localhost:3000/showchat',{
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify(data)
        });
        if(you_role == 'ps'){
          if(this.list_chat_data[index]['pet_sitter_pic'] == null){
            this.profile_select = '/src/img/Profile_Unknow.png'
          }
          if(this.list_chat_data[index]['pet_sitter_pic'] != null){
            this.profile_select = '/API/profile_pic/' + this.list_chat_data[index]['pet_sitter_pic'];
          }
        }
        if(you_role == 'user'){
          if(this.list_chat_data[index]['user_pic'] == null){
            this.profile_select = '/src/img/Profile_Unknow.png'
          }
          if(this.list_chat_data[index]['user_pic'] != null){
            this.profile_select = '/API/profile_pic/' + this.list_chat_data[index]['user_pic'];
          }
        }
        
        this.name_select = this.list_chat_data[index]['firstname'] + " " + this.list_chat_data[index]['lastname'];
        const response_data = await response.json();
        this.chat_data = response_data;
      },
      async send_message(my_role, my_id, you_role, you_id){
        if(this.message_text == null || my_role == null || my_id == null || you_role == null || you_id == null){
          alert('กรุณาเลือกช่องแชทหรือพิมพ์ข้อความก่อนส่ง');
        }
        else{
          const data = {
          my_role : my_role,
          my_id : my_id,
          you_role : you_role,
          you_id : you_id,
          message_text : this.message_text
        }
        const response = await fetch('http://localhost:3000/send_message',{
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify(data)
        });
        const response_data = await response.json();
        console.log(response_data);
        if(response_data['status'] == 1){
          this.open_chat(this.index, this.you_id, this.you_role);
          this.message_text = ""
        }
      }
        }
    },
    mounted(){
      this.check_login();
      this.show_list_chat();
      this.show_profile();
    }
   
  }
  
  </script>

  <style scoped>
    .BIGBOX{
      height: 726px;
      display: flex;
      justify-content: center;
    
      background: #efd29a;
    }
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
   
      .texthead{
        margin-top: 20px;
        font-size: 16px;
        color: #707070;
        margin-left: 15px;
      }
      .container{
        position: relative;
        width: 1396px;
        max-width: 100%;
        height: calc(100vh - 40px);
        background-color: #fde4b6;
        box-shadow: 0 1px 1px 0 rgba(0,0,0,0), 0 2px 5px 0 rgba(0,0,0,0);
        display: flex;
        padding-top: 20px;
      }
      .container .leftSide{
        position: relative;
        flex: 30%;
        background: #f0dbb2;
        border-right: 1px solid #8e5c01;
      }
      .container .rightSide{
        position: relative;
        flex: 70%;
      }
      .container .rightSide::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .header{
        position: relative;
        width: 100%;
        height: 60px;
        background: #7d5401;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
      }
      .userimg{
        position: relative;
        width: 40px;
        height: 40px;
        overflow: hidden;
        border-radius: 50%;
        cursor: pointer;
      }
      .cover{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit:cover ;
      }
      .nav_icons{
        display: flex;
      }
      .nav_icons li{
        display: flex;
        list-style: none;
        cursor: pointer;
        color: #ffffff;
        font-size: 1.5em;
        margin-left: 22px;
      }
      .search_chat{
        position: relative;
        width: 100%;
        height: 50px;
        background: #7d5401c3;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 15px;
      }
      .search_chat div{
        width: 100%;
      }
      .search_chat div input{
        width: 100%;
        outline: none;
        border: none;
        background: #ffffff;
        padding: 6px;
        height: 38px;
        border-radius: 30px;
        font-size: 14px;
        padding-left: 40px;
      }
      .search_chat div input::placeholder{
        color: #14060680;
      }
      .search_chat div ion-icon{
        position: absolute;
        left: 30px;
        top: 14px;
        font-size: 1.2em;
      }
      .chatlist{
        position: relative;
        height: calc(100% - 110px);
        overflow-y: auto;
      }
      .chatlist .block{
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
        border-bottom: 1px solid #7d540150;
        cursor: pointer;
      }
      .chatlist .block .activ{
        background: #fffdfa;
      }
      .chatlist .block:hover{
        background: #efd29a;
      }
      .chatlist .block .imgbx{
        position: relative;
        width: 45px;
        height: 45px;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 10px;
       
      }
      .chatlist .block .details{
        position: relative;
        width: 100%
      }
      .chatlist .block .details .listHead{
        display: flex;
        justify-content: space-between;
      }
      .chatlist .block .details .listHead h4{
        font-size: 1.1em;
        font-weight: 600px;
        color: black;
      }
      .chatlist .block .details .listHead{
        color: #7d5401;
      }
      .message_p{
        display: flex;
        justify-content: space-between;
        align-content: center;
      }
      .message_p p{
        color: #707070;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        font-size: 0.9em;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .imgText{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .imgText h4{
        font-weight: 400;
        line-height: 1.2em;
        margin-left: 15px;
        color: #ffffff;
      }
      .imgText h4 span {
        font-size: 0.8em;
        color: #ffffff;
      }
      .chatBox{
        position: relative;
        height: 550px;
      }
    .message{
        position: relative;
        display: flex;
        width: 100%;
        margin: 5px 0;
    }
    .message p{
        position: relative;
        right: 0;
        text-align: right;
        max-width: 65%;
        padding: 12px;
        background: #f9cc71;
        border-radius: 10px;
        font-size: 0.9em;
    }
    .message p::before{
        content: ' ';
        position: absolute;
        top: 0;
        right: -12px;
        width: 20px;
        height: 20px;
        background: linear-gradient(135deg, #f9cc71 0%, #f9cc71 50%,transparent 50%,transparent);
    }
    .my_message{
        justify-content: flex-end;
    }
    .frnd_message{
        justify-content: flex-start;
    }
    .frnd_message p{
        background: #fad58c;
        text-align: left;
    }
    .message.frnd_message p::before{
        content: ' ';
        position: absolute;
        top: 0;
        left: -12px;
        width: 20px;
        height: 20px;
        background: linear-gradient(225deg, #fad58c 0%, #fad58c 50%,transparent 50%,transparent);
    }
    .chatbox_input{
        position: relative;
        width: 100%;
        height: 60px;
        background: #ffffff;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .chatbox_input ion-icon {
        cursor: pointer;
        font-size: 1.8em;
        color: #707070;
    }
    .chatbox_input input{
        position: relative;
        width: 90%;
        margin: 0 20 px;
        padding: 10px 20px;
        border: none;
        outline: none;
        border-radius: 30px;
        font-size: 1em;
        background: #feeecd;
    }
    
#send{
  width: 60px; height: 35px; border-radius: 10px; cursor: pointer; background-color: #fdde91; border: 0 solid #d39417;
}
#send:hover{
  background-color: #d39417;
  transition-duration: 0.2s;
  color: white;
}
  </style>