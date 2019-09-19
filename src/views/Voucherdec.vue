<template>
  <div>
    <myheader :message="message" />
    <div class="qaa">
      <p class="question">Q1:什么是商家代金券？</p>
      <div class="answer">
        <p>商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。</p>
      </div>
      <p class="question">Q2:怎么获得商家代金券？</p>
      <div class="answer">
        <p>进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。</p>
        <p>「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。</p>
      </div>
      <p class="question">Q3:商家代金券使用条件</p>
      <div class="answer">
        <p>商家代金券仅限在指定商家使用</p>
        <p>商家代金券仅限在线支付使用</p>
        <p>每个订单只能使用一张商家代金券，不可与其他代金券叠加使用</p>
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
      message: "代金券说明"
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