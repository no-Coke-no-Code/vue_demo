<template>
    <div>
        <h2>今日天气</h2>
        <!-- <select id="select1" @change="changing">
            <option v-for="item in itemList" v-bind:value="item">{{item}}</option>
        </select> -->
        <div id="div1">
            <input type="text" @focus="focusing" @blur="bluring" @mouseover="overing" @mouseout="outing" v-model="choosecity" id="txt1" autocomplete="off" placeholder="城市名称..."/>
            <button @click="choosing" id="btn1">点击查看天气</button>
        </div>
        <h2>{{this.errMessage}}</h2>
        <table v-bind:class="{ifloading:this.ifNoResData}" id="showingTable">
            <tr>
                <th>气温</th>
                <th>天气状况</th>
                <th>穿衣建议</th>
                <th>是否适合出游</th>
                <th>是否适合锻炼</th>
            </tr>
            <tr>
                <td><span>{{this.resData.temperature}}</span></td>
                <td><span>{{this.resData.weather}}</span></td>
                <td><span>{{this.resData.dressing_advice}}</span></td>
                <td><span>{{this.resData.travel_index}}</span></td>
                <td><span>{{this.resData.exercise_index}}</span></td>
            </tr>
        </table>
    </div>
</template>

<script>
import qs from "qs";

export default {
    name:"peak",
    data(){
        return{
            resData:'',
            itemList:[
                " ",
                "广州",
                "深圳",
                "东莞",
                "韶关",
            ],
            choosecity:'',
            ifNoResData:true,
            errMessage:'',
            iffocusing:false,
            justTesting:1,
        }
    },
    methods:{
        changing:function(ele){
            this.resData = "";
            this.choosecity = ele.target.value;
            console.log(this.$store.state.loading);
            var url = this.Host + "/weather/index?cityname=" + this.choosecity + "&key=940e87d971242bf810201922aa7d4fe3";
            this.$axios.get(url).then((res) => {
                this.resData = res.data.result.today;
            }).catch((err) => {
                console.log("出错了" + err);
            });
        },

        choosing:function(){
            this.resData = '';
            var url = this.Host + "/weather/index?cityname=" + this.choosecity + "&key=940e87d971242bf810201922aa7d4fe3";
            console.log(url);
            this.$axios.get(url).then((res) => {
                this.errMessage = '';
                this.resData = res.data.result.today;
                this.ifNoResData = false;
            }).catch((err) => {
                this.ifNoResData = true;
                console.log("出错了" + err);
                this.errMessage = "请输入正确的城市名称";
            });
        },

        focusing:function(ele){
            ele.target.style.borderRadius = "1px";
            ele.target.style.boxShadow = "0 0 0 3px lightblue";
            this.iffocusing = true;
        },
        bluring:function(ele){
            ele.target.style.borderRadius = "none";
            ele.target.style.boxShadow = "none";
            this.iffocusing = false;
        },
        overing:function(ele){
            ele.target.style.borderRadius = "1px";
            ele.target.style.boxShadow = "0 0 0 3px lightblue";
        },
        outing:function(ele){
            if(this.iffocusing == true)
            {
                return;
            }
            else
            {
                ele.target.style.borderRadius = "none";
                ele.target.style.boxShadow = "none";
            }
        },
    },
    mounted(){
        // var url = this.Host + "/weather/index?cityname=广州&key=940e87d971242bf810201922aa7d4fe3";
        // this.$axios.get(url).then((res) => {
        //     // this.resData = res.re;
        //     this.resData = res.data.result.today;
        // }).catch((err) => {
        //     console.log("出错了" + err);
        // });
        // console.log(this.$store.state.loading);
        console.log("父亲:");
        console.log(this);
    },
}
</script>

<style scoped>
    #select1 > option:first-of-type{
        display: none;
    }

    .ifloading
    {
        display: none;
    }

    h2:first-of-type
    {
        font-size: 30px;
        border-bottom: 3px dotted gray;
        padding-bottom: 5px;
    }
    h2:nth-of-type(2)
    {
        margin-top: 50px;
    }

    #div1
    {
        margin-top: 30px;
    }

    #txt1
    {
        width: 180px;
        padding-left: 3px;
        height: 30px;
        line-height: 30px;
        margin-right: 50px;
        font-size: 20px;
        border-radius: 5px;
        outline: none;
        transition: 0.3s ease;
    }
    #txt1:hover
    {
        border-radius: 1px;
        box-shadow:0 0 0 3px lightblue;
    }

    #btn1
    {
        padding-right: 20px;
        padding-left: 20px;
        height: 35px;
        line-height: 35px;
        cursor: pointer;
        border: none;
        font-size:20px;
        transition: 0.3s ease;
        outline: none;
    }
    #btn1:hover
    {
        background-color: lightgreen;
        color: white;
    }

    #showingTable,#showingTable th,#showingTable td
    {
        border: 2px solid black;
    }
    #shoiwngTable th,#showingTable td
    {
        padding: 5px;
    }
    #showingTable th
    {
        background-color: lightgreen;
    }
    #showingTable
    {
        margin-top: 30px;
        border-collapse:collapse;
        text-align: center;
    }
    #showingTable td>span
    {
        display: inline-block;
        text-align: left;
    }
</style>


