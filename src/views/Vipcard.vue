<template>
  <div>
    <myheader :message="message" />
    <div class="vipcard">
      <!-- 账户名取登陆之后的username -->
      <p class="title">为账户111购买会员</p>
      <div class="buff">
        <div class="buff-det">
          <p>会员特权</p>
          <!--接会员说明页面 -->
          <router-link to="/vipcard/vipcarddec">会员说明></router-link>
        </div>
        <div class="save">
          <img src="../assets/省.jpg" />
          <p>减免配送费</p>
          <p class="greycolor">每月减免30单，每日减免3单，每单最高减4元</p>
          <p class="greycolor">蜂鸟专送专享</p>
        </div>

        <div class="package">
          <img src="../assets/包.jpg" />
          <p>减免配送费</p>
          <p class="greycolor">每月减免30单，每日减免3单，每单最高减4元</p>
          <p class="greycolor">蜂鸟专送专享</p>
        </div>
      </div>
      <div class="payfor">
        <p>开通会员</p>
        <span>1个月</span>
        <span>￥20</span>
        <!-- 接购买页面 -->
        <router-link to="/confirmorder/payfor">购买</router-link>
      </div>
      <div class="change">
        <p>兑换会员</p>
        <router-link to="/vipcard/usecart">使用卡密卡号></router-link>
      </div>
      <div class="record">
        <p>购买记录</p>
        <!-- 接购买记录 -->
        <router-link to="/vipcard/buyrecord">开发票></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import myheader from "../components/Hearder";

export default {
  name: "vipcard",
  components: { myheader },
  data() {
    return {
      message: "会员中心"
    };
  }
};
</script>

<style scoped>
.title {
  font-size: 0.3rem;
  padding: 0.2rem;
}
.buff {
  background: #fff;
}
.buff-det {
  overflow: hidden;
  padding: 0.3rem;
}
.buff-det p {
  font-size: 0.3rem;
  float: left;
}
.buff-det a {
  font-size: 0.25rem;
  float: right;
  padding: 0.05rem;
  color: grey;
}
.greycolor {
  color: #999;
}
.save {
  overflow: hidden;
  border-bottom: 1px solid #f5f5f5;
  padding: 0.3rem;
}
.save img {
  width: 1rem;
  padding: 0.3rem 0.3rem;
  float: left;
  width: 0.75rem;
}
.save p {
  font-size: 0.25rem;
}
.save p:first-of-type {
  font-size: 0.35rem;
  padding-top: 0.25rem;
}
.package {
  overflow: hidden;
  border-bottom: 1px solid #f5f5f5;
  padding: 0.3rem;
}
.package img {
  width: 1rem;
  padding: 0.3rem 0.3rem;
  float: left;
  width: 0.75rem;
}
.package p {
  font-size: 0.25rem;
}
.package p:first-of-type {
  font-size: 0.35rem;
  padding-top: 0.25rem;
}
.payfor {
  background: #fff;
  font-size: 0.3rem;
  padding: 0.1rem;
  overflow: hidden;
}
.payfor p {
  border-bottom: 1px solid #f5f5f5;
  padding: 0.2rem;
}
.payfor span:first-of-type {
  margin: 0.2rem 0.1rem;
  line-height: 0.9rem;
}
.payfor span:last-of-type {
  color: red;
}
.payfor a {
  color: orangered;
  float: right;
  padding: 0.1rem 0.2rem;
  border: 1px solid #f60;
  border-radius: 0.1rem;
  margin: 0.1rem;
}
.change {
  overflow: hidden;
  padding: 0.3rem;
  margin: 0.2rem 0;
  background: #fff;
}
.change p {
  font-size: 0.3rem;
  float: left;
}
.change a {
  font-size: 0.25rem;
  float: right;
  padding: 0.05rem;
  color: grey;
}
.record {
  overflow: hidden;
  padding: 0.3rem;
  background: #fff;
}
.record p {
  font-size: 0.3rem;
  float: left;
}
.record a {
  font-size: 0.25rem;
  float: right;
  padding: 0.05rem;
  color: grey;
}
</style>