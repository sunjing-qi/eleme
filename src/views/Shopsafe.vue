<template>
  <div>
    <myheader :message="message" />
    <div class="block">
      <p>食品监督安全公示</p>
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
    <div class="block">
      <p>工商登记信息</p>
      <p>企业名称</p>
      <p>工商执照注册号</p>
      <p>注册资本</p>
      <p>注册地址</p>
      <p>属地监管所</p>
      <p>法定代表人</p>
      <p>经营范围</p>
    </div>
    <div class="block">
      <p>餐饮许可证</p>
      <p>营业范围</p>
      <p>许可证有效期</p>
      <p>许可证号</p>
      <p>发证时间</p>
      <p>发证机关</p>
    </div>
    <div class="block">
      <p>许可证书</p>
      <div class="pic">
        <img src="../assets/许可证书.jpg" />
        <img src="../assets/许可证书.jpg" />
      </div>
    </div>
  </div>
</template>
<script>
import myheader from "../components/Hearder";
export default {
  components: { myheader },
  data() {
    return {
      message: "食品监督安全公示"
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
.block p {
  line-height: 0.7rem;
}
.block p:first-child {
  font-size: 0.35rem;
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 0.2rem;
  margin-bottom: 0.2rem;
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
.pic {
  background-color: #ebebeb;
  padding: 0.2rem;
  box-sizing: border-box;
}
.pic img {
  width: 3rem;
  margin: 0 0.1rem;
}
</style>