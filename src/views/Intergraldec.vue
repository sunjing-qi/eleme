<template>
  <div>
    <myheader :message="message" />
    <div class="qaa">
      <p class="question">Q1:怎么获取积分？</p>
      <div class="answer">
        <p>在线支付的订单将获得订单积分奖励：</p>
        <p>积分将在用户完成评价后获得。</p>
        <p>可获得积分=订单金额x10（即1元=10积分）</p>
        <p>订单金额指实际付款金额，不包含活动优惠金额</p>
        <p>每位用户媒体最多可以获得2000积分，体验商家的订单和评价不会增加积分。</p>
      </div>
      <p class="question">Q2:积分用来做什么？</p>
      <div class="answer">
        <p>可以在积分商城兑换各种礼品。</p>
      </div>
      <p class="question">Q3:礼品兑换很多天了还没有收到，怎么办？</p>
      <div class="answer">
        <p>礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。</p>
      </div>
      <p class="question">Q4:礼品兑换中的手机充值卡兑换，怎么样进行充值，充值之前会和我电话确认吗？</p>
      <div class="answer">
        <p>不会。手机充值卡兑换，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以在您填写电话的时候，请确认电话是否正确。</p>
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
      message: "积分问题"
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