<template>
  <div class="search">
      <mt-search class="search"  cancel-text="取消"  placeholder="请输入电影名称" v-model ="msg" ></mt-search>
  </div>
</template>

<script>

export default {
  name: "Search",
  data() {
    return {
      msg: ''
    }
  },
  watch: {
    msg(newmsg) {
     this.axios({
       url:'m.maizuo.com/gateway?cityId=110100&ticketFlag=0&k=2725942',
       
       headers: {
        'kw': newmsg,
        'stype': '-1',
        'cityId': '45'
       }
      }).then(res => {
        console.log(res);
      })
    }

  }
}
</script>

<style lang="scss" scoped>
  .search {
    margin-top: 97px;
    height: 50px;
  
  }
</style>
