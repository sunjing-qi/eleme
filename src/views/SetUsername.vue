<template>
  <div>
    <myheader :message="message" />
    <input
      type="text"
      placeholder="输入用户名"
      v-model="inputValue"
      @keyup="panduan"
      :class="{borderred:borderred}"
    />
    <p v-if="inputCorrect">用户名只能修改一次(5-24字符之间)</p>
    <p v-if="!inputCorrect" style="color:red">用户名长度在5到24位之间</p>
    <button :class="{canclick:canclick}" @click="changeName">确认修改</button>
  </div>
</template>

<script>
import myheader from "../components/Hearder";
import { mapGetters } from "vuex";
export default {
  name: "setusername",
  data() {
    return {
      message: "修改用户名",
      inputValue: "",
      inputCorrect: true,
      canclick: false,
      borderred: false
    };
  },
  components: {
    myheader
  },
  computed: mapGetters(["username"]),
  methods: {
    panduan() {
      if (this.inputValue.length > 4 && this.inputValue.length < 25) {
        this.inputCorrect = true;
        this.canclick = true;
        this.borderred = false;
      } else {
        this.inputCorrect = false;
        this.canclick = false;
        this.borderred = true;
      }
    },
    changeName() {
      if (this.canclick == true) {
        this.$store.dispatch("setUsernameAsync", this.inputValue);
      } else {
        this.inputCorrect = false;
        this.borderred = true;
      }
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
input {
  font-size: 0.35rem;
  margin: 0.2rem;
  padding: 0.2rem 0.1rem;
  width: 7.2rem;
  background-color: transparent;
  outline: none;
  border: 1px solid #ddd;
  box-sizing: border-box;
}
.borderred {
  border: 1px solid rgb(241, 48, 48);
}
p {
  font-size: 0.2rem;
  margin: 0 0.2rem 0.1rem;
}
button {
  background-color: #3f93e2;
  color: #fff;
  margin: 0.2rem;
  width: 7.2rem;
  text-align: center;
  box-sizing: border-box;
  border: none;
  border-radius: 0.05rem;
  padding: 0.2rem;
  opacity: 0.8;
}
.canclick {
  opacity: 1;
}
</style>