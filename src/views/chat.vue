<template>
    <div>
       <div class="BIGBOX">
         <div class="container">
              <div class="leftSide">
                  <!-- headder -->
                  <div class="header">

                      <div class="userimg">
                          <img src="../img/user.jpg" alt="" class="cover">
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
                  <div class="chatlist">
                      <p class="texthead">พี่เลี้ยงสัตว์(4)</p>
                      <div class="block active">
                          <div class="imgbx">
                              <img src="../img/user1.jpg" alt="" class="cover">
                          </div>
                          <div class="details">
                              <div class="listHead"> 
                                  <h4>kasaje</h4>
                              </div>
                              <div class="message_p">
                                  <p>สวัสดีครับ</p>
                              </div>
                          </div>
                      </div>

                      <div class="block">
                          <div class="imgbx">
                              <img src="../img/user2.jpg" alt="" class="cover">
                          </div>
                          <div class="details">
                              <div class="listHead"> 
                                  <h4>Kasaje สุดเฟี้ยว</h4>
                              </div>
                              <div class="message_p">
                                  <p>เป็นไงบ้างคะวันนี้น้องหมาและแมว</p>
                              </div>
                          </div>
                      </div>

                      <div class="block">
                          <div class="imgbx">
                              <img src="../img/user3.jpg" alt="" class="cover">
                          </div>
                          <div class="details">
                              <div class="listHead"> 
                                  <h4>Cinnasa</h4>
                              </div>
                              <div class="message_p">
                                  <p>วันนี้หมาเดินเล่นยังคะ</p>
                              </div>
                          </div>
                      </div>

                      <div class="block">
                          <div class="imgbx">
                              <img src="../img/user4.jpg" alt="" class="cover">
                          </div>
                          <div class="details">
                              <div class="listHead"> 
                                  <h4>นายโบวี่สุดหล่อ ครับผม</h4>
                              </div>
                              <div class="message_p">
                                  <p>แมวเป็นยังไงบ้างครับ</p>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>


              <div class="rightSide">
                  <div class="header">
                    <div class="imgText">
                      <div class="userimg">
                          <img src="../img/user1.jpg" alt="" class="cover">
                      </div>
                      <h4>kasaje <br><span>online</span></h4>
                    </div>
                      <ul class="nav_icons">
                          <li><ion-icon name="search-outline"></ion-icon></li>
                          <li><ion-icon name="ellipsis-vertical"></ion-icon></li>
                      </ul>
                  </div>

                  <!-- Chat box -->
                  <div class="chatBox">
                      <div class="message my_message">
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
                      </div>

                  </div>
                   <!-- chatbox input -->
              <div class="chatbox_input">
                  <ion-icon name="happy-outline"></ion-icon>
                  <ion-icon name="attach-outline"></ion-icon>
                  <input type="text" placeholder="พิมพ์ข้อความ">
              </div>
              </div>
         </div>
       </div>
    </div>

  </template>

  <script>
  export default {
    name:'chatView'
   
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
        width: 100%;
        height: calc(100% - 120px);
        padding: 50px;
        overflow-y: auto;
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
    
  </style>