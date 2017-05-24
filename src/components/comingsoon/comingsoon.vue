<template>
    <div>
     努力开发中。。。
    </div>
</template>
<script>
     export default {
         name:'comingsoon',
            data () {
                return {
                    
                }
            },
            created () {
                    this.getComingSonn()
            },
            methods:{
                getComingSonn:function(){
                    console.info('加载中...', new Date())
                    // this.$http.jsonp(this.$api.comingsoon,function(event){
                    //                     console.log(event.progress)
                    //                     })
                    //           .then(function(res){
                    //                         console.info('加载完毕...',new Date())
                    //                          console.log(res.data)
                                    
                    //           },function(){

                    //           })

                }
            }
     }
</script>
<style lang="">
    
</style>