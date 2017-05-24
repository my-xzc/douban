<template>
    <div class="detail">
           <img :src="detailItem.images.large" alt="" height="350px" width="250px" style="display:block;margin:auto;">
           <p>{{detailItem.title}}</p>
           <p>评分：{{detailItem.rating.average}} <span class="ratingcounts">{{detailItem.ratings_count}}人评价</span></p>
           <div>
             <p class="title">剧情简介</p>
             <p>{{detailItem.summary}}</p>
           </div>
           <div>
            <p class="title">导演</p>
            <mu-row gutter>
                <mu-col width="100" tablet="50" desktop="33">
               <a :href="detailItem.directors[0].alt"> <img :src="detailItem.directors[0].avatars.medium" alt=""></a>
                <p>{{detailItem.directors[0].name}}</p>
                </mu-col>
            </mu-row>
           </div>
           <div>
            <p class="title">演员</p>
            <mu-row gutter>
                <mu-col width="50" tablet="25" desktop="25" v-for="item in detailItem.casts" :key="item.id">
                <a :href="item.alt"><img :src="item.avatars.medium" alt=""></a>
                <p>{{item.name}}</p>
                </mu-col>
            </mu-row>
           </div>

    </div>
</template>
<script>
     export default {
         name:'detail',
            data () {
                return {
                    detailItem:{}
                }
            },
            created () {
                    this.ScrollTop();
                    this.getDetail();    
            },
            watch:{
                '$route':'getDetail'
            },
            methods:{
                getDetail:function(){
                    this.$http.jsonp(this.$api.detail+this.$route.params.id)
                              .then(function(res){
                                  this.detailItem= res.data; 
                              },function(){
                                    // alert('未请求到数据')
                              })
                },
                 ScrollTop: function(){ 
                    //前边是获取chrome等一般浏览器 如果获取不到就是ie了 就用ie的办法获取 
                    // var x=document.body.scrollTop||document.documentElement.scrollTop; 
                    // var timer=setInterval(function(){ 
                    //         x=x-100; 
                    //         if(x<100){ 
                    //                 x=0; 
                    //          window.scrollTo(x,x); 
                    //                 clearInterval(timer); 
                    //        } 
                    //          window.scrollTo(x,x); 
                    //        },"250"); 
                     window.onbeforeunload = function(){
                                    window.scrollTo(0,0);
                                }
                        }                   
                 }
            }
           
</script>
<style lang="">
    .detail{
        margin-bottom:70px;
    }
    .ratingcounts{
        color:#AAAAB1;
    }
    .title{
        font-size: 15px;
        font-weight: 600;
    }
</style>