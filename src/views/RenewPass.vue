<template>
  <div>
    <myheader :message="message" />
    <div class="qaa">
      <form @submit.prevent="renewpass">
        <section>
          <input type="text" placeholder="账号" v-model="newUser.username" />
        </section>
        <section>
          <input type="text" placeholder="旧密码" v-model="newUser.oldpassWord" />
        </section>
        <section>
          <input type="text" placeholder="请输入新密码" v-model="newUser.newpassword" />
        </section>
        <section>
          <input type="text" placeholder="请确认密码" v-model="newUser.confirmpassword" />
        </section>
        <section>
          <input type="text" placeholder="验证码" v-model="newUser.captcha_code" />
          <img :src="src" />
          <div @click="changeImg" class="changeimg">
            <p>看不清</p>
            <p>换一张</p>
          </div>
        </section>
        <input type="submit" value="确认修改" />
      </form>
    </div>
    <section class="alert" v-if="showAlert" @closeTip="showAlert = false" :alertText="alertText">
      <div class="type-icon">
        <span>!</span>
      </div>
      <p>{{alertText}}</p>
      <button class="btn-t" @click="unSubmit">确认</button>
    </section>
  </div>
</template>

<script>
import myheader from "../components/Hearder";
export default {
  name: "login",
  data() {
    return {
      textopen: false,
      message: "重置密码",
      src: "",
      showAlert: false,
      alertText: null,
      newUser: {
        username: "",
        oldpassWord: "",
        captcha_code: "",
        newpassword: "",
        confirmpassword: ""
      }
    };
  },
  components: { myheader },
  methods: {
    changeType() {
      this.greenbaco = !this.greenbaco;
      this.passwordtype = !this.passwordtype;
      this.textopen = !this.textopen;
    },
    getIdetifyCode() {
      this.$axios.post("https://elm.cangdu.org/v1/captchas").then(res => {
        this.src = res.data.code;
      });
    },
    changeImg() {
      this.getIdetifyCode();
    },
    unSubmit() {
      this.showAlert = false;
      this.alertText = "";
    },
    renewpass() {
      if (!this.newUser.username) {
        this.showAlert = true;
        this.alertText = "请输入正确的账号";
      } else if (!this.newUser.oldpassWord) {
        this.showAlert = true;
        this.alertText = "请输入旧密码";
      } else if (!this.newUser.newpassword) {
        this.showAlert = true;
        this.alertText = "请输入新密码";
      } else if (!this.newUser.confirmpassword) {
        this.showAlert = true;
        this.alertText = "请输入确认密码";
      } else if (this.newUser.newpassword != this.newUser.confirmpassword) {
        this.showAlert = true;
        this.alertText = "两次输入的密码不一致";
      } else if (!this.newUser.captcha_code) {
        this.showAlert = true;
        this.alertText = "请输入验证码";
      } else {
        this.$axios
          .post("https://elm.cangdu.org/v2/changepassword", this.newUser)
          .then(res => {
            console.log(res);
            this.showAlert = true;
            this.alertText = "密码修改成功";
          });
      }
    }
  },
  created() {
    this.getIdetifyCode();
  }
};
</script>

<style scoped>
.qaa {
  padding-top: 0.4rem;
}
section {
  border-bottom: 1px solid #f1f1f1;
  margin: 0;
  line-height: 0.25rem;
  height: 0.9rem;
  padding: 0.1rem 0.2rem;
  background-color: white;
}
input {
  width: 60%;
  font-size: 0.4rem;
  border: none;
  outline: none;
}

p {
  font-size: 0.25rem;
  color: red;
  text-align: left;
  padding: 0 0.2rem;
  margin-top: 0.2rem;
}
input[type="submit"] {
  width: 96%;
  color: white;
  background-color: #4cd964;
  border: none;
  padding: 0.2rem 0;
  margin: 0 2%;
}
.button-switch {
  height: 0.7rem;
  float: right;
  box-sizing: border-box;
  text-align: center;
  font-size: 0.3rem;
  position: relative;
  top: 0.4rem;
}
.qaa span {
  width: 4rem;
  background-color: #ccc;
  border-radius: 0.5rem;
  padding: 0 0.2rem;
}
.greenbaco {
  background-color: #4cd964;
}
.circle-div {
  width: 0.6rem;
  border-radius: 50%;
  height: 0.6rem;
  background-color: rgb(216, 212, 212);
  position: absolute;
  left: -0.1rem;
  top: -0.2rem;
}
.changetotext {
  left: 0.56rem;
}
a {
  font-size: 0.3rem;
  text-decoration: none;
  color: #3b95e9;
}
.lastp {
  text-align: right;
  padding: 0 0.2rem;
}
.changeimg {
  width: 1.2rem;
  float: right;
}
.changeimg p:nth-child(1) {
  color: #666;
}
.changeimg p:nth-child(2) {
  color: #3b95e9;
}
.alert {
  padding: 0;
  margin: 0;
  width: 6rem;
  height: 3.5rem;
  background: #fff;
  margin-top: -3rem;
  margin-left: -3rem;
  padding-top: 0.3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.type-icon {
  width: 1.4rem;
  height: 1.4rem;
  border: 0.05rem solid #f8cb86;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.type-icon span {
  color: #f8cb86;
  font-size: 1rem;
}

.alert p {
  font-size: 0.33rem;
  color: #333;
  line-height: 0.4rem;
  text-align: center;
  margin: 0;
  margin-top: 0.4rem;
  padding: 0 0.2rem;
}

.btn-t {
  font-size: 0.4rem;
  color: #fff;
  font-weight: 700;
  margin-top: 0.2rem;
  background-color: #4cd964;
  width: 100%;
  text-align: center;
  line-height: 0.9rem;
  border: 1px;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
</style>
