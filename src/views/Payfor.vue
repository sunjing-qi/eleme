<template>
  <div>
    <div class="payfor">
      <myheader :message="message" />
      <!-- 提示框1 -->
      <section v-show="ended1" class="alert">
        <div class="type-icon">
          <span>!</span>
        </div>
        <p>暂不开放支付功能</p>
        <button @click="unSubmit" class="btn-t">确认</button>
      </section>
      <section class="show_time_amount">
        <header class="time_last">支付剩余时间</header>
        <p class="time">{{remaining}}</p>
      </section>
      <div class="pay_way">选择支付方式</div>
      <section class="pay_way_list">
        <section class="pay_item">
          <div class="pay_icon_contaienr">
            <img src="../assets/支付宝.png" alt />
            <span>支付宝</span>
          </div>
          <i
            class="fa fa-check-circle choose_icon"
            :class="{choosed_way: payWay}"
            @click="payWay = 1"
          ></i>
        </section>
        <section class="pay_item">
          <div class="pay_icon_contaienr">
            <img src="../assets/weixin.png" alt />
            <span>微信</span>
          </div>
          <i
            class="fa fa-check-circle choose_icon"
            :class="{choosed_way: payWay == 0}"
            @click="payWay = 0"
          ></i>
        </section>
      </section>
      <button class="determine" @click="Submit">确认支付</button>
      <!-- 提示框2 -->
      <section v-show="ended2" class="alert">
        <div class="type-icon">
          <span>!</span>
        </div>
        <p>当前环境无法支付，请打开官方APP进行付款</p>
        <button @click="unSubmit" class="btn-t">确认</button>
      </section>
      <!-- 提示框3 -->
      <section v-show="ended3" class="alert">
        <div class="type-icon">
          <span>!</span>
        </div>
        <p>支付超时</p>
        <button @click="unSubmit" class="btn-t">确认</button>
      </section>
    </div>
  </div>
</template>

<script>
import myheader from "../components/Hearder";
export default {
  name: "Payfor",
  data() {
    return {
      ended1: true,
      ended2: false,
      ended3: false,
      payWay: 1, //付款方式
      countNum: 900, //倒计时15分钟
      message: "在线支付"
    };
  },
  components: { myheader },
  computed: {
    //时间转换
    remaining: function() {
      let minute = parseInt(this.countNum / 60);
      if (minute < 10) {
        minute = "0" + minute;
      }
      let second = parseInt(this.countNum % 60);
      if (second < 10) {
        second = "0" + second;
      }
      return "00 : " + minute + " : " + second;
    }
  },
  mounted() {
    this.remainingTime();
  },
  methods: {
    Submit() {
      this.ended2 = true;
    },
    unSubmit() {
      this.ended1 = false;
      this.ended2 = false;
      this.ended3 = false;
    },
    //倒计时
    remainingTime() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.countNum--;
        if (this.countNum == 0) {
          clearInterval(this.timer);
          this.ended3 = true;
        }
      }, 1000);
    }
  }
};
</script>

<style scoped>
.show_time_amount {
  background-color: #fff;
  padding: 0.34rem;
  text-align: center;
}

.time_last {
  font-size: 0.28rem;
  color: #666;
  margin-top: 0.45rem;
}

.time {
  font-size: 0.65rem;
  color: #333;
  margin: 0.13rem 0 0.3rem;
  font-weight: 450;
}

.pay_way {
  background-color: #f1f1f1;
  padding: 0 0.33rem;
  font-size: 0.33rem;
  color: #666;
  line-height: 1rem;
}

.pay_way_list {
  background-color: #fff;
}

.pay_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.18rem 0.33rem;
  line-height: 1.2rem;
  border-bottom: 0.012rem solid #f5f5f5;
}

.pay_icon_contaienr {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pay_icon_contaienr img {
  width: 1rem;
  height: 1rem;
  margin-right: 0.1rem;
  border-radius: 50%;
}

.pay_icon_contaienr span {
  font-size: 0.33rem;
  color: #666;
}

.choose_icon {
  font-size: 0.55rem;
  color: #ccc;
}

.choosed_way {
  color: #4cd964;
}

.determine {
  width: 94%;
  background-color: #4cd964;
  font-size: 0.33rem;
  color: #fff;
  padding: 0.15rem 0;
  margin: 0 0.22rem;
  border-radius: 0.08rem;
  border: none;
}

.alert {
  padding: 0;
  margin: 0;
  width: 6rem;
  height: 4rem;
  background: #fff;
  margin-top: -3rem;
  margin-left: -3rem;
  padding-top: 0.3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.type-icon {
  width: 1.4rem;
  height: 1.4rem;
  border: 0.05rem solid #f8cb86;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.type-icon span {
  color: #f8cb86;
  font-size: 1rem;
}

.alert p {
  font-size: 0.33rem;
  color: #333;
  line-height: 0.4rem;
  text-align: center;
  margin: 0;
  margin-top: 0.4rem;
  padding: 0 0.2rem;
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
