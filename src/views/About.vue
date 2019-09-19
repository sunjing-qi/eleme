<template>
  <div>
    <myheader :meaasge="message" />
  </div>
</template>
<script>
import myheader from "../components/Hearder";
export default {
  components: { myheader },
  data() {
    return {
      message: "你那个页面的标题"
    };
  }
};
</script>