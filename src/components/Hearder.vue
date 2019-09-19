<template>
  <div class="hello">
    <i class="fa fa-angle-left" @click="$router.go(-1)"></i>
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  name: "myheader",
  props: ["message"]
};
</script>

<style scoped>
.hello {
  background-color: #3190e8;
  font-size: 0.4rem;
  font-weight: 400;
  text-align: center;
  padding: 0.2rem;
  box-sizing: border-box;
  color: white;
  width: 100%;
}
.fa {
  float: left;
}
</style>
