<template>
  <div>
    <myheader :message="message" />
    <div class="commend">
      <img class="act" src="../assets/活动.png" />
      <div class="invited">
        <div class="wechat" v-on:click="alert = true;">
          <img src="../assets/微信.png" />
          <p>邀请微信好友</p>
        </div>
        <div class="qq" v-on:click="alert = true;">
          <img src="../assets/qq.png" />
          <p>邀请QQ好友</p>
        </div>
        <div class="invite" v-on:click="alert = true;">
          <img src="../assets/二维码.png" />
          <p>面对面邀请</p>
        </div>
      </div>
      <div class="final">
        <div class="partone onething">
          <p>累计收益</p>
          <p>
            <span class="redcolor">0</span>
            <span>元</span>
          </p>
        </div>
        <div class="partone">
          <p>成功邀请</p>
          <p>
            <span class="anse">0</span>
            <span>人</span>
          </p>
        </div>
      </div>
      <div class="profit">
        <p>-收益明细-</p>
        <img src="../assets/红包.png" />
        <p>还不赶紧去邀请好友</p>
      </div>
      <div class="alert" v-if="alert">
        <img src="../assets/感叹号.png" />
        <p>请在饿了么APP中打开</p>
        <p v-on:click="alert = false">确认</p>
      </div>
    </div>
  </div>
</template>

<script>
import myheader from "../components/Hearder";

export default {
  data() {
    return {
      alert: false,
      message: "推荐有奖"
    };
  },
  components: { myheader }
};
</script>

<style scoped>
.act {
  width: 100%;
}
p {
  font-size: 0.25rem;
}
img {
  width: 1.2rem;
}
.invited {
  background: #fff;
  overflow: hidden;
  padding: 0.2rem 0.3rem;
}
.wechat {
  float: left;
}
.wechat img {
  padding-left: 0.25rem;
}
.qq {
  float: left;
  margin-left: 1.25rem;
}
.qq img {
  padding-left: 0.2rem;
}
.invite {
  float: right;
  margin-right: 0.2rem;
}
.invite img {
  padding-left: 0.15rem;
}
.final {
  overflow: hidden;
}
.partone {
  float: left;
  box-sizing: border-box;
  width: 50%;
  padding: 0.3rem 0.5rem;
  margin-top: 0.3rem;
  text-align: center;
}
.onething {
  border-right: 1px solid lightgray;
}
.redcolor {
  color: #ff5633;
  font-size: 0.4rem;
}
.anse {
  color: #666;
  font-size: 0.4rem;
}

.profit {
  text-align: center;
  padding: 0.3rem;
}
.profit p:first-of-type {
  margin-bottom: 0.3rem;
}
.alert {
  width: 80%;
  height: 4rem;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  border-radius: 0.3rem;
  text-align: center;
  overflow: hidden;
  left: 10%;
  top: 30%;
}
.alert img {
  width: 1.7rem;
  padding-top: 0.2rem;
}
.alert p:first-of-type {
  font-size: 0.4rem;
}
.alert p:last-of-type {
  background: #4cd964;
  color: #fff;
  height: 0.75rem;
  margin-top: 0.6rem;
  padding: 0.1rem;
  font-size: 0.4rem;
}
</style>