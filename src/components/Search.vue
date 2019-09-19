<template>
  <div class="search">
    <myheader :message="message" />
    <form class="search_form">
      <input
        v-model="searchValue"
        type="search"
        name="search"
        placeholder="请输入商家或美食名称"
        class="search_input"
        @input="checkInput"
      />
      <input type="submit" name="submit" class="search_submit" @click.prevent="searchTarget('')" />
    </form>
    <section class="search_history" v-if="searchHistory.length&&showHistory">
      <h4 class="title_restaurant">搜索历史</h4>
      <ul>
        <li v-for="(item, index) in searchHistory" :key="index" class="history_list">
          <span class="history_text">{{item}}</span>
          <span class="delete_icon" @click="deleteHistory(index)">x</span>
        </li>
      </ul>
      <footer class="clear_history" @click="clearAllHistory">清空搜索历史</footer>
    </section>
    <div class="search_none" v-if="emptyResult">很抱歉！无搜索结果</div>
    <myfooter />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import myheader from "../components/Hearder";
import myfooter from "../components/Footer";
import { searchRestaurant } from "../service/getData";
import { getStore, setStore } from "../config/localStorage";
export default {
  name: "Search",
  data() {
    return {
      geohash: "", // msite页面传递过来的地址信息
      searchValue: "", // 搜索内容
      restaurantList: [], // 搜索返回的结果
      searchHistory: [], // 搜索历史记录
      showHistory: true, // 是否显示历史记录，只有在返回搜索结果后隐藏
      emptyResult: false, // 搜索结果为空时显示
      message: "搜索"
    };
  },
  components: { myheader, myfooter },
  computed: mapGetters(["history"]),
  mounted() {
    this.geohash = this.$route.params.geohash;
    //获取搜索历史记录
    if (getStore("searchHistory")) {
      this.searchHistory = JSON.parse(getStore("searchHistory"));
    }
  },
  methods: {
    async searchTarget(historyValue) {
      if (historyValue) {
        this.searchValue = historyValue;
      } else if (!this.searchValue) {
        return;
      }
      //隐藏历史记录
      this.showHistory = false;
      //获取搜索结果
      this.restaurantList = await searchRestaurant(
        this.geohash,
        this.searchValue
      );
      this.emptyResult = !this.restaurantList.length;
      /**
       * 点击搜索结果进入下一页面时进行判断是否已经有一样的历史记录
       * 如果没有则新增，如果有则不做重复储存，判断完成后进入下一页
       */
      let history = getStore("searchHistory");
      if (history) {
        let checkrepeat = false;
        this.searchHistory = JSON.parse(history);
        this.searchHistory.forEach(item => {
          if (item == this.searchValue) {
            checkrepeat = true;
          }
        });
        if (!checkrepeat) {
          this.searchHistory.push(this.searchValue);
        }
      } else {
        this.searchHistory.push(this.searchValue);
      }
      setStore("searchHistory", this.searchHistory);
    },
    //搜索结束后，删除搜索内容直到为空时清空搜索结果，并显示历史记录
    checkInput() {
      if (this.searchValue === "") {
        this.showHistory = true; //显示历史记录
        this.restaurantList = []; //清空搜索结果
        this.emptyResult = false; //隐藏搜索为空提示
      }
    },
    //点击删除按钮，删除当前历史记录
    deleteHistory(index) {
      this.searchHistory.splice(index, 1);
      setStore("searchHistory", this.searchHistory);
    },
    //清除所有历史记录
    clearAllHistory() {
      this.searchHistory = [];
      setStore("searchHistory", this.searchHistory);
    }
  }
};
</script>

<style scoped>
.search_form {
  background-color: #fff;
  padding: 0.25rem;
  display: flex;
  position: relative;
}

.search_form input {
  height: 0.7rem;
}

.search_input {
  flex: 4;
  border: 0.0125rem solid #e4e4e4;
  font-size: 0.33rem;
  color: #333;
  border-radius: 0.06rem;
  background-color: #f2f2f2;
  font-weight: 700;
  padding: 0 0.125rem;
  outline: none;
}

.search_submit {
  flex: 1;
  border: 0.0125rem solid #3190e8;
  margin-left: 0.1rem;
  font-size: 0.33rem;
  color: #fff;
  border-radius: 0.06rem;
  background-color: #3190e8;
  font-weight: 700;
  padding: 0 0.125rem;
}

.search_history h4,
.search_history ul {
  margin: 0;
}

.title_restaurant {
  font-size: 0.35rem;
  line-height: 1rem;
  text-indent: 0.24rem;
  font-weight: 700;
  color: #666;
  background: #f5f5f5;
}

.history_list {
  background-color: #fff;
  border-bottom: 0.0125rem solid #e4e4e4;
  font: 0.3rem/1rem Microsoft YaHei;
  padding: 0 0.15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.history_text {
  display: inline-block;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.delete_icon {
  font-size: 0.15rem;
  color: rgb(153, 153, 153);
}

.clear_history {
  background-color: #fff;
  color: #3190e8;
  font: 0.35rem/1rem Microsoft YaHei;
  font-weight: 700;
  text-align: center;
}

.search_none {
  margin: 0 auto;
  font: 0.33rem/0.85rem Microsoft YaHei;
  color: #333;
  background-color: #fff;
  text-align: center;
  margin-top: 0.0625rem;
}
</style>
