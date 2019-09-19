<template>
  <div class="hello">
    <myheader :message="message" />
    <router-link :to="url">
      <div class="logindiv">
        <span>
          <i class="fa fa-user-circle" v-show="!isLogin"></i>
          <img src="../assets/头像.jpg" v-show="isLogin" />
        </span>
        <div class="ps">
          <p v-show="isLogin">11</p>
          <p v-show="!isLogin">登陆/注册</p>
          <p>
            <i class="fa fa-mobile"></i>
            <span>暂无绑定手机号</span>
          </p>
        </div>
        <span>
          <i class="fa fa-angle-right"></i>
        </span>
      </div>
    </router-link>
    <div>
      <router-link to="balance">
        <div class="mythreemoney">
          <span style="color:#ff9900">0.00</span>元
          <p>我的余额</p>
        </div>
      </router-link>
      <router-link to="benifit">
        <div class="mythreemoney">
          <span style="color:#ff5f3e">{{isLogin?3:0}}</span>个
          <p>我的优惠</p>
        </div>
      </router-link>
      <router-link to="mysurplus">
        <div class="mythreemoney">
          <span style="color:#6ac20b">0</span>分
          <p>我的积分</p>
        </div>
      </router-link>
    </div>
    <div style="clear:both"></div>
    <div class="list-div">
      <router-link to="myorder">
        <div class="lists">
          <div>
            <img src="../assets/菜单.png" alt />
            我的订单
          </div>
          <i class="fa fa-angle-right"></i>
        </div>
      </router-link>
      <router-link to="intergralmall">
        <div class="lists">
          <div>
            <img src="../assets/积分商城.png" alt />
            积分商城
          </div>
          <i class="fa fa-angle-right"></i>
        </div>
      </router-link>
      <router-link to="vipcard">
        <div class="lists">
          <div>
            <img src="../assets/会员卡.png" alt />
            饿了么会员卡
          </div>
          <i class="fa fa-angle-right"></i>
        </div>
      </router-link>
    </div>
    <div class="list-div">
      <router-link to="servicecenter">
        <div class="lists">
          <div>
            <img src="../assets/正方形.png" alt />
            服务中心
          </div>
          <i class="fa fa-angle-right"></i>
        </div>
      </router-link>
      <router-link to="downloadapp">
        <div class="lists">
          <div>
            <img src="../assets/logo.jpg" alt />
            下载饿了么App
          </div>
          <i class="fa fa-angle-right"></i>
        </div>
      </router-link>
    </div>
    <myfooter />
  </div>
</template>

<script>
import myheader from "../components/Hearder";
import myfooter from "../components/Footer";
import { mapGetters } from "vuex";

export default {
  name: "minepage",
  components: { myheader, myfooter },
  data() {
    return {
      message: "我的",
      ydl: Boolean,
      url: "login"
    };
  },
  computed: mapGetters(["isLogin"]),
  methods: {
    com() {
      this.url = this.isLogin ? "/mine/info" : "login";
    }
  },
  created() {
    this.com();
  }
};
</script>

<style scoped>
a {
  font-size: 0.5rem;
  text-decoration: none;
}
.logindiv {
  display: flex;
  align-items: center;
  color: white;
  padding: 0 0.3rem;
  background-color: #3190e8;
}
.logindiv img {
  width: 1.1rem;
  border-radius: 50%;
}
.logindiv span {
  display: inline-block;
  font-size: 1.2rem;
  vertical-align: middle;
}
.ps {
  margin-left: 0.24rem;
  flex-grow: 1;
}

.ps p {
  font-weight: 700;
  font-size: 0.4rem;
  color: #fff;
  margin: 0;
}

.ps span {
  display: inline-block;
  font-size: 0.25rem;
  color: #fff;
}

.ps i {
  font-size: 0.5rem;
  vertical-align: middle;
  margin-right: 0.1rem;
}

.fa-angle-right {
  font-size: 0.5rem;
  vertical-align: middle;
}

.mythreemoney {
  width: 33%;
  float: left;
  padding: 0.2rem;
  padding-bottom: 0;
  box-sizing: border-box;
  font-size: 0.3rem;
  text-align: center;
  background-color: white;
  border-right: 1px solid #f1f1f1;
  color: #666666;
}

.mythreemoney span {
  font-size: 0.5rem;
  margin: 0.2rem 0;
  font-weight: 500;
}
.list-div {
  margin-top: 0.2rem;
  background-color: white;
  width: 100%;
}
.lists {
  padding: 0.2rem;
  display: flex;
  font-size: 0.3rem;
  color: #333333;
  justify-content: space-between;
  border-bottom: 1px solid #f1f1f1;
}

.lists img {
  width: 0.3rem;
  height: 0.3rem;
}
</style>
