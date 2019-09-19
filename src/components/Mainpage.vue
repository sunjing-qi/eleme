<template>
  <div class="mainpage">
    <myheader :message="message" />
    <div class="roll swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <ul>
            <router-link to="/sortpage" v-for="(type,key) in type1" :key="key">
              <img :src="'https://fuss10.elemecdn.com'+type.image_url" />
              <p>{{type.title}}</p>
            </router-link>
          </ul>
        </div>
        <div class="swiper-slide">
          <ul>
            <router-link to="/sortpage" v-for="(type,key) in type2" :key="key">
              <img :src="'https://fuss10.elemecdn.com'+type.image_url" />
              <p>{{type.title}}</p>
            </router-link>
          </ul>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="shops">
      <div class="shops_title">
        <img src="../assets/商店.png" />
        <p>附近商家</p>
      </div>
      <ul>
        <li v-for="(data,index) in datas" :key="index" class="shop">
          <router-link to="/shoppage">
            <img :src="'http://elm.cangdu.org/img/'+data.image_path" />
            <div class="shopheader">
              <h4>品牌</h4>
              <h4>{{data.name}}</h4>
              <ul>
                <li>票</li>
                <li>准</li>
                <li>保</li>
              </ul>
            </div>
            <h5 class="h5">
              <div class="left">
                <div>
                  <p class="cleanfloat starFive sF1">
                    <span class="org_star">&#9733</span>
                    <span class="org_star">&#9733</span>
                    <span class="org_star">&#9733</span>
                    <span class="org_star">&#9733</span>
                    <span class="org_star">&#9733</span>
                  </p>
                </div>
                <p class="point">{{data.rating}}</p>
                <p class="sold">月销{{data.recent_order_num}}单</p>
              </div>
              <div class="right">
                <span>{{data.delivery_mode.text}}</span>
                <span>准时达</span>
              </div>
            </h5>
            <h5 class="h5">
              <div class="left2">
                ￥{{data.float_minimum_order_amount}}起送
                <span>/</span>
                配送费约￥{{data.float_delivery_fee}}
              </div>
              <div class="right2">
                10km
                <span>/</span>40min
              </div>
            </h5>
          </router-link>
        </li>
      </ul>
      <p class="block"></p>
    </div>
    <myfooter />
  </div>
</template>



<script>
import myheader from "../components/Hearder";
import myfooter from "../components/Footer";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "mainpage",
  components: { myheader, myfooter },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  data() {
    return {
      type1: [],
      type2: [],
      datas: [],
      url: "",
      // message应该为地址信息
      message: "主界面"
    };
  },
  created() {
    this.$axios.get("https://elm.cangdu.org/v2/index_entry").then(res => {
      this.type1 = res.data.slice(0, 8);
      this.type2 = res.data.slice(8, 16);
    });
    this.$axios
      .get(
        "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762"
      )
      .then(res => {
        this.datas = res.data;
      });
  },
  methods: {}
};
</script>

<style scoped>
.roll {
  background: #fff;
  text-align: center;
  height: 4.3rem;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}
.roll ul a {
  color: grey;
  float: left;
  padding: 0.2rem 0.185rem;
  width: 1.5rem;
}
.roll img {
  width: 0.9rem;
}
.roll p {
  font-size: 0.25rem;
}
.shops {
  margin-top: 0.2rem;
  background: #fff;
}
.shops_title {
  height: 0.5rem;
  padding: 0.2rem;
  overflow: hidden;
}
.shops_title img {
  float: left;
}
.shops_title p {
  font-size: 0.3rem;
  font-weight: lighter;
  padding-left: 0.4rem;
}
.shop {
  overflow: hidden;
  border-bottom: 1px solid #f1f1f1;
  padding: 0.15rem 0;
}
.shop a {
  color: black;
}
.shop img {
  width: 1.2rem;
  float: left;
  padding: 0.2rem;
}
.shopheader {
  overflow: hidden;
}
.shopheader h4:first-child {
  font-size: 0.22rem;
  background: #ffd930;
  padding: 2px;
}
.shopheader h4:last-of-type {
  padding-left: 0.2rem;
}
.shopheader h4 {
  font-size: 0.3rem;
  float: left;
  max-width: 3rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.shopheader ul {
  padding-right: 0.15rem;
  color: #999;
}
.shopheader ul li {
  float: right;
  font-size: 0.25rem;
  border: 1px solid #ccc;
  padding: 0.025rem;
}
.h5 {
  font-weight: lighter;
  margin-top: 0.2rem;
  overflow: hidden;
}

.cleanfloat::after {
  display: block;
  content: "";
  visibility: hidden;
  height: 0;
  float: left;
}

.starFive span {
  display: block;
  float: left;
  font-size: 0.3rem;
  font-family: "AlluraRegular";
  text-align: center;
  color: #888;
  position: relative;
  overflow: hidden;
  white-space: pre;
  float: left;
}
.starFive span:before {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 50%;
  content: attr(data-content);
  overflow: hidden;
  color: #f63;
}
.sF1 span:before {
  width: 70%;
}

.starFive .org_star {
  color: #f63;
}
.starFive b {
  font-weight: normal;
  line-height: 40px;
  font-size: 25px;
  color: #888;
  margin-left: 10px;
}
.point {
  font-size: 0.25rem;
  padding: 0 0.1rem;
  float: left;
  color: #f63;
}
.sold {
  font-size: 0.2rem;
  float: left;
}
.right {
  float: right;
  font-size: 0.15rem;
  padding-right: 0.1rem;
}
.right span {
  padding: 0.05rem;
}
.right span:first-child {
  color: #fff;
  background: #3190e8;
}
.right span:last-child {
  color: #3190e8;
}
.left2 {
  font-size: 0.25rem;
  float: left;
}
.right2 {
  font-size: 0.25rem;
  float: right;
  padding-right: 0.2rem;
}
.right2 span {
  background: #fff;
}
.block {
  height: 1rem;
}
</style>