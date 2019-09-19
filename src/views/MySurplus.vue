<template>
  <div class="hello">
    <myheader :message="message" />
    <div class="wrap">
      <div class="content">
        <div class="top-line">
          当前积分
          <router-link to="mysurplus/intergraldec">
            <img src="../assets/qm.png" alt />
            积分说明
          </router-link>
        </div>
        <p>
          <span>0</span>分
        </p>
        <button @click="ended=true">积分兑换商品</button>
      </div>
    </div>
    <div class="bottom">
      <p>最近30天积分记录</p>
      <img src="../assets/nothing.png" alt />
      <p>最近30天无积分记录</p>
      <p class="littlefont">快去下单赚取大量积分吧</p>
    </div>
    <section v-show="ended">
      <div class="type-icon">
        <span>|</span>
        <span>.</span>
      </div>
      <p>快去下单赚取大量积分吧</p>
      <button @click="ended=false" class="btn-t">确认</button>
    </section>
  </div>
</template>

<script>
import myheader from "../components/Hearder";

export default {
  name: "mysurplus",
  data() {
    return {
      ended: false,
      message: "我的积分"
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
  background-color: #fe6d47;
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
.littlefont {
  color: #999999;
  font-size: 0.2rem;
}
section {
  width: 6rem;
  height: 4rem;
  background: #fff;
  margin: 0 auto;
  text-align: center;
  z-index: 2;
  position: absolute;
  top: 2.5rem;
  left: 0;
  right: 0;
}

.type-icon {
  width: 1.4rem;
  height: 1.4rem;
  border: 0.05rem solid #f8cb86;
  border-radius: 50%;
  margin: 0.4rem auto 0.4rem;
  position: relative;
}

.type-icon span {
  color: #f8cb86;
}

.type-icon span:first-child {
  font-size: 0.7rem;
  margin: 0 auto;
  position: absolute;
  top: -0.1rem;
  left: 0;
  right: 0;
}

section p {
  color: #333;
}

.btn-t {
  font-size: 0.4rem;
  color: #fff;
  font-weight: 700;
  margin-top: 0.2rem;
  background-color: #4cd964;
  width: 100%;
  text-align: center;
  line-height: 0.9rem;
  border: 1px;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
</style>
