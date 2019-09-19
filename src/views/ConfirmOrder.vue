<template>
  <div>
    <myheader :message="message" />
    <router-link to="mine">
      <i class="fa fa-user-o"></i>
    </router-link>
    <div class="centerpart">
      <router-link to="chooseAddress">
        <div class="xiamian partone flex">
          <i class="fa fa-map-marker"></i>
          <div class="infodetail">
            <p>
              <span class="username">12</span>先生 13245674567
            </p>
            <p class="address">
              <span class="company">公司</span> 中北大学
            </p>
          </div>
          <i class="fa fa-angle-right"></i>
        </div>
      </router-link>
      <div class="baco"></div>
      <div class="parttwo xiamian flex">
        <p class="dtime">送达时间</p>
        <section>
          <p>尽快送达|预计17：04</p>
          <span>蜂鸟专送</span>
        </section>
      </div>
      <div class="partthree xiamian">
        <p class="flex" @click="paywayshow=true">
          <span class="payway">支付方式</span>
          <span>
            在线支付
            <i class="fa fa-angle-right"></i>
          </span>
        </p>
        <p class="flex">
          <span>红包</span>
          <span>暂时只在饿了么APP支持</span>
        </p>
      </div>
      <div v-show="paywayshow" class="payment">
        <div class="blackblock" @click="paywayshow=false"></div>
        <div class="whiteblock">
          <p>支付方式</p>
          <p class="flex nsupport">
            <span>货到付款（商家不支持货到付款）</span>
            <i class="fa fa-check-circle"></i>
          </p>
          <p class="flex">
            <span>在线支付</span>
            <i class="fa fa-check-circle green" @click="paywayshow=false"></i>
          </p>
        </div>
      </div>
      <div class="xiamian partfour">
        <div>
          <img src="../assets/刀叉.png" />
          333
        </div>
        <p class="flex">
          <span>1231</span>
          <span class="flex">
            <span class="orange">x1</span>
            <span>￥20</span>
          </span>
        </p>
        <p class="flex">
          <span>餐盒</span>
          <span>￥197</span>
        </p>
        <p class="flex">
          <span>配送费</span>
          <span>￥4</span>
        </p>
        <p class="flex">
          <span>订单 ￥241</span>
          <span class="orange">￥241</span>
        </p>
      </div>
      <div class="xiamian partfive">
        <router-link to="/confirmorder/orderremark">
          <p class="flex">
            <span class="dec">订单备注</span>
            <span>
              {{remark?remark:"口味偏好等"}}
              <i class="fa fa-angle-right"></i>
            </span>
          </p>
        </router-link>
        <router-link to="/confirmorder/invoice">
          <p class="flex">
            <span class="dec">发票抬头</span>
            <span>
              不需要开发票
              <i class="fa fa-angle-right"></i>
            </span>
          </p>
        </router-link>
      </div>
    </div>
    <div class="footdiv" v-show="!paywayshow">
      <span>待支付 ￥200</span>
      <router-link to="confirmorder/payfor">
        <span>确认下单</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import myheader from "../components/Hearder";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      message: "确认订单",
      paywayshow: false
    };
  },
  components: {
    myheader
  },
  computed: mapGetters(["remark"])
};
</script>

<style scoped>
a {
  color: #ccc;
}
.footdiv {
  position: fixed;
  bottom: 0;
  background-color: #3c3c3c;
  color: white;
  font-size: 0.35rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.footdiv span {
  padding: 0.25rem 0.3rem;
}
.footdiv a {
  background-color: #56d176;
  color: white;
  line-height: 1rem;
}
.fa-user-o {
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  color: white;
  font-size: 0.4rem;
}
.centerpart {
  font-size: 0.3rem;
  color: #333;
}
.xiamian {
  padding: 0.3rem;
  box-sizing: border-box;
  background-color: white;
  margin-bottom: 0.2rem;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.partone {
  margin: 0;
  color: #333;
}
.centerpart .fa {
  line-height: 1rem;
}
.fa-map-marker {
  color: #3190e8;
  font-size: 0.4rem;
}
.infodetail {
  width: 6rem;
  margin-left: 0.3rem;
}
.username {
  font-size: 0.4rem;
  color: black;
  font-weight: 700;
}
.address {
  font-size: 0.25rem;
}
.company {
  background-color: #56d176;
  color: white;
  padding: 0 0.05rem;
  border-radius: 0.05rem;
}

.baco {
  width: 100%;
  height: 0.05rem;
  background: url("../assets/rbborder.png") repeat-x;
}
.parttwo {
  border-left: 0.1rem solid #3190e8;
  margin-top: 0.2rem;
}
.parttwo .dtime {
  font-size: 0.4rem;
  font-weight: 800;
  line-height: 1.5rem;
}
.parttwo section {
  text-align: right;
  color: #3190e8;
  margin-top: 0.15rem;
  overflow: hidden;
}
.parttwo section p {
  margin-bottom: 0.2rem;
}
.parttwo section span {
  color: white;
  background-color: #3190e8;
  font-size: 0.25rem;
  padding: 0 0.1rem;
  border-radius: 0.05rem;
}
.partthree {
  padding-top: 0;
  color: #aaa;
}
.payway {
  font-size: 0.35rem;
  line-height: 1rem;
  color: #333;
}
.payment {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
}
.payment .blackblock {
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 70%;
}
.payment .whiteblock {
  position: fixed;
  width: 100%;
  padding: 0.3rem 0.3rem 1rem;
  font-size: 0.35rem;
  box-sizing: border-box;
  bottom: 0;
  background-color: white;
  text-align: center;
}
.whiteblock p {
  line-height: 1rem;
}
.nsupport {
  color: #ccc;
}
.whiteblock .green {
  color: #56d176;
}
.orange {
  color: #f60;
}
.partfour img {
  width: 0.8rem;
}
.partfour p {
  padding: 0.2rem 0;
}
.dec {
  color: #666;
  font-size: 0.32rem;
  line-height: 1rem;
}
.partfive {
  margin-bottom: 1.4rem;
}
</style>