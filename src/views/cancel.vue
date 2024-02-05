<template>
  <div>
    <newnav />
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
              <button class="button2"><p class="textbut">รายละเอียด</p></button>
              <button @click="cancle(pet_data['pet_id'])" class="button3">
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
      pet_id: ""
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
    async cancle(input_pet_id) {
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
              onclick="window.location.href = 'http://localhost:5173/hide_cancle_pet/${this.$route.params.role}/${this.$route.params.id}/${this.$route.params.login_id}/${input_pet_id}'">
              ยืนยัน
            </button>
          </div>
        </div>
      </div>`;
    },
  },
  mounted() {
    this.check_login();
    this.loaddata();
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
