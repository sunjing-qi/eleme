<template>
  <div>
    <myheader :message="message" />
    <div class="add_detail">
      <form>
        <section class="ui-padding-block">
          <div class="input-new">
            <input type="text" placeholder="请填写你的姓名" v-model="name" />
          </div>
          <router-link to="/mine/info/address/add/addDetail" class="add-detail">
            <div class="input-new choose_address">{{address?address:"小区/写字楼/学校等"}}</div>
          </router-link>
          <div class="input-new">
            <input type="text" placeholder="请填写详细送餐地址" v-model="addressDetail" />
          </div>
          <div class="input-new">
            <input type="text" placeholder="请填写能够联系到您的手机号" v-model="telephoneNum" />
          </div>
          <div class="input-new">
            <input type="text" placeholder="备用联系电话（选填）" v-model="optionNum" />
          </div>
        </section>
        <div class="addbutton" @click.prevent="submitThing">新增地址</div>
      </form>
      <section class="alert" v-show="!ydl">
        <div class="type-icon">
          <span>!</span>
        </div>
        <p>请登录</p>
        <button class="btn-t" @click="unSubmit">确认</button>
      </section>
      <section class="alert" v-show="error">
        <div class="type-icon">
          <span>!</span>
        </div>
        <p>地址信息错误</p>
        <button class="btn-t" @click="unSubmit">确认</button>
      </section>
    </div>
  </div>
</template>

<script>
import myheader from "../components/Hearder";
import { mapGetters } from "vuex";
export default {
  name: "Add",
  computed: mapGetters(["isLogin", "address"]),
  data() {
    return {
      message: "新增地址",
      name: null,
      addressDetail: null,
      telephoneNum: null,
      optionNum: null,
      ydl: false,
      error: false
    };
  },
  components: { myheader },
  methods: {
    submitThing() {
      //   if (!(this.userInfo && this.userInfo.user_id)) {
      //     this.unlogin = true;
      //   } else
      this.ydl = this.isLogin;
      if (
        !this.name ||
        !this.addDetail ||
        !this.addressDetail ||
        !this.telephoneNum
      ) {
        this.error = true;
      } else {
        this.$router.go(-1);
      }
    },
    unSubmit() {
      this.ydl = true;
      this.error = false;
    }
  }
};
</script>

<style scoped>
.add_detail {
  padding-top: 0.2rem;
  background: #f5f5f5;
}

.ui-padding-block {
  background: #fff;
  padding-top: 0.15rem;
}

.input-new {
  padding-bottom: 0.15rem;
}

.input-new input {
  display: block;
  width: 7rem;
  font-size: 0.28rem;
  margin: 0 auto;
  padding: 0.14rem;
  background: #f2f2f2;
  border: 0.01rem solid #ddd;
  border-radius: 0.03rem;
  outline: none;
}

.choose_address {
  width: 7rem;
  font-size: 0.28rem;
  margin: 0 auto 0.15rem;
  padding: 0.14rem;
  background: #f2f2f2;
  color: #777;
  border-bottom: 0.01rem solid #ddd;
  border-radius: 0.03rem;
}

.add-detail {
  display: block;
}

.addbutton {
  margin: 0.3rem auto;
  width: 7rem;
  font-size: 0.3rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  line-height: 0.8rem;
  background: #4cd964;
  border-radius: 0.05rem;
  font-weight: 700;
}

.alert {
  padding: 0;
  margin: 0;
  width: 5.7rem;
  height: 3.8rem;
  background: #fff;
  margin-top: -2.8rem;
  margin-left: -2.8rem;
  padding-top: 0.3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px;
  border-radius: 0.15rem;
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
}

.btn-t {
  font-size: 0.4rem;
  color: #fff;
  font-weight: 700;
  margin-top: 0.4rem;
  background-color: #4cd964;
  width: 100%;
  text-align: center;
  line-height: 0.9rem;
  border: 1px;
  border-bottom-left-radius: 0.15rem;
  border-bottom-right-radius: 0.15rem;
}
</style>