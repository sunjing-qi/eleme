<template>
  <div>
    <myheader :message="message" />
    <div class="qaa">
      <img src="../assets/nothing.png" alt />
      <p>这里什么都没有，去别处看看吧</p>
    </div>
  </div>
</template>

<script>
import myheader from "../components/Hearder";

export default {
  name: "interfralmall",
  components: { myheader },
  data() {
    return {
      message: "积分商城"
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