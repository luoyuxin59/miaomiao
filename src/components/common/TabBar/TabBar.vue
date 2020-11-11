<template>
  <div class="tabbar" >
     <ul>
      <router-link tag="li" to="/movie">
          <i class="iconfont icon-dianying"></i>
          <p>电影</p>
      </router-link>
      <router-link tag="li" to="/cinema">
          <i class="iconfont icon-yingyuan"></i>
          <p>影院</p>
      </router-link>
      <router-link tag="li" to="/mine">
          <i class="iconfont icon-wode"></i>
          <p>我的</p>
      </router-link>
  </ul>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  methods: {
    
   
  }
}
</script>

<style lang="scss" scoped>
@import url('../../../assets/css/iconfont/iconfont.css');
  .tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 44px;
    padding: 5px 0;
    border-top: 2px #ebe8e3 solid;
    background-color: #fff;
    ul{
      display: flex;
      text-align: center;
        li{
          flex: 1;
            .iconfont {
              font-size: 20px;
            }
            p{
              font-size: 12px;
            }
        }
    }  
  }
  .router-link-active{ color: #f03d37;}
</style>