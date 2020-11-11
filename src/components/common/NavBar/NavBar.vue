<template>
  <div class="nav-bar">
    <div  class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
.nav-bar{
  z-index: 9;
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  line-height: 44px;
  display: flex;
  text-align: center;
  border-bottom: 1px solid #ccc;
   background-color: #fff;
  .left,
  .right {
    width: 70px;
  }
  .center {
    flex: 1;
  }
}
</style>
