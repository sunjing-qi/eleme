<template>
  <div class="download-app">
    <myheader :message="message" />
    <img src="../assets/logo.jpg" alt class="logo-img" />
    <p>下载饿了么APP</p>
    <button @click="handleSubmit" class="btn-d">下载</button>
    <section v-show="ended">
      <div class="type-icon">
        <span>|</span>
        <span>.</span>
      </div>
      <p>IOS用户请前往AppStore下载</p>
      <button @click="handleunSubmit" class="btn-t">确认</button>
    </section>
  </div>
</template>

<script>
import myheader from "../components/Hearder";

export default {
  data() {
    return {
      ended: false,
      message: "下载"
    };
  },
  methods: {
    handleSubmit() {
      this.ended = true;
    },
    handleunSubmit() {
      this.ended = false;
    }
  },
  components: { myheader }
};
</script>

<style scoped>
.download-app {
  text-align: center;
}

.logo-img {
  border-radius: 0.47rem;
  margin-top: 0.47rem;
}

p {
  font-size: 0.38rem;
  color: #666;
  margin: 0.1rem 0;
}

.btn-d {
  width: 94%;
  background-color: #4cd964;
  font-size: 0.33rem;
  color: #fff;
  padding: 0.15rem;
  border-radius: 0.08rem;
  border: none;
}

section {
  width: 6rem;
  height: 4rem;
  background: #fff;
  margin: 0 auto;
  position: absolute;
  top: 4rem;
  left: 0;
  right: 0;
}

.type-icon {
  width: 1.4rem;
  height: 1.4rem;
  border: 0.05rem solid #f8cb86;
  border-radius: 50%;
  margin: 0.4rem auto 0.4rem;
  position: relative;
}

span {
  color: #f8cb86;
}

span:first-child {
  font-size: 0.7rem;
  margin: 0 auto;
  position: absolute;
  top: -0.1rem;
  left: 0;
  right: 0;
}

section p {
  color: #333;
}

.btn-t {
  font-size: 0.4rem;
  color: #fff;
  font-weight: 700;
  margin-top: 0.2rem;
  background-color: #4cd964;
  width: 100%;
  text-align: center;
  line-height: 0.9rem;
  border: 1px;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
</style>
