<template>
  <div>
    <myheader :message="message" />
    <div class="benefit" v-show="ydl">
      <div class="grad">
        <span v-on:click="part1=true,part2=false">红包</span>
        <span v-on:click="part2=true,part1=false">商家代金券</span>
      </div>
      <div v-if="part1" class="envelope">
        <div class="hongbao_title">
          <span class="num">有 3 个红包即将到期</span>
          <router-link class="hbdet" to="redbag/redbagdec">红包说明</router-link>
        </div>
        <section>
          <section>
            <ul>
              <li v-for="(data,index) in datas" :key="index">
                <div class="hongbao">
                  <div class="hongbao1">
                    <span>￥</span>
                    <span>{{data.amount}}</span>
                    <p>{{data.description_map.sum_condition}}</p>
                  </div>
                  <div class="hongbao2">
                    <p>{{data.name}}</p>
                    <p>{{data.description_map.validity_periods}}</p>
                    <p>{{data.description_map.phone}}</p>
                  </div>
                  <div>
                    <p id="restTime">{{data.description_map.validity_delta}}</p>
                  </div>
                </div>
              </li>
            </ul>
            <p class="limit">限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p>
          </section>
          <router-link class="hbHistory" to="benifit/redbaghistory">查看历史红包</router-link>
        </section>
        <div class="hongbao_footer">
          <router-link to="/benifit/exchange">兑换红包</router-link>
          <router-link to="benifit/commend">推荐有奖</router-link>
        </div>
      </div>
      <div v-if="part2" class="voucher">
        <router-link to="benifit/voucherdec">商家代金券说明</router-link>
        <img src="../assets/cant.png" />
        <p class="vou-p1">无法使用代金券</p>
        <p class="vou-p2">非客户端或者客户端版本过低</p>
        <router-link to="downloadapp">下载或升级客户端</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import myheader from "../components/Hearder";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      part1: true,
      part2: false,
      datas: [],
      message: "我的优惠",
      ydl: Boolean
    };
  },
  components: { myheader },
  computed: mapGetters(["isLogin"]),
  created() {
    this.ydl = this.isLogin;
    if (this.isLogin) {
      this.$axios
        .get(
          "https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0"
        )
        .then(res => {
          console.log(res.data);
          this.datas = res.data;
        });
    }
  }
};
</script>

<style scoped>
.grad {
  background: #fff;
  font-size: 0.35rem;
  height: 0.4rem;
  padding: 0.3rem;
  font-weight: lighter;
  width: 100%;
}
.grad span:first-child {
  margin-left: 1.4rem;
}
.grad span:last-child {
  margin-left: 2rem;
}
.num {
  font-size: 0.25rem;
  padding-left: 0.5rem;
}
.hbdet {
  font-size: 0.25rem;
  padding-left: 3rem;
}
.hongbao {
  height: 2.2rem;
  border: 1px solid red;
  margin: 0.2rem 0.2rem;
  border-radius: 0.2rem;
  position: relative;
  background: #fff;
  font-weight: lighter;
}
.hongbao span {
  color: red;
  font-weight: bold;
}
.hongbao span:nth-child(1) {
  font-size: 0.35rem;
  position: absolute;
  left: 0.2rem;
  bottom: 45%;
}
.hongbao span:nth-child(2) {
  font-size: 0.8rem;
  position: absolute;
  left: 0.5rem;
  bottom: 41%;
  font-weight: normal;
}
.hongbao span:nth-child(3) {
  font-size: 0.35rem;
  position: absolute;
  left: 0.9rem;
  bottom: 45%;
}
.hongbao span:nth-child(4) {
  font-size: 0.35rem;
  position: absolute;
  left: 1rem;
  bottom: 45%;
}
.hongbao p:nth-of-type(1) {
  font-size: 0.25rem;
  position: absolute;
  left: 0.15rem;
  bottom: 30%;
}
.hongbao2 p:first-child {
  font-size: 0.35rem;
  left: 2.2rem;
  top: 20%;
}
.hongbao2 p:nth-child(2) {
  font-size: 0.2rem;
  position: absolute;
  left: 2.2rem;
  top: 40%;
}
.hongbao2 p:nth-child(3) {
  font-size: 0.2rem;
  position: absolute;
  left: 2.2rem;
  top: 53%;
}
#restTime {
  color: red;
  font-size: 0.4rem;
  position: absolute;
  left: 5.5rem;
  top: 20%;
}
.limit {
  font-size: 0.25rem;
  color: grey;
  padding-left: 0.2rem;
}
.hbHistory {
  font-size: 0.25rem;
  color: grey;
  padding-left: 35%;
}
.hongbao_footer {
  font-size: 0.35rem;
  background: #fff;
  position: fixed;
  width: 100%;
  height: 0.5rem;
  bottom: 0;
  padding: 0.5rem;
  font-weight: lighter;
}
.hongbao_footer a:first-child {
  color: black;
  padding-left: 0.8rem;
}
.hongbao_footer a:last-child {
  color: black;
  padding-left: 2rem;
}
.voucher {
  position: relative;
  height: 6rem;
}
.voucher a:first-child {
  font-size: 0.25rem;
  position: absolute;
  right: 0.3rem;
  top: 0.5rem;
}
.vou-p1 {
  font-size: 0.35rem;
  position: absolute;
  left: 30%;
  top: 75%;
}
.vou-p2 {
  font-size: 0.3rem;
  position: absolute;
  left: 20%;
  top: 85%;
}
.voucher a:last-child {
  background: #56d176;
  font-size: 0.3rem;
  color: #fff;
  border-radius: 0.05rem;
  padding: 0.1rem;
  position: absolute;
  left: 30%;
  bottom: -5%;
}
img {
  position: absolute;
  left: 0.5rem;
  top: 1rem;
}
</style>