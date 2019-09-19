<template>
  <div>
    <myheader :message="message" />
    <div class="whiteblock firstpart">
      <img src="../assets/刀叉.png" />
      <p class="overtime">支付超时</p>
      <p>
        <span class="onemore">再来一单</span>
      </p>
    </div>
    <div class="whiteblock twopart">
      <router-link to="shop">
        <div class="tiao">
          <img src="../assets/刀叉.png" />
          <span>333</span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <i class="fa fa-angle-right"></i>
        </div>
      </router-link>
      <div class="tiao">
        <span>1231</span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span style="color:#ccc">x1</span>
        <span>￥20</span>
      </div>
      <div class="tiao">
        <span>配送费</span>
        <span>4</span>
      </div>
      <div class="truemoney">
        <p>
          <span>实付6000</span>
        </p>
      </div>
    </div>
    <div class="whiteblock threepart">
      <p class="songinfo">配送信息</p>
      <p>送达时间：</p>
      <p>送货地址：</p>
      <p>配送方式：蜂鸟专送</p>
    </div>
    <div class="whiteblock threepart">
      <p class="songinfo">订单信息</p>
      <p>订单号：12345</p>
      <p>支付方式：在线支付</p>
      <p>下单时间：2019-09 08：14</p>
    </div>
  </div>
</template>

<script>
import myheader from "../components/Hearder";
import { mapGetters } from "vuex";
export default {
  name: "orderdetail",
  computed: mapGetters(["orderId"]),
  components: {
    myheader
  },
  data() {
    return {
      message: "订单详情",

      user_id: "12",
      order_id: Number
    };
  },
  methods: {
    getOrderId() {
      this.order_id = this.orderId;
      this.$axios
        .get(
          "https://elm.cangdu.org/bos/v1/users/:user_id/orders/:order_id/snapshot"
        )
        .then(res => {
          console.log(res.data);
        });
    }
  },
  created() {
    this.getOrderId();
  }
};
</script>

<style  scoped>
a {
  color: #666;
}
.whiteblock {
  background-color: white;
  margin-bottom: 0.3rem;
  font-size: 0.3rem;
}
.firstpart {
  text-align: center;
  padding: 0.3rem 0;
}
.firstpart img {
  width: 1.5rem;
  border-radius: 50%;
  border: 1px solid #3190e8;
  overflow: hidden;
  vertical-align: middle;
}
.overtime {
  font-size: 0.4rem;
  font-weight: 600;
  margin: 0.3rem 0;
}
.firstpart .onemore {
  border-radius: 0.05rem;
  border: 1px solid #3190e8;
  color: #3190e8;
  padding: 0.1rem 0.2rem;
}
.twopart img {
  width: 0.65rem;
}
.tiao {
  padding: 0.2rem 0.3rem;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
}
.twopart a {
  font-size: 0.34rem;
  font-weight: 800;
  line-height: 0.65rem;
}
.truemoney {
  padding: 0.2rem 0.3rem;
  color: #fb6b23;
  text-align: right;
}
.threepart p {
  padding: 0.2rem 0.3rem;
}
.songinfo {
  font-size: 0.34rem;
  border-bottom: 1px solid #f5f5f5;
}
</style>