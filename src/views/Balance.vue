<template>
  <div class="hello">
    <myheader :message="message" />
    <div class="wrap">
      <div class="content">
        <div class="top-line">
          当前余额
          <router-link to="balance/balancedec">
            <img src="../assets/qm.png" alt />
            余额说明
          </router-link>
        </div>
        <p>
          <span>0.00</span>元
        </p>
        <button @click="ended=true">提现</button>
      </div>
    </div>
    <div class="bottom">
      <p>交易明细</p>
      <img src="../assets/nothing.png" alt />
      <p>暂无明细记录</p>
    </div>
  </div>
</template>

<script>
import myheader from "../components/Hearder";

export default {
  name: "mysurplus",
  data() {
    return {
      ended: false,
      message: "我的余额"
    };
  },
  components: { myheader }
};
</script>

<style scoped>
p {
  font-size: 0.3rem;
}
.top-line {
  font-size: 0.25rem;
}
p span {
  font-size: 0.8rem;
}
.wrap {
  width: 100%;
  background-color: #3190e8;
  padding: 0.15rem;
}
.top-line {
  display: flex;
  justify-content: space-between;
}
.top-line img {
  width: 0.3rem;
}
.content {
  width: 94%;
  background-color: white;
  padding: 0.2rem;
  box-sizing: border-box;
  border-radius: 0.05rem;
}
.content button {
  width: 6.6rem;
  background-color: #ccc;
  font-size: 0.35rem;
  padding: 0.2rem;
  color: #fff;
  border-radius: 0.05rem;
  margin-top: 0.6rem;
  text-align: center;
  border: none;
}
.bottom {
  padding: 0.2rem;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}
.bottom p:nth-child(1) {
  text-align: left;
  color: #999999;
  font-size: 0.25rem;
}
</style>
