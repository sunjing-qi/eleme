<template>
  <div class="home">
    <header id="header_top">
      <span class="header_logo" @click="reload">ele.me</span>
      <router-link to="/login" class="header_login">
        <i class="fa fa-user-o"></i>
      </router-link>
    </header>
    <nav class="city_nav">
      <div class="city_tip">
        <span>当前定位城市：</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>
      <router-link to="/city" class="guess_city">
        <span>{{guessCity}}</span>
        <i class="fa fa-angle-right"></i>
      </router-link>
    </nav>
    <section id="hot_city_container">
      <h4 class="hot_city_title">热门城市</h4>
      <ul class="hot_citylist clear">
        <router-link tag="li" v-for="item in hotcity" to="/city" :key="item.id">{{item.name}}</router-link>
      </ul>
    </section>
    <section class="group_city_container">
      <ul class="letter_classify">
        <li v-for="(value, key, index) in sortgroupcity" :key="key" class="letter_classify_li">
          <h4 class="group_city_title">
            {{key}}
            <span v-if="index == 0">（按字母排序）</span>
          </h4>
          <ul class="group_citylist clear">
            <router-link
              tag="li"
              v-for="item in value"
              to="/city"
              :key="item.id"
              class="ellipsis"
            >{{item.name}}</router-link>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "",
      guessCity: "", //当前城市
      guessCityid: "", //当前城市id
      hotcity: [], //热门城市列表
      groupcity: {} //所有城市列表
    };
  },
  created() {
    this.CityGuess(), this.HotCity(), this.GroupCity();
  },
  methods: {
    // 获取当前城市
    CityGuess() {
      this.$axios
        .get("https://elm.cangdu.org/v1/cities?type=guess")
        .then(res => {
          this.guessCity = res.data.name;
          this.guessCityid = res.data.id;
        });
    },
    //获取热门城市
    HotCity() {
      this.$axios.get("https://elm.cangdu.org/v1/cities?type=hot").then(res => {
        this.hotcity = res.data;
      });
    },
    //获取所有城市
    GroupCity() {
      this.$axios
        .get("https://elm.cangdu.org/v1/cities?type=group")
        .then(res => {
          console.log(res.data);
          this.groupcity = res.data;
        });
    },
    //点击图标刷新页面
    reload() {
      window.location.reload();
    }
  },
  computed: {
    //将获取的数据按照A-Z字母开头排序
    sortgroupcity() {
      let sortobj = {};
      for (let i = 65; i <= 90; i++) {
        if (this.groupcity[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.groupcity[
            String.fromCharCode(i)
          ];
        }
      }
      return sortobj;
    }
  }
};
</script>

<style scoped>
.home {
  background: #f5f5f5;
}

#header_top {
  box-sizing: border-box;
  background-color: #3190e8;
  font-weight: 400;
  padding: 0.2rem;
  color: white;
  width: 100%;
  height: 0.9rem;
  position: relative;
}

.header_logo {
  font-weight: 400;
  font-size: 0.37rem;
  color: #fff;
  position: absolute;
  left: 0.2rem;
}

.header_login {
  font-size: 0.4rem;
  color: #fff;
  position: absolute;
  right: 0.3rem;
}

.city_nav {
  border-top: 0.01rem solid #e4e4e4;
  background-color: #fff;
  margin-bottom: 0.2rem;
}

.city_tip {
  display: flex;
  justify-content: space-between;
  line-height: 0.7rem;
  padding: 0.2rem 0.2rem 0;
}

.city_tip span:first-of-type {
  font-size: 0.25rem;
  color: #666;
}

.city_tip span:nth-of-type(2) {
  font-weight: 900;
  font-size: 0.2rem;
  color: #9f9f9f;
}

.guess_city {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.9rem;
  padding: 0 0.25rem;
  border-top: 0.01rem solid #e4e4e4;
  border-bottom: 0.02rem solid #e4e4e4;
  font: 0.35rem/0.9rem Microsoft YaHei;
}

.guess_city span {
  color: #3190e8;
}

.guess_city .fa {
  font-size: 0.5rem;
  color: #999;
}

#hot_city_container {
  background-color: #fff;
  margin-bottom: 0.2rem;
}

.hot_city_title {
  color: #666;
  font-weight: 400;
  border-top: 0.02rem solid #e4e4e4;
  border-bottom: 0.01rem solid #e4e4e4;
  font: 0.25rem/0.7rem Helvetica Neue;
  margin: 0;
  padding-left: 0.2rem;
}

.hot_citylist {
  background: #fff;
  height: 1.6rem;
  margin-bottom: 0;
}

.hot_citylist li {
  float: left;
  text-align: center;
  color: #3190e8;
  border-bottom: 0.012rem solid #e4e4e4;
  border-right: 0.012rem solid #e4e4e4;
  width: 24.8%;
  font: 0.3rem/0.8rem Microsoft YaHei;
}

.letter_classify_li {
  margin-bottom: 0.2rem;
  background-color: #fff;
  border-bottom: 0.01rem solid #e4e4e4;
  float: left;
}

.group_city_title {
  color: #666;
  font-weight: 400;
  border-top: 0.02rem solid #e4e4e4;
  border-bottom: 0.01rem solid #e4e4e4;
  font: 0.25rem/0.7rem Helvetica Neue;
  margin: 0;
  padding-left: 0.2rem;
}

.group_city_title span {
  font-size: 0.2rem;
  color: #999;
}

.group_citylist {
  background: #fff;
  margin-bottom: 0;
}

.group_citylist li {
  background: #fff;
  float: left;
  text-align: center;
  color: #666;
  border-bottom: 0.012rem solid #e4e4e4;
  border-right: 0.012rem solid #e4e4e4;
  width: 24.8%;
  height: 0.8rem;
  font: 0.3rem/0.8rem Microsoft YaHei;
}

.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.clear {
  zoom: 1;
}
</style>