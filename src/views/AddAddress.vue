<template>
  <div>
    <myheader :message="message" />
    <div class="add_address">
      <section class="page_text_container">
        <section class="section_list">
          <span class="section_left">联系人</span>
          <section class="section_right">
            <input v-model="name" type="text" name="name" placeholder="你的名字" class="input_style" />
            <div class="choose_sex">
              <span class="choose_option">
                <i class="fa fa-check-circle" :class="{checked: sex}" @click="sex = 1"></i>
                <span>先生</span>
              </span>
              <span class="choose_option">
                <i class="fa fa-check-circle" :class="{checked: sex == 0}" @click="sex = 0"></i>
                <span>女士</span>
              </span>
            </div>
          </section>
        </section>
        <section class="section_list">
          <span class="section_left">联系电话</span>
          <section class="section_right">
            <div class="phone_add">
              <input
                v-model="phone"
                type="text"
                name="phone"
                placeholder="你的手机号"
                class="input_style"
              />
              <img src="../assets/jiahao.png" alt @click="option = !option" />
            </div>
            <input
              type="text"
              name="anntherPhoneNumber"
              placeholder="备选电话"
              class="input_style phone_bk"
              v-show="option"
            />
          </section>
        </section>
        <section class="section_list">
          <span class="section_left">送餐地址</span>
          <section class="section_right">
            <router-link to="searchAddress">
              <div class="choose_address">小区/写字楼/学校等</div>
            </router-link>
            <input
              v-model="address_detail"
              type="text"
              name="address_detail"
              placeholder="详细地址（如门牌号等）"
              class="input_style"
            />
          </section>
        </section>
        <section class="section_list">
          <span class="section_left">标签</span>
          <section class="section_right">
            <input v-model="tag" type="text" name="tag" placeholder="无/家/学校/公司" class="input_style" />
          </section>
        </section>
      </section>
      <div class="determine" @click="addAddress">确定</div>
      <section class="alert" v-if="showAlert" @closeTip="showAlert = false" :alertText="alertText">
        <div class="type-icon">
          <span>!</span>
        </div>
        <p>{{alertText}}</p>
        <button class="btn-t" @click="unSubmit">确认</button>
      </section>
    </div>
  </div>
</template>

<script>
import myheader from "../components/Hearder";
export default {
  name: "AddAddress",
  data() {
    return {
      message: "添加地址",
      name: null, //姓名
      sex: 1, //性别
      phone: null, //电话
      address_detail: null, //详细地址
      option: false, //是否选择备注电话
      tag: "", //备注
      tag_type: 1, //备注类型
      showAlert: false, //弹出框
      alertText: null //弹出框信息
    };
  },
  components: { myheader },
  methods: {
    unSubmit() {
      this.showAlert = false;
    },
    addAddress() {
      if (!this.name) {
        this.showAlert = true;
        this.alertText = "请输入姓名";
      } else if (!this.phone) {
        this.showAlert = true;
        this.alertText = "请输入电话号码";
      } else if (!this.searchAddress) {
        this.showAlert = true;
        this.alertText = "请选择地址";
      } else if (!this.address_detail) {
        this.showAlert = true;
        this.alertText = "请输入详细地址";
      }
      if (this.tag == "家") {
        this.tag_type = 2;
      } else if (this.tag == "学校") {
        this.tag_type = 3;
      } else if (this.tag == "公司") {
        this.tag_type = 4;
      }
    }
  }
};
</script>

<style scoped>
.add_address {
  background: #f5f5f5;
}

input {
  font-family: Helvetica Neue, Tahoma, Arial;
}

.page_text_container {
  background-color: #fff;
  padding: 0 0.33rem;
}

.section_list {
  display: flex;
  border-bottom: 0.012rem solid #f5f5f5;
}

.section_left {
  font-size: 0.33rem;
  color: #333;
  flex: 2;
  line-height: 1.2rem;
}

.section_right {
  flex: 5.5;
  line-height: 0.9rem;
}

.input_style {
  width: 100%;
  height: 1.1rem;
  font-size: 0.33rem;
  color: #999;
  vertical-align: middle;
  border: none;
  outline: none;
}

.choose_sex {
  display: flex;
  line-height: 1.2rem;
  border-top: 0.012rem solid #f5f5f5;
}

.choose_option {
  font-size: 0.33rem;
  color: #333;
  display: flex;
  align-items: center;
  margin-right: 0.4rem;
}

.fa {
  margin-right: 0.12rem;
  font-size: 0.33rem;
  color: #ccc;
}

.checked {
  color: #4cd964;
}

.phone_add {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.phone_add img {
  width: 0.4rem;
  height: 0.4rem;
}

.phone_bk {
  border-top: 0.012rem solid #f5f5f5;
}

.choose_address {
  font-size: 0.33rem;
  color: #999;
  line-height: 1.2rem;
  border-bottom: 0.012rem solid #f5f5f5;
}

.determine {
  width: 94%;
  background-color: #4cd964;
  font-size: 0.33rem;
  color: #fff;
  line-height: 0.9rem;
  margin: 0 0.22rem;
  margin-top: 0.3rem;
  border-radius: 0.08rem;
  text-align: center;
}

.alert {
  padding: 0;
  margin: 0;
  width: 6rem;
  height: 3.5rem;
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