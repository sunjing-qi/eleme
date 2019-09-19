<template>
  <div>
    <myheader :message="message" />
    <div class="block">
      <p>活动与属性</p>
      <ul>
        <li>
          <span class="littledec jian">减</span>
          <span>满30减5，满60减8（APP专享）</span>
        </li>
        <li>
          <span class="littledec">保</span>
          <span>已加入“外卖保”计划，食品安全有保障(APP专享)</span>
        </li>
        <li>
          <span class="littledec zhun">准</span>
          <span>准时必达，超时秒赔(APP专享)</span>
        </li>
      </ul>
    </div>
    <div class="block">
      <p class="flex">
        <span>食品监督安全公示</span>
        <router-link to="/shop/shopdetail/shopsafe">
          <span class="rzxq">
            企业认证详情
            <i class="fa fa-angle-right"></i>
          </span>
        </router-link>
      </p>
      <img src="../assets/笑脸.png" />
      <div class="jiancha">
        <span>
          监督检查结果：
          <span class="green">良好</span>
        </span>
        <br />
        <span>检查日期</span>
      </div>
    </div>
    <div class="block partthree">
      <p>商家信息</p>
      <p>店名</p>
      <p>地址：上海这里那里</p>
      <p>营业时间：[8:30/20:30]</p>
      <p class="flex" @click="show=true">
        <span>营业执照</span>
        <i class="fa fa-angle-right"></i>
      </p>
      <p class="flex" @click="show=true">
        <span>餐饮服务许可证</span>
        <i class="fa fa-angle-right"></i>
      </p>
    </div>
    <section v-show="show" @click="show=false">
      <img src="../assets/许可证书.jpg" />
    </section>
  </div>
</template>
<script>
import myheader from "../components/Hearder";
export default {
  components: { myheader },
  data() {
    return {
      message: "商家详情",
      show: false
    };
  }
};
</script>
<style scoped>
.block {
  background-color: white;
  margin-top: 0.2rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0.2rem 0.3rem;
  font-size: 0.26rem;
  color: #666;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.block p:first-child {
  font-size: 0.35rem;
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 0.2rem;
  margin-bottom: 0.2rem;
}
ul {
  list-style-type: none;
}
.littledec {
  background-color: rgb(153, 153, 153);
  color: white;
  margin-right: 0.2rem;
  padding: 0.02rem;
}
.jian {
  background-color: rgb(240, 115, 115);
}
.zhun {
  background-color: rgb(87, 169, 255);
}
ul li {
  line-height: 0.8rem;
}
.rzxq {
  color: #bbb;
  font-size: 0.3rem;
}
.jiancha {
  float: right;
  width: 5rem;
  padding: 0.2rem;
}
.jiancha span {
  line-height: 0.5rem;
}
.jiancha .green {
  color: #7ed321;
}
.partthree p {
  line-height: 0.8rem;
  font-size: 0.28rem;
}
.partthree p:first-child {
  line-height: 0.6rem;
  font-size: 0.35rem;
}
section {
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  height: 13.3rem;
  width: 100%;
}
section img {
  width: 100%;
  margin-top: 3rem;
}
</style>