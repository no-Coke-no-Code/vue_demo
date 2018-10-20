import Vue from 'vue'
import Router from 'vue-router'
import bodi from './../components/bodi.vue';
import details from './../components/details.vue';
import duty from "./../components/duty.vue";
import peak from "./../components/peak.vue";
import kaifang from "./../components/kaifang.vue";
import pingpai from "./../components/pingpai.vue";
import detailMsg from "./../components/detailMsg.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bodi',
      component:bodi,
    },
    {
      path:'/details',
      name:'details',
      component:details,
      redirect:"/details/kaifang",
      children:[
        {
          path:"duty",
          name:'duty',
          component:duty,
        },
        {
          path:"peak",
          name:'peak',
          component:peak,
        },
        {
          path:"pingpai",
          name:'pingpai',
          component:pingpai,
        },
        {
          path:'pingpai/detailMsg/:id',
          name:'detailMsg',
          component:detailMsg,
        },
        {
          path:"kaifang",
          name:'kaifang',
          component:kaifang,
        },
      ],
    },
  ]
})
