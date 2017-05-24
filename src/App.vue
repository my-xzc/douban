<template>
  <div id="app">
 
          <transition
                name="custom-classes-transition"
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
          >
                <keep-alive>
                <router-view class="child-view"></router-view>
                </keep-alive>
          </transition>

    <footer id="foot" class="foot">
        <mu-paper>
            <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
              <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video" to="/"/>
            </mu-bottom-nav>
        </mu-paper>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
   data () {
    return {
      bottomNav: 'movies',
      bottomNavColor: 'movies'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    
  }
}
}
</script>

<style>
@import '~animate.css/animate.css';
@import 'assets/css/common.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:100%;

  margin:auto;
  
}
.foot{
  position:fixed;
  left:0;
  bottom:0;
  width:100%;
}
</style>
