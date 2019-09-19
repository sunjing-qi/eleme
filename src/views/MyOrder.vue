<template>
  <div>
    <myheader :message="message" />
    <div class="orderlist" v-for="(order,index) in orderList" :key="index" v-show="ydl">
      <!-- <img src="../assets/刀叉.png" /> -->
      <img :src="imgBaseUrl+order.restaurant_image_url" />
      <router-link to="myorder/orderdetail">
        <div class="textdec" @click="getOrderId(order)">
          <p>
            <span class="shopname">
              {{order.restaurant_name}}
              <i class="fa fa-angle-right"></i>
            </span>
            <span>支付超时</span>
          </p>
          <p class="time">{{order.formatted_created_at.slice(0,10)}}</p>
          <p>
            <span>{{order.basket.group[0][0].name}}</span>
            <!-- order.basket.group[0][0].new_specs.price+ -->
            <span class="money">￥{{order.basket.deliver_fee.price+order.basket.packing_fee.price}}</span>
          </p>
        </div>
      </router-link>
      <div class="lastp">
        <span class="btn">再来一单</span>
      </div>
    </div>
    <div v-show="!ydl">请先登陆。</div>
    <myfooter />
  </div>
</template>

<script>
import myheader from "../components/Hearder";
import myfooter from "../components/Footer";
import { mapGetters } from "vuex";
export default {
  name: "myorder",
  data() {
    return {
      message: "订单列表",
      orderList: [],
      ydl: Boolean,
      imgBaseUrl: "https://elm.cangdu.org/img/"
    };
  },
  computed: mapGetters(["orderId", "isLogin"]),
  components: { myheader, myfooter },
  methods: {
    getOrderList() {
      this.$axios
        .get("https://elm.cangdu.org/bos/orders?offset=0&limit=20")
        .then(res => {
          console.log(res.data);
          this.orderList = res.data;
        });
    },
    getOrderId(order) {
      this.$store.dispatch("setOrderIdAsync", order.unique_id);
    }
  },
  created() {
    this.ydl = this.isLogin;
    if (this.isLogin) {
      this.getOrderList();
    }
  }
};
</script>

<style scoped>
.orderlist {
  background-color: white;
  padding: 0.2rem 0.05rem;
  font-size: 0.3rem;
  overflow: hidden;
  margin-bottom: 0.5rem;
}
.orderlist img {
  width: 1rem;
}

.orderlist p {
  display: flex;
  justify-content: space-between;
}
.textdec {
  width: 6rem;
  float: right;
  color: #666;
}
.shopname {
  font-size: 0.35rem;
}
.time {
  color: #999;
  font-size: 0.28rem;
  margin-bottom: 0.3rem;
}
.money {
  color: #f60;
  font-weight: 600;
}
.btn {
  color: #3190e8;
  border: 1px solid #3190e8;
  padding: 0.005rem 0.1rem;
  border-radius: 0.1rem;
}
.lastp {
  text-align: right;
  margin-top: 1.2rem;
}
</style>