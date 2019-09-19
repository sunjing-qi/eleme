<template>
  <div>
    <myheader :message="message" />
    <div class="search_address">
      <section>
        <form class="search_form">
          <input type="search" name="search" placeholder="请输入小区/写字楼/学校等" v-model="searchValue" />
          <button @click.prevent="Search()">搜索</button>
        </form>
        <ul class="address_list" v-if="searchData">
          <li v-for="(item, index) in searchData" :key="index" @click="choooedAddress(item)">
            <h4>{{item.name}}</h4>
            <p>{{item.address}}</p>
          </li>
        </ul>
        <div v-else class="empty_tips">
          <p>找不到地址？</p>
          <p>尝试输入小区、写字楼或学校名</p>
          <p>详细地址（如门牌号等）可稍后输入哦</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import myheader from "../components/Hearder";

export default {
  name: "SearchAddress",
  data() {
    return {
      searchValue: null, //输入的搜索内容
      searchData: null, //搜索的结果
      search: {
        city_id: "",
        keyword: "",
        type: ""
      },
      message: "选择地址"
    };
  },
  components: { myheader },
  methods: {
    Search() {
      this.$axios
        .get("https://elm.cangdu.org/v1/pois", this.search)
        .then(res => {
          console.log(res.data);
        });
    },
    //选择搜素结果
    choooedAddress(item) {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.search_address {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  overflow-y: auto;
  margin-top: 0.9rem;
}
.search_form {
  display: flex;
  padding: 0.33rem;
}

.search_form input {
  font-size: 0.3rem;
  color: #999;
  flex: 4;
  background-color: #f1f1f1;
  margin-right: 0.3rem;
  height: 0.7rem;
  border-radius: 0.07rem;
  padding: 0 0.2rem;
  border: none;
  outline: none;
}

.search_form button {
  flex: 1;
  font-size: 0.3rem;
  color: #fff;
  background-color: #3190e8;
  border-radius: 0.07rem;
  border: none;
  outline: none;
}

.address_list {
  padding: 0.33rem;
}

.address_list li {
  padding: 0.33rem 0;
  border-bottom: 0.012rem solid #f5f5f5;
  line-height: 0.45rem;
}

.address_list li h4 {
  font-size: 0.35rem;
  color: #555;
}

.address_list li p {
  font-size: 0.3rem;
  color: #999;
}

.empty_tips {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.empty_tips p {
  margin: 0;
  font-size: 0.25rem;
  color: #aaa;
  line-height: 0.3rem;
  text-align: center;
}
</style>