<template>
  <div class="serve-center">
    <myheader :message="message" />
    <section class="serve-connect">
      <a href="#" class="net">
        <i class="fa fa-user-circle"></i>
        <span>在线客服</span>
      </a>
      <a href="#" class="phone">
        <i class="fa fa-phone"></i>
        <span>在线客服</span>
      </a>
    </section>
    <section class="hot-questions">
      <h4>热门问题</h4>
      <ul>
        <router-link to="servicecenter/questionDetail">
          <li
            class="question-title"
            v-for="(question,index) in HotQuestion"
            :key="index"
            @click="select(index)"
          >
            <span>{{question}}</span>
            <i class="fa fa-angle-right"></i>
          </li>
        </router-link>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import myheader from "../components/Hearder";

export default {
  methods: {
    select(index) {
      this.$store.dispatch("setSubscriptAsync", index);
    }
  },
  components: { myheader },
  computed: mapGetters(["subscript"]),
  data() {
    return {
      message: "服务中心",
      HotQuestion: [
        "超级会员权益说明",
        "签到规则",
        "用户等级说明",
        "积分问题",
        "教我拍大片",
        "支付问题",
        "其他问题",
        "准时达问题",
        "会员说明",
        "会员问题",
        "红包问题",
        "活动细则",
        "补签规则",
        "优惠说明",
        "免责说明",
        "代金券说明",
        "商务合作",
        "余额问题",
        "超赞商家",
        "匿名购买",
        "活动问题"
      ]
    };
  }
};
</script>

<style scoped>
.serve-connect {
  display: flex;
  background-color: white;
}

.net {
  border-right: 0.01rem solid #f5f5f5;
}

.serve-connect a {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 2rem;
  border-bottom: 0.01rem solid #f5f5f5;
}

.serve-connect .fa {
  font-size: 0.5rem;
  margin-top: 0.6rem;
}

.net .fa {
  color: rgb(255, 123, 82);
}

.phone .fa {
  color: rgb(106, 194, 11);
}

.serve-connect span {
  margin-top: 0.1rem;
  font-size: 0.3rem;
  color: #666;
}

.hot-questions h4 {
  font-size: 0.4rem;
  color: #333;
  line-height: 1.5rem;
  background-color: white;

  border-bottom: 0.01rem solid #f5f5f5;
  padding-left: 0.35rem;
  margin: 0;
}

.question-title {
  padding: 0 0.35rem;
  line-height: 1rem;
  background-color: white;
  border-bottom: 0.01rem solid #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.question-title span {
  font-size: 0.3rem;
  color: #666;
}

.question-title .fa {
  font-size: 0.3rem;
  color: #777;
}
</style>
