<template>
    <div>
           努力开发中...
    </div>  
</template>
<script>
  export default {
      name:'top250',
      data () {
          return {

          }
      },
      created () {
            this.getTop250();
      },
      methods:{
          getTop250:function(){
            //   this.$http.jsonp(this.$api.top250)
            //             .then(function(res){
            //                     console.log(res)
            //             },function(){

            //             })
          }
      }
  }
</script>
<style lang="">
    
</style>