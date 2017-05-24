<template>
    <div>
     努力开发中...
  </slider>
  </div>
</template>
<script>
  export default {

      name:'usbox',
      data () {
          return {

          }
      },
      created () {
            this.getUsbox();
      },
      methods:{
          getUsbox:function(){
            //   this.$http.jsonp(this.$api.top250)
            //             .then(function(res){
            //                     console.log(res)
            //             },function(){

            //             })
          }
      },
  }
</script>
<style lang="">
    
</style>