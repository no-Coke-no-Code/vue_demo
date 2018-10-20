<template>
    <div id="timer">
        <ul>
            <li v-for="(item,index) in this.choosing" @click="choose(index)" :class="{choosing:item.ifchoosing}">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'timer',
    data(){
        return{

        }
    },
    props:{
        choosing:{
            type:Array,
            default:[
                {
                    name:'none',
                }
            ],
        },
    },
    methods:{
        choose(index){
            for(let x = 0;x<this.choosing.length;x++)
            {
                this.choosing[x].ifchoosing = false;
            }
            this.choosing[index].ifchoosing = true;
            this.$emit("timeValue",this.choosing[index].value);
            // this.$store.commit("updateOrder",["time",this.choosing[index].value]);
            this.$store.dispatch("updateOrder",["time",this.choosing[index].value]);
        },
    },
}
</script>

<style scoped>
    *
    {
        margin:0px;
        padding: 0px;
        list-style-type: none;
        font-size: 0px;
    }
    #timer > ul
    {
        overflow: hidden;
    }
    #timer > ul > li
    {
        font-size: 16px;
        float: left;
        margin-right: 10px;
        margin-left: 10px;
        cursor: pointer;
        border: 1px solid gray;
        border-radius: 5px;
        width: 70px;
        text-align: center;
    }
    #timer > ul > li:hover
    {
        background-color: lightgreen;
        color: white;
    }

    .choosing
    {
        background-color: lightgreen;
        color: white;
    }
</style>
