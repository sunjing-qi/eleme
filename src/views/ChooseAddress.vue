<template>
  <div>
    <myheader :message="message" />
    <div class="choose_address">
      <section class="list_cotainer">
        <section id="in_delivery">
          <ul class="deliverable_address">
            <li
              v-for="(item,index) in deliverable"
              :key="index"
              @click.prevent="chooseAddress(item, index)"
            >
              <i class="fa fa-check-circle"></i>
              <div>
                <header>
                  <span>{{item.name}}</span>
                  <span>{{item.sex == 1? '先生' : '女士'}}</span>
                  <span>{{item.phone}}</span>
                </header>
                <div class="address_detail ellipsis">
                  <span v-if="item.tag" :style="{backgroundColor: iconColor(item.tag)}">{{item.tag}}</span>
                  <p>{{item.address_detail}}</p>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section id="out_delivery" v-if="deliverdisable.length">
          <header class="out_header">以下地址超出配送范围</header>
          <ul class="deliverable_address">
            <li v-for="(item,index) in deliverdisable" :key="index">
              <i class="fa fa-check-circle"></i>
              <div>
                <header>
                  <span>{{item.name}}</span>
                  <span>{{item.sex == 1? '先生' : '女士'}}</span>
                  <span>{{item.phone}}</span>
                </header>
                <div class="address_detail ellipsis">
                  <span
                    v-if="item.tag"
                    :style="{backgroundColor: '#ccc', color: '#fff'}"
                  >{{item.tag}}</span>
                  <p>{{item.address_detail}}</p>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </section>
      <router-link to="addAddress" class="add_icon_footer">
        <img src="../assets/add_address.png" />
        <span>新增收货地址</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import myheader from "../components/Hearder";

export default {
  name: "ChooseAddress",
  data() {
    return {
      addressList: [], //地址列表
      deliverable: [], //有效地址列表
      deliverdisable: [], //无效地址列表
      address: {
        user_id: "7399"
      },
      message: "选择地址"
    };
  },
  created() {
    this.addAddress();
  },
  components: { myheader },
  methods: {
    addAddress() {
      this.$axios
        .get("https://elm.cangdu.org/v1/users/:user_id/addresses", this.address)
        .then(res => {
          console.log(res.data);
        });
    }
  }
};
</script>

<style scoped>
.list_container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 0.9rem;
  overflow-y: auto;
}

#in_delivery {
  padding-bottom: 2.5rem;
}

.add_icon_footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1.2rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 204;
}

.add_icon_footer img {
  height: 0.48rem;
  width: 0.48rem;
}

.add_icon_footer span {
  font-size: 0.33rem;
  color: #3190e8;
  margin-left: 0.14rem;
}
</style>
