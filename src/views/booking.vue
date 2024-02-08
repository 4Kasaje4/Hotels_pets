<template>
    <newnav/>
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
            <p class="texttype">พี่เลี้ยงที่ดูแล</p>
                <input  type="text"  style=" width: 750px ;height: 30px; background-color: #ffffff; border: 2px solid #000000; border-radius: 4px; margin-left: 100px; margin-top: 10px; font-size: medium; padding-left: 10px; " :value="details['firstname'] + ' ' + details['lastname']" disabled >

        </div>
      </div>
    </div>
    <FooterView />
  </template>

  <script>
  import newnav from '@/components/newnav.vue'
    export default {
    components: { newnav },
    name:'bookingView',
    data(){
        return {
            details : [],
            type : "",
            pickup : ""
        }
    },
    methods: {
        async backward() {
          this.$router.go(-1);
        },
        async loaddata(){
            const data = {
                user_id : this.$route.params.id,
                pet_id : this.$route.params.pet_id
            }
            const response = await fetch('http://localhost:3000/details_pet',{
                method : 'POST',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify(data)
            }); 
            const response_data = await response.json();
            this.details = response_data;
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
        }
    },
    mounted(){
        this.loaddata();
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
  </style>