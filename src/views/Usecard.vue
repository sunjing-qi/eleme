<template>
  <div>
    <myheader :message="message" />
    <div class="usecard">
      <!-- 账户名取登陆后username -->
      <p>成功兑换后将关联到当前账户：111</p>
      <div class="card">
        <input
          @keyup="transform"
          v-model="intchange"
          maxlength="10"
          type="text"
          placeholder="请输入10位卡号"
          class="card"
        />
        <input
          @keyup="transform"
          v-model="intcode"
          maxlength="6"
          type="text"
          placeholder="请输入6位卡密"
          class="cardpass"
        />
        <button id="button" @click="submit">兑换</button>
      </div>
      <div class="care">
        <div class="point">
          <p>—————温馨提示————</p>
        </div>
        <div class="points">
          <p>新兑换的会员服务，权益以「会员说明」为准。</p>
          <p>
            月卡：
            <b>30次</b>减免配送费用。
          </p>
          <p>
            季卡：
            <b>90次</b>减免配送费用。
          </p>
          <p>
            年卡：
            <b>120次</b>减免配送费用。
          </p>
          <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
        </div>
      </div>
      <div class="alert" v-if="alert">
        <img src="../assets/感叹号.png" />
        <p>无效的卡号</p>
        <p v-on:click="alert = false">确认</p>
      </div>
    </div>
  </div>
</template>

<script>
import myheader from "../components/Hearder";
export default {
  name: "usecard",
  data() {
    return {
      alert: false,
      message: "兑换会员",
      intchange: "",
      intcode: "",
      abled: false
    };
  },
  components: { myheader },
  methods: {
    transform() {
      if (this.intchange.length >= 10 && this.intcode.length >= 6) {
        this.abled = true;
        document.getElementById("button").style.background = "#4cd964";
      } else {
        this.abled = false;
        document.getElementById("button").style.background = "#ccc";
      }
    },
    submit() {
      if (this.abled == true) {
        this.alert = true;
      }
    }
  }
};
</script>

<style scoped>
.usecard p:first-child {
  font-size: 0.3rem;
  padding: 0.2rem;
}
.card input {
  width: 100%;
  padding: 0 0.2rem;
  box-sizing: border-box;
  height: 1rem;
  border: none;
  outline: none;
}
.care {
  color: #aaa;
}
.point {
  text-align: center;
  padding-top: 0.3rem;
  padding-bottom: 0.1rem;
}
.points {
  font-size: 0.25rem;
  width: 80%;
  padding: 0 10%;
}
.points p:first-child {
  font-size: 0.25rem;
  width: 80%;
  padding: 0;
}
button {
  width: 90%;
  height: 1rem;
  margin-left: 0.5rem;
  border: none;
  outline: none;
  background: #ccc;
  color: #fff;
  font-size: 0.4rem;
  border-radius: 0.2rem;
}
.alert {
  width: 80%;
  position: absolute;
  background: #fff;
  border-radius: 0.3rem;
  text-align: center;
  overflow: hidden;
  left: 10%;
  top: 30%;
}
.alert img {
  width: 1.7rem;
  padding-top: 0.2rem;
}
.alert p:first-of-type {
  font-size: 0.4rem;
}
.alert p:last-of-type {
  background: #4cd964;
  color: #fff;
  height: 0.75rem;
  margin-top: 0.6rem;
  padding: 0.2rem 0 0.1rem;
  font-size: 0.4rem;
}
</style>