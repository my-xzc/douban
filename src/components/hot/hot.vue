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
                this.getHot()
        },
        methods:{
            getHot:function(){
                    // this.$http.jsonp(this.$api.hot)
                    //           .then(function(res){
                    //                 console.log(res)
                    //           },function(){

                    //           })
            }
        }
     }
</script>
<style lang="">
    
</style>