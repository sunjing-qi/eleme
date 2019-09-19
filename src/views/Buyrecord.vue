<template>
  <div>
    <myheader :message="message" />
    <div class="qaa">
      <img src="../assets/nothing.png" alt />
      <p>没有购买记录</p>
    </div>
  </div>
</template>

<script>
import myheader from "../components/Hearder";
export default {
  name: "buyrecord",
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
  text-align: center;
  font-size: 0.4rem;
  color: #666;
  padding-top: 2rem;
  height: 13rem;
  background-color: white;
}
</style>