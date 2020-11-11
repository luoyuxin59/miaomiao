<template>
  <ul class="movie">
    <li class="movie-item" v-for="movie in movieList" :key="movie.filmId">
       <img :src="movie.poster" alt="">
      <div class="item-text">
        <h4 class="title">{{movie.name}} <span>{{movie.item.name}}</span> </h4>
        <p v-if="movie.grade" ><span >观众评分</span><span class="score">{{movie.grade}}</span></p>
        <div v-else class="item-score"> </div>
        <div class="actors"><span>主演:{{movie.actors | actorfilter}}</span></div>
        <div> {{movie.nation}}  |  {{movie.runtime}}分钟</div>
      </div>
      <div class="item-btn">
        <button>购票</button>
      </div>
    </li>
  </ul>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'MovieItem',
  props:[`movieList`],
  
}
Vue.filter("actorfilter", function(data){
  var newList = data.map(item => item.name)
  return newList.join(' ')
})
</script>

<style lang="scss" scoped>

.movie-item{
  padding: 20px 10px;
  display: flex;
  height: 100%;
  img {
    width: 80px;
    height: 100px; 
  }
  .item-text{
    width: 200px;
    padding: 10px 0 10px 10px;
    font-size: 14px;
    color: #777;
    flex: 1;
   h4{
     font-weight: 400;
     color: #333; 
      font-size: 16px;
     span{
      background-color: #ccc;
      color: #fff;
      font-size: 12px;
      width: 20px;
      padding:0 0px;
       }
     }
      .item-score {
      height: 20px;
      width: 100%;
      background-color: #fff;
   
    }
  .score{
    font-size: 14px;
    color: orange;
    padding-left: 2px;
   }
   .actors{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
   
   }

  }
  .item-btn{
    width: 30%;
    text-align: center;
    padding: 30px 10px;
      button{
      display: inline-block;
      width: 50px;
      height: 30px;
      border: 1px solid orange;
      color: orange;
      background-color: #fff;
      border-radius: 3px;
      }
  }

}
</style>