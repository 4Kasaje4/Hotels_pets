<template>
    <newnav/>
    <div>
        <h1 class="texthead">การจองบริการฝากเลี้ยงสัตว์เลี้ยง</h1>
      <div class="bigbox">
        <div class="box">
            <h2 class="textser">กรอกข้อมูลการจองสัตว์เลี้ยง</h2>
            <h2 class="texthead1">รายละเอียดสัตว์เลี้ยง</h2>
            <div class="bigboxtype">
                <p class="texttype">เป็นสัตว์เลี้ยงประเภทอะไร ?</p>
                <p class="texttype1">สายพันธ์ุอะไร ?</p>
                <select v-model="type" class="boxtype-select" style="padding-left: 10px;" >
                    <option value="null">กรุณาเลือก</option>
                    <option value="cat">แมว</option>
                    <option value="dog">หมา</option>
                </select>
                <input v-model="breed" type="text" class="boxtype" style="font-size: medium; padding-left: 10px; margin-left: 3.5%;">
                <p class="texttype">สัตว์เลี้ยงของคุณน้ำหนักเท่าไหร่ (กก.)?</p>
                <p class="texttype1">ชื่อเล่นสัตว์เลี้ยง</p>
                <input v-model="weight" type="number" class="boxtype" style="font-size: medium; padding-left: 10px;">
                <input v-model="nickname" type="text" class="boxtype" style="font-size: medium; padding-left: 10px; margin-left: 3.5%;">
            </div>  
            <h2 class="textreserve">รายละเอียดเพิ่มเติม</h2>      
            <div class="bigboxtype">
                <p class="texttype">โปรดเลือกวันที่จะเริ่มให้บริการ</p>
                <p class="texttype1">เวลา</p>
                <input v-model="start_date" type="date" class="boxtype" style="font-size: medium; padding-left: 10px;">
                <input v-model="time" type="time" class="boxtype" style="font-size: medium; padding-left: 10px; margin-left: 3.5%;">
                <p class="texttype">คุณต้องการให้รับสัตว์เลี้ยงถึงที่หรือไม่ ?</p>
                <p class="texttype1">อาหารที่เเพ้</p>
                <select v-model="pickup" class="boxtype-select" style="padding-left: 10px;" >
                    <option value="null">กรุณาเลือก</option>
                    <option value="yes">ใช่</option>
                    <option value="no">ไม่ใช่</option>
                </select>
                <input v-model="allergies" type="text" class="boxtype" style="font-size: medium; padding-left: 10px; margin-left: 3.5%;">
                <p class="texttype2">ข้อมูลเพิ่มเติมที่พี่เลี้ยงควรรู้เกี่ยวกับสัตว์เลี้ยงของคุณ </p> <p class="colortext">(ไม่จำเป็น)</p>
                <input v-model="other" type="text" class="boxtype2" style="font-size: medium; padding-left: 10px;">
                
            </div>   
            <button @click="backward()" class="button2"> <h4 class="textbut">ยกเลิก</h4> </button>
            <button @click="submit()" class="button3"> <h4 class="textbut1">ยืนยัน</h4> </button>

        </div>
      </div>
    </div>

  </template>

  <script>
  import newnav from '@/components/newnav.vue'
import { setTransitionHooks } from 'vue';
  export default {
  components: { newnav },
  name:'confirmationpage',
  data(){
    return {
        type : null,
        breed : null,
        weight : null,
        nickname : null,
        start_date : null,
        time : null,
        pickup : null,
        allergies : null,
        other : null
    }
  },
  methods : {
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
    async backward(){
        this.$router.go(-1)
    },
    async submit(){
        if(this.type == null || this.breed == null || this.weight == null || this.nickname == null || this.start_date == null || this.time == null || this.pickup == null || this.allergies == null ){
            alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        }else{
            const data = {
                user_id : this.$route.params.id,
                type : this.type,
                breed : this.breed,
                weight : this.weight,
                nickname : this.nickname,
                start_date : this.start_date,
                time : this.time,
                pickup : this.pickup,
                allergies : this.allergies,
                other : this.other
            }

            const response = await fetch('http://localhost:3000/add_pet_to_hotel',{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(data)
            });
            const response_data = await response.json();
            console.log(response_data);
            if(response_data['status'] === true){
                alert('บันทึกข้อมูลเรียบร้อย');
                this.$router.push({name : 'Homepage', params : {role : this.$route.params.role, id : this.$route.params.id, login_id : this.$route.params.login_id}});
            }else{
                alert('ไม่มีพี่เลี้ยงว่างให้บริการขณะนี้ โปรดทำรายการอีกครั้งในภายหลัง');
            }
        }
    }
  },
  mounted(){
    this.check_login();
  }
   
  }
  </script>

  <style scoped>
    .bigbox{
        display: flex;
        justify-content: center;
    }
      .box{
        width: 1000px;
        height: 950px;
        background-color: #FFF9E8;
        border-radius: 20px;
        margin-top: 50px;
      }
      .texthead{
       text-align: center;
        margin-top: 50px;
        color: #C07E00;
        font-size: 30px;
      }
      .textser{
        margin-left: 100px;
        margin-top: 60px;
        font-size: 25px;
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
      .boxtype-select{
        width: 365px;
        height: 35px;
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
      .button2{
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
      margin-left: 250px;
      position: absolute;
      margin-top: 50px;
    }
    .button2 {
      background-color: #ffffff; 
      color: #C07E00; 
      border: 2px solid #C07E00;
    }
    .button2:hover {
      background-color: #C07E00;
      color: #ffffff;
    }
    .textbut{
      text-align: center;
      margin-top: -13px;
      font-size: 25px;
    }
    .button3{
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
      margin-left: 500px;
      position: absolute;
      margin-top: 50px;
    }
    .button3 {
      background-color: #C07E00; 
      color: #ffffff; 
      border: 2px solid #C07E00;
    }
    .button3:hover {
      background-color: #ffffff;
      color: #C07E00;
    }
    .textbut1{
      text-align: center;
      margin-top: -13px;
      font-size: 25px;
    }
  </style>