<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
<style>
html {
  font-size: 50px;
}
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #f5f5f5;
}
a {
  text-decoration: none;
  color: #3190e8;
}
li {
  list-style-type: none;
}
</style>
