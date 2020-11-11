<template>
  <div class="movie_body" ref="movie_body">
    <!-- <Loading v-if="isLoading" /> -->
    <scroll>
      <ul>
        <!-- <li>
          <div class="pic_show"><img src="/images/movie_1.jpg" /></div>
          <div class="info_list">
            <h2>无名之辈</h2>
            <p>观众评 <span class="grade">9.2</span></p>
            <p>主演: 陈建斌,任素汐,潘斌龙</p>
            <p>今天55家影院放映607场</p>
          </div>
          <div class="btn_mall">购票</div>
        </li> -->
         <li v-for="item in movieList" :key="item.id">
          <div class="pic_show" @click="handleToDetail(item.id)"><img :src="item.img | setWH('128.180')"></div>
          <div class="info_list" @click="handleToDetail(item.id)">
              <h2 >{{ item.nm }} <img v-if="item.version" :src="item.poster" alt=""></h2>
              <p>观众评 <span class="grade">{{ item.sc }}</span></p>
              <p>主演: {{  item.star }}</p>
              <p>{{ item.showInfo }}</p>
          </div>
          <div class="btn_mall">
              购票
          </div>
      </li>
      </ul> 

    </scroll>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from "axios";
import MovieItem from "./childcom/MovieItem";


import Scroll from '../../common/Scroll/Scroll'
// import BScroll from 'better-scroll'
export default {
  name: "NowPlaying",
  data() {
    return {
      movieList: [],
    };
  },

  components: {
    MovieItem,
  Scroll
  },
  mounted() {
    axios({
      method: 'get',
      url:'/mock/nowPlaying.json'
    }).then((res) => {
      console.log(res);
      this.movieList = res.data.movieList
      console.log(this.movieList);
      // this.$nextTick(() => {
      //   var scroll = new BScroll(this.$refs.movie_body, {})
      //   console.log(scroll);
      // })
    })},
  methods: {
    handleToDetail(movieId) {
      this.$router.push('/movie/detail/1/' + movieId)
    }
  },

};


</script>

<style lang="scss" scoped>
#content .movie_body{ flex:1; overflow:auto;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body .pic_show{ width:64px; height: 90px;}
.movie_body .pic_show img{ width:100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}
</style>