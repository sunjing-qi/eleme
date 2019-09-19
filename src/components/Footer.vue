<template>
  <div class="myfooter">
    <router-link to="/mainpage">
      <section class="guide-item" @click="Select">
        <span class="eleme" :class="{eleme_no: select}"></span>
        <span>外卖</span>
      </section>
    </router-link>
    <router-link to="/search">
      <section class="guide-item" @click="Select1">
        <i class="fa fa-compass" :class="{checked: select1}"></i>
        <span>搜索</span>
      </section>
    </router-link>
    <router-link to="/myorder">
      <section class="guide-item" @click="Select2">
        <i class="fa fa-file-text-o" :class="{checked: select2}"></i>
        <span>订单</span>
      </section>
    </router-link>
    <router-link to="/mine">
      <section class="guide-item" @click="Select3">
        <i class="fa fa-user-o" :class="{checked: select3}"></i>
        <span>我的</span>
      </section>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "myfooter",
  data() {
    return {
      select: true,
      select1: false,
      select2: false,
      select3: false
    };
  },
  methods: {
    Select() {
      this.select = false;
      this.select1 = false;
      this.select2 = false;
      this.select3 = false;
    },
    Select1() {
      this.select = true;
      this.select1 = true;
      this.select2 = false;
      this.select3 = false;
    },
    Select2() {
      this.select = true;
      this.select1 = false;
      this.select2 = true;
      this.select3 = false;
    },
    Select3() {
      this.select = true;
      this.select1 = false;
      this.select2 = false;
      this.select3 = true;
    }
  }
};
</script>

<style scoped>
.myfooter {
  background-color: #fff;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-evenly;
  box-shadow: 0 -0.005rem 0.012rem;
}

a {
  display: inline-block;
}

.guide-item {
  flex: 1;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
}

.eleme {
  width: 0.5rem;
  height: 0.5rem;
  margin-top: 0.12rem;
  background: url(../assets/eleme_checked.png) no-repeat;
  background-size: cover;
}

.eleme_no {
  background: url(../assets/eleme.png) no-repeat;
  background-size: cover;
}

.guide-item i {
  font-size: 0.4rem;
  margin-top: 0.2rem;
  color: #666;
}

.guide-item .checked {
  color: rgb(18, 160, 255);
}

.guide-item span {
  font-size: 0.23rem;
  color: #666;
}
</style>
