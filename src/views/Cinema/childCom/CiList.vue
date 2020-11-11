<template>
  <div  class="cinema_body">
      <scroll>
    <ul >
    
      <li class="list-item" v-for="cinema in ciList" :key="cinema.cinemaId">
        <div class="item-info">
          <span class="title">{{ cinema.name }}</span
          ><span class="lowprice"
            >{{ cinema.lowPrice / 100 }}<span class="yuan">元起</span>
          </span>
        </div>
        <div class="item-address">
         <span class="address"> {{ cinema.address}}</span><span v-if="cinema.Distance" class="Distance">{{ cinema.Distance | Fixed }}km</span>
        </div>
        <div class="item-other"><span></span><span></span></div>
      </li>
    
    </ul>
      </scroll>
  </div>
</template>

<script>
import Vue from "vue";
import Scroll from '@/components/common/Scroll/Scroll'
export default {
  name: "CiList",
  data() {
    return {
      ciList: []
    };
  },
  components: {
    Scroll
  },
  activated() {
    var id = this.$store.state.city.id;
    console.log(this.$store.state.city.nm);
    console.log(id);
    this.axios({
      url: `https://m.maizuo.com/gateway?cityId=${this.$store.state.city.id}&ticketFlag=1&k=3409399`,
      headers: {
        "X-Client-Info":  '{"a":"3000","ch":"1002","v":"5.0.4","e":"1604470426955806317019139","bc":"110100"}',
        "X-Host": "mall.film-ticket.cinema.list",
      },
    }).then((res) => {
      this.ciList = res.data.data.cinemas;
      console.log(this.ciList);
      var count =0
    
    });
  },
};
Vue.filter("Fixed", (val) => {
  return val.toFixed(2);
});
</script>

<style lang="scss" scoped>
.cinema_body {
  height: 500px;
   flex:1;
  overflow:auto;
  .list-item {
    font-size: 17px;
    height: 68px;
    margin: 10px;
    border-bottom: 1px solid #ccc;
    .item-info {
      padding: 5px 0;
      .lowprice {
        color: #f03d37;
      }
      .yuan {
        padding-left: 3px;
        font-size: 10px;
      }
    }
    .item-address {
      font-size: 14px;
      display: flex;
        color: #666;
      .address {
        flex: 1;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
}
</style> 