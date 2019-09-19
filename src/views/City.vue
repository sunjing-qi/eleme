<template>
  <div>
    <myheader :message="message" />
    <div class="city">
      <section class="change_city">
        <router-link to="home">切换城市</router-link>
      </section>
      <div class="city_form">
        <form>
          <input
            type="search"
            name="city"
            placeholder="输入学校、商务楼、地址"
            class="city_input input_style"
            required
            v-model="inputVaule"
          />
          <router-link to="/mainpage">
            <input
              @click="postCity"
              type="submit"
              name="submit"
              class="city_submit input_style"
              value="提交"
            />
          </router-link>
        </form>
      </div>
      <div v-if="historytitle" class="search_history">搜索历史</div>
      <ul class="get_ul">
        <router-link to="/mainpage/">
          <li v-for="(item, index) in placelist" :key="index" v-show="history">
            <h4 class="name ellipsis">{{item.name}}</h4>
            <p class="address ellipsis">{{item.address}}</p>
          </li>
        </router-link>
      </ul>
      <div class="clear_all_history" @click="clearAll">清空所有</div>
      <div class="search_none_place" v-if="placeNone">很抱歉！无搜索结果</div>
    </div>
  </div>
</template>

<script>
import myheader from "../components/Hearder";
export default {
  data() {
    return {
      message: "太原",
      inputVaule: "", // 搜索地址
      cityid: "", // 当前城市id
      cityname: "", // 当前城市名字
      placelist: [
        { name: "中北大学", address: "山西省太原市尖草坪区学院路3号" },
        { name: "中北大学七道门", address: "山西省太原市尖草坪区学院路3号" },
        { name: "中北酒店", address: "山西省太原市尖草坪区学院路3号中北大学" }
      ], // 搜索城市列表
      placeHistory: [], // 历史搜索记录
      historytitle: true, // 默认显示搜索历史头部，点击搜索后隐藏
      placeNone: false, // 搜索无结果，显示提示信息
      history: true
    };
  },
  components: { myheader },
  //   created() {
  //     // this.getCity();
  //   },
  methods: {
    // getCity() {
    //     this.$axios.get("https://elm.cangdu.org/v1/cities/:id").then(res => {
    //       console.log(res.data);
    //     });
    // },
    postCity() {
      //输入值不为空时才发送信息
      if (this.inputVaule) {
        searchplace(this.cityid, this.inputVaule).then(res => {
          this.historytitle = false;
          this.placelist = res;
          this.placeNone = res.length ? false : true;
        });
      }
      this.$router.replace("/Home");
    },
    clearAll() {
      this.history = false;
    }
  }
};
</script>

<style scoped>
.city {
  background: #f5f5f5;
  margin-top: 0;
}

.change_city {
  position: absolute;
  right: 0.2rem;
  top: -0.55rem;
}

.change_city a {
  font-size: 0.3rem;
  color: #fff;
}

.city_form {
  background-color: #fff;
  border-top: 0.01rem solid #e4e4e4;
  border-bottom: 0.01rem solid #e4e4e4;
  margin-top: 0.2rem;
  text-align: center;
}

.input_style {
  border-radius: 0.05rem;
  width: 7rem;
  padding: 0.2rem 0;
  outline: none;
  vertical-align: middle;
}

.city_input {
  border: 0.01rem solid #e4e4e4;
  padding: 0.2rem 0.15rem;
  font-size: 0.3rem;
  color: #333;
}

.city_submit {
  background-color: #3190e8;
  font-size: 0.3rem;
  color: #fff;
  border: none;
  margin-bottom: 0.5rem;
}

.search_history {
  border-top: 0.01rem solid #e4e4e4;
  border-bottom: 0.01rem solid #e4e4e4;
  padding-left: 0.24rem;
  font: 0.2rem/0.4rem Microsoft YaHei;
}

.get_ul {
  background-color: #fff;
  border-top: 0.01rem solid #e4e4e4;
}

.get_ul li {
  margin: 0 auto;
  padding-top: 0.3rem;
  border-bottom: 0.01rem solid #e4e4e4;
}

.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.name {
  margin: 0 auto 0.16rem;
  width: 90%;
  font-size: 0.3rem;
  color: #333;
}

.address {
  width: 90%;
  margin: 0 auto 0.25rem;
  font-size: 0.22rem;
  color: #999;
}

.clear_all_history {
  font-size: 0.33rem;
  color: #666;
  text-align: center;
  line-height: 1rem;
  background-color: #fff;
}

.search_none_place {
  margin: 0 auto;
  font: 0.3rem/0.8rem Microsoft YaHei;
  color: #333;
  background-color: #fff;
  padding-left: 0.24rem;
}
</style>
