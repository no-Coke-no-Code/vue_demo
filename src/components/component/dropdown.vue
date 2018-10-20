<template>
    <div id="dropdown" v-on:click="changeshow">
        <div id="content">
            <span>{{this.dropdownlist[this.nowindex].name}}</span>
            <div id="arrow"></div>
        </div>
        <div id="dropdownlist" v-bind:class="{unshowing:ifshowing}" class="list">
            <ul>
                <li v-for="(item,index) in this.dropdownlist" class="listitem" @click="choosing(index)">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'dropdown',
    data(){
        return{
            nowindex:0,
            ifshowing:true,
            value:0,
        }
    },
    props:{
        dropdownlist:{
            type:Array,
            default:[{
                name:"test"
            }]
        },
    },
    methods:{
        changeshow:function(){
            this.ifshowing = !this.ifshowing;
        },
        choosing(index){
            this.nowindex = index;
            this.value = this.dropdownlist[index].value;
            this.$emit("levelValue",this.value);
            // this.$store.commit("updateOrder",["level",this.value]);
            this.$store.dispatch("updateOrder",["level",this.value]);
        },
    },
}
</script>

<style scoped>
    *
    {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }


    #dropdown
    {
        border: 1px solid gray;
        cursor: pointer;
        position: relative;
    }

    .unshowing
    {
        display: none;
    }

    .list
    {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        overflow: hidden;
        background-color: white;
    }
    .listitem:hover
    {
        background-color: lightgreen;
    }

    #arrow
    {
        border-top:5px solid black;
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
        border-bottom: 5px solid transparent;
        display: inline-block;
        margin-right: 5px;
    }
</style>


