<template>
 <div>
        <mu-flexbox class="mt8" orient="vertical">
            <mu-flexbox-item order="2" class="item">
             <div> <span class="title">影院热映</span>  <router-link class="more" to="/hot">更多</router-link></div>
              <mu-circular-progress class="circle" :size="60"  v-show="hotReady[0]"/>
              <div style="text-align:center;" v-show="hotReady[1]">TMD没有数据</div>
                <mu-row gutter>
                  <mu-col class="list-item" width="50" tablet="25" desktop="25" v-for="item in hotItem" :key="item.id">
                    <router-link :to="{name:'detail',params:{id:item.id}}">
                    <img :src="item.images.large" :alt="item.alt" style="width:100%;height:20rem;">
                    </router-link>
                    <p>{{item.title}}</p>
                    <p>评分：{{item.rating.average}}</p>
                  </mu-col>
                </mu-row>
            </mu-flexbox-item>
            
            <mu-flexbox-item order="2" class="item">
              <div><span class="title">新片速递</span>  <router-link class="more" to="/comingsoon">更多</router-link></div>
                <mu-circular-progress class="circle" :size="60"  v-show="comingsoonReady[0]"/>
                <div style="text-align:center;" v-show="hotReady[1]">TMD没有数据</div>
                <mu-row gutter>
                  <mu-col class="list-item" width="50" tablet="25" desktop="25" v-for="item in comingsoonItem" :key="item.id">
                    <router-link :to="{name:'detail',params:{id:item.id}}">
                    <img :src="item.images.large" :alt="item.alt" style="width:100%;height:20rem;">
                    </router-link>
                    <p>{{item.title}}</p>
                    <p>评分：{{item.rating.average}}</p>
                  </mu-col>
                </mu-row>
            </mu-flexbox-item>
            <mu-flexbox-item order="2" class="item">
              <div><span class="title">北美票房</span>  <router-link class="more" to="/usbox">更多</router-link></div>
              <mu-circular-progress class="circle" :size="60" v-show="usboxReady[0]"/>
              <div style="text-align:center;" v-show="hotReady[1]">TMD没有数据</div>
              {{usboxItem.subject}}
               <mu-row gutter>
                  <mu-col class="list-item" width="50" tablet="25" desktop="25" v-for="item in usboxItem" :key="item.id">
                    <router-link :to="{name:'detail',params:{id:item.subject.id}}">
                    <img :src="item.subject.images.large" :alt="item.subject.alt" style="width:100%;height:20rem;">
                    </router-link>
                    <p>{{item.subject.title}}</p>
                    <p>评分：{{item.subject.rating.average}}</p>
                  </mu-col>
                </mu-row>
            </mu-flexbox-item>
            <mu-flexbox-item order="2" class="item">
              <div><span class="title">经典电影</span>  <router-link class="more" to="/top250">更多</router-link></div>
              <mu-circular-progress class="circle" :size="60" v-show="top250Ready[0]"/>
              <div style="text-align:center;" v-show="hotReady[1]">TMD没有数据</div>
               <mu-row gutter>
                  <mu-col class="list-item" width="50" tablet="25" desktop="25" v-for="item in top250Item" :key="item.id">
                    <router-link :to="{name:'detail',params:{id:item.id}}">
                    <img :src="item.images.large" :alt="item.alt" style="width:100%;height:20rem;">
                    </router-link>
                    <p>{{item.title}}</p>
                    <p>评分：{{item.rating.average}}</p>
                  </mu-col>
                </mu-row>
            </mu-flexbox-item>
      </mu-flexbox>
       <mu-circular-progress :size="40" v-show="showProgress"/>

 </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      showProgress:false,
      start:0,
      count:5,
      hotReady:[true,false],
      comingsoonReady:[true,false],
      usboxReady:[true,false],
      top250Ready:[true,false],
      hotItem:[],
      comingsoonItem:[],
      usboxItem:[],
      top250Item:[]
    }
  },
  created () {
        this.getHot();
        this.getComingSoon();
        this.getUsbox();
        this.getTop250();
        // this.doFun();
  },
  methods: {
      getHot:function(){
               this.$http.jsonp(this.$api.hot)
                        .then(function(res){
                            let data = res.data.subjects;
                                this.hotItem = data;
                           if(this.hotItem.length != 0){
                                this.hotReady[0] = false;
                                console.info('hot',  this.hotItem);
                           }
                        },function(){
                                this.hotReady[1] = true;
                                console.log('error')
                        })
      }
      ,
      getComingSoon:function(){
               this.$http.jsonp(this.$api.comingsoon)
                        .then(function(res){
                          let data = res.data.subjects;
                              this.comingsoonItem = data;
                            if(this.comingsoonItem.length != 0){
                                  this.comingsoonReady[0] = false ;
                                  console.info('comingsoonReady',this.comingsoonItem)
                            }
                        },function(){
                                  this.comingsoonReady[1] = true;
                                  console.log('error')
                        })
      },
      getUsbox:function(){
               this.$http.jsonp(this.$api.usbox)
                        .then(function(res){
                          let data = res.data.subjects;
                             
                           this.usboxItem = data;
                           if(this.usboxItem.length!= 0 ){
                              this.usboxReady[0] = false;
                              console.log('usboxReady', this.usboxItem)
                           }
                           
                        },function(){
                              this.usboxReady[1] = true;
                              console.log('error')
                        })
      },
      getTop250:function(){
               this.$http.jsonp(this.$api.top250)
                        .then(function(res){
                          let data = res.data.subjects;
                              this.top250Item = data;
                          
                           if(this.top250Item.length != 0){
                              this.top250Ready[0] = false;
                              console.info('top250Ready',this.top250Item)
                           }
                          
                        },function(){
                              this.top250Ready[1] = true;
                              console.log('error')
                        })
      }

  }
}
</script>
<style scoped>
  .item{
            position: relative;
        min-height: 18rem;
  }
  .more{
    float:right;
  }
  .title{
    font-size:16px;
    color:#7E57C2;
  }
  .list-item{
    position:relative;
    display:inline-block;
    width:auto;
  
    margin-bottom:10px;
 
  }
 .list-item p{
    line-height: 1;
    margin: 0 0 10px;
  }
  .itemTitle{
    position:absolute;
    bottom:0;
    width:100%;
    line-height:2;
    margin:0;
    padding-left:20px;
  }
  .circle{
        width: 60px;
        height: 60px;
        position: absolute;
        left: 50%;
        margin-left: -30px;
  }
</style>