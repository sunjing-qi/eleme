<template>
  <div>
    <myheader :message="message" />
    <div class="qaa">
      <div class="special">
        尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化：
        购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。
        注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。
      </div>
      <p class="question">Q1:特权介绍</p>
      <div class="answer">
        <p>身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</p>
        <p>减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</p>
        <p>更多特权，敬请期待！</p>
      </div>
      <p class="question">Q2:资费介绍</p>
      <div class="answer">
        <p>饿了么会员卡：20元</p>
      </div>
      <p class="question">Q3:使用说明</p>
      <div class="answer">
        <p>当用户满足以下任一条件，会员服务自动失效：</p>
        <div class="special">
          <p>自绑定之日起超过31天；</p>
          <p>在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</p>
        </div>
      </div>
      <p class="question">Q4:购卡说明</p>
      <div class="answer">
        <p>在线购买：饿了么App&gt;我的&gt;饿了么会员卡</p>
      </div>
      <p class="question">Q5:温馨提示</p>
      <div class="answer">
        <p>用户在当前会员服务失效前，无法购买新卡。</p>
        <p>请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</p>
      </div>
    </div>
  </div>
</template>

<script>
import myheader from "../components/Hearder";
export default {
  name: "intergraldec",
  components: { myheader },
  data() {
    return {
      message: "我的优惠"
    };
  }
};
</script>

<style scoped>
.qaa {
  width: 100%;
  background-color: white;
  padding: 0.2rem;
  box-sizing: border-box;
}
.special {
  font-size: 0.28rem;
  color: #666;
  margin: 0.2rem 1rem;
}
.question {
  font-size: 0.33rem;
  margin-bottom: 0.2rem;
}
.answer p {
  font-size: 0.28rem;
  color: #666;
  margin-bottom: 0.2rem;
}
</style>