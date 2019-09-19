<template>
  <div>
    <myheader :message="message" />
    <div class="other">
      <p>快速备注</p>
      <ul>
        <li v-for="(remark,index) in remarks" :key="index">
          <span
            v-for="(item,id) in remark"
            :key="id"
            @click="isChecked(item,index)"
            :class="{bbaco:lastRemark&&lastRemark.indexOf(item)!=-1}"
          >{{item}}</span>
        </li>
      </ul>
    </div>
    <div class="other">
      <p>其他备注</p>
      <textarea placeholder="请输入备注内容（可不填）" v-model="inputText" />
    </div>
    <button @click="submit">确定</button>
  </div>
</template>

<script>
import myheader from "../components/Hearder";
import { mapGetters } from "vuex";
export default {
  name: "orderRemasks",
  data() {
    return {
      inputText: "",
      message: "订单备注",
      remarks: [],
      lastRemark: [],
      orderIndex: [],
      idArr: [],
      returnRemark: ""
    };
  },
  components: {
    myheader
  },
  computed: mapGetters(["remark"]),
  methods: {
    getRemark() {
      this.$axios.get("https://elm.cangdu.org/v1/carts/1/remarks").then(res => {
        this.remarks = res.data.remarks;
      });
    },
    isChecked(item, index) {
      if (!this.lastRemark) {
        this.lastRemark.push(item);
        this.orderIndex.push(index);
      } else if (this.orderIndex.indexOf(index) == -1) {
        this.lastRemark.push(item);
        this.orderIndex.push(index);
      } else {
        let x = this.orderIndex.indexOf(index);
        this.lastRemark.splice(x, 1);
        this.orderIndex.splice(x, 1);
        this.lastRemark.push(item);
        this.orderIndex.push(index);
      }
    },
    submit() {
      if (this.lastRemark) {
        if (this.inputText) {
          this.returnRemark = this.lastRemark.join(",") + "," + this.inputText;
        } else {
          this.returnRemark = this.lastRemark.join(",");
        }
        this.$store.dispatch("setRemarkAsync", this.returnRemark);
      } else if (this.inputText) {
        this.returnRemark = this.inputText;
        this.$store.dispatch("setRemarkAsync", this.returnRemark);
      }
      this.$router.go(-1);
    }
  },
  created() {
    this.getRemark();
  }
};
</script>

<style scoped>
p {
  font-size: 0.3rem;
}
ul {
  list-style-type: none;
  font-size: 0.3rem;
}
ul li {
  float: left;
  margin: 0.2rem;
}
ul span {
  padding: 0.1rem 0.2rem;
  border: 0.7px solid #3190e8;
  /* border-left: none; */
}
ul span:first-child {
  border-top-left-radius: 0.1rem;
  border-bottom-left-radius: 0.1rem;
}
ul span:last-child {
  border-top-right-radius: 0.1rem;
  border-bottom-right-radius: 0.1rem;
}
.bbaco {
  background-color: #3190e8;
  color: white;
}

.other {
  padding: 0.2rem;
  background-color: white;
  margin-bottom: 0.3rem;
  overflow: hidden;
}
.other textarea {
  padding: 0.2rem;
  width: 7rem;
  height: 2rem;
  box-sizing: border-box;
  outline: none;
  margin-top: 0.2rem;
  background-color: #f9f9f9;
  border: 1px solid #eee;
  border-radius: 0.05rem;
}
button {
  background-color: #4cd964;
  color: #fff;
  font-size: 0.3rem;
  border: none;
  width: 7rem;
  padding: 0.2rem 0;
  margin: 0 0.2rem;
  border-radius: 0.05rem;
  text-align: center;
}
</style>