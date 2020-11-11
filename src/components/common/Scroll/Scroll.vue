<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  data() {
    return {
      scroll:null,
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    }
  },  
  // 1.组件创建完成后调用
  mounted() {
    var scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      click: true,
      pullUpLoad: this.pullUpLoad,
       
    })
    // 2.监听滚的位置
    scroll.on('scroll',(position) => {
     this.$emit('scroll', position)
    })
    // 3.监听上拉加载事件
    scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods:{
      scrollTo(x, y, time){
       this.scroll &&  this.scroll.scrollTo(x, y, 300) 
      },
      finishPullUp(){
        this.scroll &&  this.scroll.finishPullUp() 
      },
      refresh() {
        console.log('scroll');
        this.scroll && this.scroll.refresh()
      },
      getCurrentY() {
        // console.log(getCurrentY);
        return this.scroll.y ? this.scroll.y : 0
      }
  }
}
</script>

<style scoped>
  .wrapper{
     height: 100%; 
  }
</style>