<template>
  <div>
    <myheader :message="message" />
    <div class="qaa">
      <p class="question">Q1:使用余额的条件</p>
      <div class="answer">
        <p>为了保护账户安全，使用余额前必须先绑定手机号。</p>
      </div>
      <p class="question">Q2:余额可以怎么用？</p>
      <div class="answer">
        <p>余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。</p>
      </div>
      <p class="question">Q3:我要如何提现？</p>
      <div class="answer">
        <p>为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。</p>
      </div>
      <p class="question">Q4:为什么会提现失败？</p>
      <div class="answer">
        <p>可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。</p>
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
      message: "余额问题"
    };
  }
};
</script>

<style scoped>
.qaa {
  width: 100%;
  /* height: 13rem; */
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