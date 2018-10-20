<template>
  <div id="app">
      <div v-bind:class="{ifloading:this.$store.state.notloading}" class="loadingCover">
        <h2 v-bind:class="{ifloading:this.$store.state.notloading}" class="loadingLetter">正在加载...</h2>
      </div>
      <div>
        <heading/>
        <router-view></router-view>
        <foot/>
      </div>
  </div>
</template>

<script>

import heading from "./components/heading.vue";
import bodi from "./components/bodi.vue";
import foot from "./components/foot.vue";

$(function(){
  alert("引入JQ成功");
});

export default {
  name: 'App',
  components:{
    heading,
    bodi,
    foot,
  },
}
</script>

<style>
    *
    {
      padding: 0;
      margin: 0;
    }
    html,body
    {
      height: 100%;
    }
    body
    {
      background-color: #f1f1f1;
    }

    #app
    {
      position: relative;
      height: 100%;
    }

    .loadingCover
    {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        background-color: rgba(12,12,32,0.5);
        z-index: 1;
    }

    .loadingLetter
    {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 500px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        z-index: 1;
    }
    .ifloading
    {
      display: none;
    }
</style>
