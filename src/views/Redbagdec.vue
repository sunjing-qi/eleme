<template>
  <div>
    <myheader :message="message" />

    <div class="qaa">
      <p class="question">Q1:怎么获得红包？</p>
      <div class="answer">
        <p>通过邀请好友获得</p>
        <p>在下单返红包的商家下单获得</p>
        <p>抢微信朋友分享的红包获得</p>
      </div>
      <p class="question">Q2:红包可以做什么？</p>
      <div class="answer">
        <p>可以抵扣在线支付时的实际支付金额。</p>
      </div>
      <p class="question">Q3:红包的门槛金额按照什么金额算？</p>
      <div class="answer">
        <p>为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。</p>
      </div>
      <p class="question">Q4:一个红包能拆开多次使用吗？</p>
      <div class="answer">
        <p>不能，一个红包智能一次性使用，不能分开使用。</p>
      </div>
      <p class="question">Q5:下单的时候使用了红包，但是后来订单取消了，红包还会返还吗？</p>
      <div class="answer">
        <p>会的，订单无效后红包会自动返还到您的账户里。</p>
      </div>
      <p class="question">Q6:红包兑换码怎样兑换成红包，怎样查看红包？</p>
      <div class="answer">
        <p>在个人中心 &gt; 我的红包 &gt; 兑换红包，输入兑换码进行兑换。</p>
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
      message: "红包说明"
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