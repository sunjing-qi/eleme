<template>
  <div>
    <myheader :message="message" />
    <div class="hbHistory">
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
              <img src="../assets/过期.png" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import myheader from "../components/Hearder";

export default {
  data() {
    return {
      datas: [],
      message: "历史红包"
    };
  },
  components: { myheader },
  created() {
    this.$axios
      .get(
        "https://elm.cangdu.org/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0"
      )
      .then(res => {
        console.log(res.data);
        this.datas = res.data;
      });
  }
};
</script>

<style scoped>
.hongbao {
  height: 2.2rem;
  border: 1px solid grey;
  margin: 0.2rem 0.2rem;
  border-radius: 0.2rem;
  position: relative;
  background: #fff;
  font-weight: lighter;
}
.hongbao span {
  color: grey;
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
img {
  position: absolute;
  right: 0.4rem;
  top: 0.1rem;
}
</style>