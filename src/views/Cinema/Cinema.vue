<template>
  <div>
    <header1 title="喵喵影院"></header1>
    <div class="content">
      <div class="cinema_menu">
        <router-link tag="div" to="/cinema/city" class="city_switch">
          {{ this.$store.state.city.nm }}
          <i class="iconfont icon-lower-triangle"></i>
        </router-link>
        <div class="brand_swtich">
          品牌 <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="feature_switch">
          特色 <i class="iconfont icon-lower-triangle"></i>
        </div>
      </div>

      <ci-list :ciList="cinemas"></ci-list>
     
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
    <tab-bar></tab-bar>
  </div>
</template>

<script>

import Header1 from "@/components/common/Header/Header1";
import TabBar from "@/components/common/TabBar/TabBar";
import CiList from "./childCom/CiList"
export default {
  name: "Cinema",
  data() {
    return{
      cinemas: []
    }
  },
  components: {
    Header1,
    TabBar,
    CiList,
    
  },
  mounted() {
    
  },
};
</script>

<style  scoped>
.content .cinema_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
}
</style>