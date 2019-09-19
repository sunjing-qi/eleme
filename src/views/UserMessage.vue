<template>
  <div>
    <myheader :message="message" />
    <div class="tiao first">
      <router-link to="wenjianjia">
        <div class="textdec">
          <span>头像</span>
          <span>
            <img src="../assets/头像.jpg" />
          </span>
        </div>
        <i class="fa fa-angle-right"></i>
      </router-link>
    </div>

    <div class="tiao">
      <router-link to="/mine/info/setusername">
        <div class="textdec">
          <span>用户名</span>
          <span class="grey">{{username?username:11}}</span>
        </div>
        <i class="fa fa-angle-right"></i>
      </router-link>
    </div>

    <div class="tiao">
      <router-link to="/mine/info/address">
        <div class="textdec">
          <span>收货地址</span>
        </div>
        <i class="fa fa-angle-right"></i>
      </router-link>
    </div>
    <p>账号绑定</p>
    <div class="tiao" @click="phonealert=true">
      <div class="textdec bind">
        <span>
          <img src="../assets/小手机.png" />
          手机
        </span>
      </div>
      <i class="fa fa-angle-right"></i>
    </div>
    <p>安全设置</p>
    <div class="tiao">
      <router-link to="/forget">
        <div class="textdec">
          <span>登陆密码</span>
          <span class="grey">修改</span>
        </div>
        <i class="fa fa-angle-right"></i>
      </router-link>
    </div>
    <button @click="loginout=true">退出登录</button>
    <section class="alert" v-show="phonealert">
      <div class="type-icon">
        <span>!</span>
      </div>
      <p>请在手机APP中设置</p>
      <button class="btn-t" @click="phonealert=false">确认</button>
    </section>
    <div class="loginout" v-show="loginout">
      <section class="areusure">
        <div>
          <span class="gth">!</span>
        </div>
        <p>是否退出登录</p>
        <button class="wait huise" @click="loginout=false">再等等</button>
        <button class="wait" @click="sighout">退出登录</button>
      </section>
    </div>
  </div>
</template>

<script>
import myheader from "../components/Hearder";
import { mapGetters } from "vuex";

export default {
  components: {
    myheader
  },
  data() {
    return {
      message: "账户信息",
      phonealert: false,
      loginout: false
    };
  },
  computed: mapGetters(["username", "isLogin"]),
  methods: {
    sighout() {
      console.log("1");
      this.loginout = false;
      this.$store.dispatch("setIsLoginAsync", false);
      this.$router.replace("/mine");
    }
  }
};
</script>

<style scoped>
.loginout {
  width: 100%;
  height: 13rem;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
}
.areusure {
  width: 7rem;
  height: 6rem;
  background-color: white;
  position: absolute;
  top: 4rem;
  left: 0.2rem;
  text-align: center;
  padding: 0.6rem 0.3rem 0.3rem;
  box-sizing: border-box;
}
.areusure p {
  font-size: 0.7rem;
  margin: 0.2rem 0 0.3rem;
}
.wait {
  width: 2.5rem;
  border-radius: 0.1rem;
  font-size: 0.35rem;
}
.huise {
  background-color: #c1c1c1;
}
.gth {
  color: #f8bb86;
  border: 2px solid #f8bb86;
  border-radius: 50%;
  font-size: 1.5rem;
  padding: 0 0.8rem;
}
.tiao {
  padding: 0.2rem;
  width: 100%;
  line-height: 0.8rem;
  text-align: right;
  box-sizing: border-box;
  background-color: white;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.tiao a {
  color: #666;
}
.textdec {
  display: flex;
  float: left;
  justify-content: space-between;
  width: 6.5rem;
  font-size: 0.3rem;
  margin: 0;
}
.textdec img {
  width: 0.8rem;
}
.first {
  margin-top: 0.2rem;
}
.grey {
  color: #999;
}
.fa {
  color: #ccc;
  font-size: 0.5rem;
  vertical-align: middle;
}
p {
  font-size: 0.35rem;
  margin: 0.2rem;
}
.bind img {
  width: 0.5rem;
}
button {
  background-color: #d8584a;
  text-align: center;
  color: #fff;
  border-radius: 0.05rem;
  width: 7rem;
  margin: 0.3rem 0.2rem;
  border: none;
  padding: 0.2rem 0;
}
.alert {
  padding: 0;
  margin: 0;
  width: 6rem;
  height: 4rem;
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
  line-height: 0.7rem;
  border: 1px;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
</style>