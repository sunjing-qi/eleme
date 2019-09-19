<template>
  <div>
    <myheader :message="message" />
    <span class="edit" @click="editThing">{{editText}}</span>
    <div class="edit_address">
      <section class="address">
        <ul class="addresslist">
          <li v-for="(item,index) in addressList" :key="index">
            <div>
              <p>{{item.address}}</p>
              <p>
                <span>{{item.phone}}</span>
              </p>
            </div>
            <div class="deletesite" v-if="deletesite">
              <span @click="deleteSite(item, index)">x</span>
            </div>
          </li>
        </ul>
        <router-link to="/mine/info/address/add">
          <div class="addsite">
            <span>新增地址</span>
            <i class="fa fa-angle-right"></i>
          </div>
        </router-link>
      </section>
    </div>
  </div>
</template>

<script>
import myheader from "../components/Hearder";
export default {
  name: "EditAddress",
  data() {
    return {
      message: "编辑地址",
      deletesite: false, //是否编辑状态
      editText: "编辑",
      addressList: [
        { address: "中北大学", phone: "12312341234" },
        { address: "中北大学七道门", phone: "12312341234" },
        { address: "上兰村", phone: "12312341234" }
      ] //地址列表
    };
  },
  components: { myheader },
  methods: {
    // 编辑
    editThing() {
      if (this.editText == "编辑") {
        this.editText = "完成";
        this.deletesite = true;
      } else {
        this.editText = "编辑";
        this.deletesite = false;
      }
    },
    // 删除
    deleteSite(item, index) {
      this.addressList.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.edit {
  font-family: Helvetica Neue, Tahoma, Arial;
  font-size: 0.33rem;
  color: #fff;
  position: absolute;
  top: 0.25rem;
  right: 0.2rem;
}

.edit_address {
  background: #f5f5f5;
}

.address {
  width: 100%;
  margin-top: 0.2rem;
  border-top: 0.01rem solid #d9d9d9;
  border-bottom: 0.01rem solid #d9d9d9;
}

.addresslist {
  background: #fff;
  margin-bottom: 0;
}

.addresslist li {
  border-bottom: 0.01rem solid #d9d9d9;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
}

.addresslist li:first-of-type {
  background: #fff8c3;
}

.addresslist li p {
  margin: 0;
  line-height: 0.4rem;
  font-size: 0.3rem;
  color: #333;
}

.addresslist li p span {
  display: inline-block;
  font-size: 0.3rem;
  color: #333;
}

.deletesite {
  display: flex;
  align-items: center;
}

.deletesite span {
  display: block;
  font-size: 0.4rem;
  color: #999;
}

.addsite {
  margin-top: 0.2rem;
  background: #fff;
  padding: 0.1rem 0.2rem;
  border-top: 0.01rem solid #d9d9d9;
  display: flex;
  justify-content: space-between;
}

.addsite span {
  display: block;
  font-size: 0.33rem;
  color: #333;
  line-height: 0.65rem;
}

.addsite .fa {
  font-size: 0.5rem;
  color: #ccc;
  line-height: 0.65rem;
}
</style>