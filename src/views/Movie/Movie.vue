<template>
  <div id="main">
    <Header1></Header1>
    <div id="content">
      <div class="movie_menu">
        <router-link tag="div" to="/movie/city" class="city_name">
          <span>{{ $store.state.city.nm }}</span
          ><i class="iconfont icon-lower-triangle"></i>
        </router-link>
        <div class="hot_swtich">
          <router-link tag="div" to="/movie/nowPlaying" class="hot_item"
            >正在热映</router-link
          >
          <router-link tag="div" to="/movie/comingSoon" class="hot_item"
            >即将上映</router-link
          >
        </div>
        <router-link tag="div" to="/movie/search" class="search_entry">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <TabBar />
   <router-view name="detail" />
  </div>
</template>

<script>
import Header1 from "@/components/common/Header/Header1";
import TabBar from "@/components/common/TabBar/TabBar";
import NavBar from "@/components/common/NavBar/NavBar";
import {messageBox} from '../../JS/index'

export default {
  name: "Movie",
  components: {
    Header1,
    TabBar,
  },
  mounted() {
    setTimeout(() => {
      this.axios.get('http://ip-api.com/json/?lang=zh-CN').then(res => {
        console.log(res);
        var msg = res.data
        var nm = msg.regionName
        if( this.$store.state.city.nm == nm) {return}
        messageBox({
          title: '定位',
          content: msg.regionName,
          cancel: '取消',
          ok: '切换定位',
          handleOk(){
           var city = window.localStorage.getItem('city')
           var citylist =JSON.parse(city)
           for(var i = 0; i< citylist.length; i++){
             for(var j = 0; j< citylist[i].list.length; j++){
              //  console.log(citylist[i].list[j]);
               if( msg.regionName == citylist[i].list[j].name) {
                 var id = citylist[i].list[j].cityId
                window.localStorage.setItem('nowNm', nm)
                window.localStorage.setItem('nowId', id)
                window.location.reload(); 
               }
             }
           }
      }
    }) 
      })
    },2000)
  
  }
};
</script>

<style lang="scss" scoped>
#content .movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 10;
}
.movie_menu .city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .city_name.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .city_name.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_swtich {
  display: flex;
  height: 100%;
  line-height: 45px;
}
.movie_menu .hot_item {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
.movie_menu .hot_item.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_item.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .search_entry.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry i {
  font-size: 24px;
  color: red;
}

.slide-enter-active {
  animation: 13s detailMove;
}
@keyframes detailMove {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>>

