<template>
  <div>
    <myheader :message="message" />
    <div class="add_detail">
      <section>
        <div class="search">
          <input type="text" placeholder="请输入小区/写字楼/学校等" v-model="inputAddress" />
          <button @click="inputThing">确认</button>
        </div>
        <div class="warnpart">为了满足商家的送餐要求，建议您从列表中选择地址</div>
        <div class="point" v-show="warning">
          <p>找不到地址？</p>
          <p>请尝试输入小区、写字楼或学校名</p>
          <p>详细地址（如门牌号）可稍后输入哦。</p>
        </div>
      </section>
      <section class="search-container" v-show="addressList">
        <ul>
          <li v-for="(item, index) in addressList" :key="index" @click="listClick(index)">
            <p>{{item.name}}</p>
            <p>{{item.address}}</p>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import myheader from "../components/Hearder";
import { mapGetters } from "vuex";
export default {
  name: "AddDetail",
  data() {
    return {
      message: "搜索地址",
      inputAddress: "",
      warning: true,
      addressList: []
    };
  },
  components: { myheader },
  methods: {
    inputThing(inputAddress) {
      this.$axios.get("https://elm.cangdu.org/v1/pois").then(res => {
        console.log(res.data);
        this.addressList = res.data;
        if (this.inputAddress.length > 0) {
          this.addressList = [
            { name: "中北大学", address: "山西省太原市尖草坪区学院路3号" },
            {
              name: "中北大学七道门",
              address: "山西省太原市尖草坪区学院路3号"
            },
            {
              name: "中北酒店",
              address: "山西省太原市尖草坪区学院路3号中北大学新南区"
            }
          ];
          this.warning = false;
          if (this.inputAddress == "") {
            this.addressList = [];
            this.warning = true;
          }
        }
      });
    },
    listClick(index) {
      this.$store.dispatch("setAddressAsync", this.index);
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.search {
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 0.24rem;
}

.search input {
  display: block;
  width: 5.5rem;
  padding: 0.15rem;
  background: #f2f2f2;
  border: 0.01rem solid #ddd;
  border-radius: 0.05rem;
  font-size: 0.28rem;
  outline: none;
}

.search button {
  display: block;
  width: 1.4rem;
  background: #3199e8;
  font-size: 0.3rem;
  color: #fff;
  border-radius: 0.05rem;
  border: none;
  outline: none;
}

.warnpart {
  background: #fff6e4;
  font-size: 0.28rem;
  color: #ff883f;
  text-align: center;
  padding: 0.1rem 0;
}

.point {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.point p {
  width: 100%;
  text-align: center;
  font-size: 0.33rem;
  color: #969696;
  margin-bottom: 0.14rem;
}

.search-container {
  background: #f2f2f2;
}

.search-container li {
  border-bottom: 0.01rem solid #ccc;
  padding: 0.2rem;
}

.search-container li p {
  font-size: 0.3rem;
  color: #969696;
  margin-bottom: 0;
}

.search-container li p:first-child {
  margin-bottom: 0.1rem;
}
</style>