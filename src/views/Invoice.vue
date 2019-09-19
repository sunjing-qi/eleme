<template>
  <div>
    <myheader :message="message" />
    <div class="need">
      不需要开发票
      <span :class="{green:greenbaco}" @click="greenbaco=!greenbaco">
        <i class="fa fa-check"></i>
      </span>
    </div>
    <button @click="$router.go(-1)">确定</button>
  </div>
</template>

<script>
import myheader from "../components/Hearder";
export default {
  name: "invoice",
  data() {
    return {
      greenbaco: false,
      message: "选择发票抬头"
    };
  },
  components: { myheader }
};
</script>

<style scoped>
.need {
  font-size: 0.35rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
  margin-top: 0.2rem;
}
button {
  background-color: #4cd964;
  color: #fff;
  font-size: 0.35rem;
  text-align: center;
  margin: 0.1rem 0.3rem;
  padding: 0.25rem 0;
  border-radius: 0.05rem;
  width: 92%;
  border: none;
}
span {
  background-color: #999;
  border-radius: 50%;
  width: 0.45rem;
  height: 0.45rem;
  text-align: center;
}
.need span i {
  color: #fff;
}
.green {
  background-color: #4cd964;
}
</style>