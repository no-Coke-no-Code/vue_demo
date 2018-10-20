import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        order:{
            "counter":1,
            "level":1,
            "time":1,
        },
        totalPrice:0,
        notloading:true,
    },

    mutations:{
        updateOrder(state,data){
            // state.order = {
            //     "counter" : data.counter,
            //     "level" : data.level,
            //     "time" : data.time,
            // };
            state.order[data[0]] = data[1];
            console.log(state.order);
        },
    },

    actions:{
        updateOrder(context,data){
            context.commit("updateOrder",data);
        }
    },

    getters:{
        getOrder(state){
            return state.order?state.order:{};
        },
    },
});