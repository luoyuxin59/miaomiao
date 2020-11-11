<template>
  <div class="city">
    <!-- <mt-index-list ref="mylist">
      <mt-index-section :index="item.index" v-for="item in cityList" :key="item.index">
        <div @click="handleclick(city.cityId)" v-for="city in item.list" :key="city.cityId">
        <mt-cell :title="city.name"></mt-cell>
        </div>
     </mt-index-section>
    </mt-index-list> -->
    <div class="current-city"><span class="back" @click="backClick">×</span><span class="current">当前城市</span> </div>
    <mt-search class="search"  cancel-text="取消"  placeholder="请输入城市名称">
</mt-search>
   <mt-index-list ref="mylist" >
        <div  class="hot-city">
      <div class="hot" >热门城市</div>
      <div class="city-item" v-for="item in cityList" :key="item.cityId">
          <!-- <div  v-for="hotcity in item.list " :key="hotcity.cityId" v-if="hotcity.isHot == 1" class="item">{{hotcity.name}}</div> -->
      </div>
    </div>
      <mt-index-section :index="item.index" v-for="item in cityList" :key="item.cityId">
         <div @click="handleToCity(city.name,city.cityId)" v-for="city in item.list" :key="city.cityId">
      <mt-cell  :title="city.name"></mt-cell>
    </div>
  </mt-index-section>
</mt-index-list>
  </div>
</template>

<script>
export default {
  name: 'City',
  data() {
    return {
      cityList: [],
     
    }
  },
  components: {
   
  },
  mounted() {
    // 取出本地数据 
    var citylist = window.localStorage.getItem('city')
    // console.log(citylist);
    if(citylist) {
      this.cityList = JSON.parse(citylist)
      console.log( this.cityList);
    }else{
    this.axios({
      url:"https://m.maizuo.com/gateway?k=9502566",
      headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
   }).then(res => {
     console.log(res);
     this.cityList = this.handleClick(res.data.data.cities)
     console.log(this.cityList);
      // 将城市数据存储到本地
      window.localStorage.setItem('city',JSON.stringify( this.cityList ))
     })
    }
  },
  methods: {
    handleClick(datalist) {
     var letterArr = []
     for(var i =65; i < 90; i++){
       letterArr.push(String.fromCharCode(i))
     }
     console.log(letterArr);
     let newlist =[]
     for(var j = 0; j < letterArr.length;j++) {
      //  var arr = datalist.filter(item => item.pinyin.substring(0,1) === letterArr[j].toLowerCase())
       var arr = datalist.filter(item => item.pinyin.substring(0,1) === letterArr[j].toLowerCase())
      if(arr.length > 0) {
       newlist.push({
        index: letterArr[j],
         list: arr
       })
     }
     
     }
     return newlist
    },
    // 修改城市
    handleToCity(nm, id){
      console.log(nm);
      console.log(id);
      this.$store.commit('city/CITY_INFO',{nm , id})
      window.localStorage.setItem('nowNm', nm)
      window.localStorage.setItem('nowId', id)

      this.$router.push('NowPlaying')
    },
    backClick() {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .city {
    height: 100%;
    .current-city{
      font-size: 18px;
      line-height: 40px;
      display: flex;
      text-align: center;
      color: #666;
      .current{
        flex: 1;
      }
      .back{
        width: 9.5%;
        font-size: 39px;
        font-weight: 100;
      }
    }
    .hot-city{
      padding: 8px;
      .hot{
        color: #ccc;
        font-size: 14px;
      }
      .city-item {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: center;
        .item{
          float: left;
          width: 100px;
          line-height: 30px;
          margin: 8px 5px  8px 5px;
          background-color: #f3f3f3;
          border-radius: 3px;
          text-align: center;
          font-size: 14px;
        }
      }
    }
    .search{
      height: 50px;
      .mint-searchbar-cancel {
        color: #333;
      }
    }
    .mint-searchbar{
      background-color: #f3f3f3 !important; 

    }
  }
  
</style>