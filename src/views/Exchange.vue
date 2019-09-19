<template>
  <div>
    <myheader :message="message" />
    <div class="exchange">
      <input @keyup="transform" v-model="intchange" maxlength="10" type="text" placeholder="请输入兑换码" />
      <input @keyup="transform" v-model="intcode" maxlength="4" type="text" placeholder="验证码" />
      <div class="code">
        <img :src="code" />
        <p>看不清</p>
        <p>换一张</p>
      </div>
      <button :class="{blue:abled}" @click="submit">兑换</button>
      <div class="alert" v-if="alert">
        <img src="../assets/感叹号.png" />
        <p>无效的兑换码</p>
        <p v-on:click="alert = false">确认</p>
      </div>
    </div>
  </div>
</template>

<script>
import myheader from "../components/Hearder";
export default {
  data() {
    return {
      code: "",
      alert: false,
      intchange: "",
      intcode: "",
      message: "兑换会员",
      abled: false
    };
  },
  components: { myheader },
  created() {
    this.$axios.post("https://elm.cangdu.org/v1/captchas").then(res => {
      this.code = res.data.code;
    });
  },
  methods: {
    transform() {
      if (this.intchange.length >= 1 && this.intcode.length >= 4) {
        this.abled = true;
      } else {
        this.abled = false;
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
input {
  outline: none;
}
.exchange {
  width: 100%;
}
.exchange input:first-child {
  height: 0.5rem;
  width: 85%;
  border: none;
  background: #fff;
  padding: 0.2rem;
  margin-left: 5%;
}
.exchange input:nth-child(2) {
  height: 0.5rem;
  width: 35%;
  border: none;
  background: #fff;
  padding: 0.2rem;
  margin-left: 5%;
}
.code {
  background: #fff;
  float: right;
  margin-right: 0.5rem;
  margin-top: 0.55rem;
  position: relative;
  width: 40%;
  height: 0.65rem;
  padding: 0.1rem;
}
.code img {
  position: absolute;
  top: 0.1rem;
}
.code p {
  font-size: 0.25rem;
  text-align: right;
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
  top: 25%;
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
.blue {
  background-color: #4cd964;
}
</style>