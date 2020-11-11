<template>
  <div>

  </div>
</template>

<script>
export default {
  mounted() {
     this.axios.get('http://ip-api.com/json/?lang=zh-CN').then(res => {
       console.log(res);
     })
  }
}
</script>

<style>

</style>