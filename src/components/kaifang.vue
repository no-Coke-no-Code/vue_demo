<template>
    <div>
        <div id="kaifang_inner">
            <div id="kaifang_inner_top">
                <h2>流量分析</h2>
                <p>
                    在网页的一般开发流程中，我们通常会通过 JS 操作 DOM (对应 HTML 的描述产生的树)，以引起界面的一些变化响应用户的行为。例如，用户点击某个按钮的时候
                    ，JS 会记录一些状态到 JS 变量里边，同时通过 DOM API 操控 DOM 的属性或者行为，进而引起界面一些变化。当项目越来越大的时候，
                    你的代码会充斥着非常多的界面交互逻辑和程序的各种状态变量，显然这不是一个很好的开发模式，因此就有了 MVVM 的开发模式（例如 React, Vue）
                    ，提倡把渲染和逻辑分离。简单来说就是不要再让 JS 
                </p>
                <div id="kaifang_inner_top_form">
                    <span>购买数量:</span>
                    <div class="component">
                        <counter :min="this.counter.min" :max="this.counter.max" @counter="getGoodInfo('counting',$event)"/>
                    </div>
                    <br/>
                    <span>产品类型:</span>
                    <div class="component">
                        <dropdown :dropdownlist="this.dropdownlist" @levelValue="getGoodInfo('levelValue',$event)"/>
                    </div>
                    <br/>
                    <span>有效时间:</span>
                    <div class="component">
                        <timer :choosing="choosing" @timeValue="getGoodInfo('timeValue',$event)"/>
                    </div>
                    <br/>
                    <span>总价:</span>
                    <div class="component">
                        {{final}}
                    </div>
                </div>
                {{getOrder}}
            </div>
            <div id="kaifang_inner_bottom">
                <h2>产品说明</h2>
                <p>
                    在网页的一般开发流程中，我们通常会通过 JS 操作 DOM (对应 HTML 的描述产生的树)，以引起界面的一些变化响应用户的行为。例如，用户点击某个按钮的时候
                    ，JS 会记录一些状态到 JS 变量里边，同时通过 DOM API 操控 DOM 的属性或者行为，进而引起界面一些变化。当项目越来越大的时候，
                    你的代码会充斥着非常多的界面交互逻辑和
                </p>
                <h3>用户行为指标</h3>
                <ul>
                    <li>用户行为指标主要反映用户是如何来到网站的</li>
                    <li>用户在网站上所停留的时间</li>
                    <li>用户来源网站</li>
                    <li>用户所使用的搜索引擎</li>
                    <li>在不同时间段的流量等等</li>
                </ul>
                <h3>浏览网站方式</h3>
                <ul>
                    <li>用户上网设备类型</li>
                    <li>用户浏览器版本</li>
                    <li>访问者电脑分辨率</li>
                    <li>用户所使用的操作系统和版本号</li>
                    <li>用户所在地区</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

import counter from "./component/counter.vue";
import dropdown from "./component/dropdown.vue";
import timer from "./component/timer.vue";

export default {
    name:"kaifang",
    components:{
        counter,
        dropdown,
        timer,
    },
    data(){
        return{
            counter:{
                min:1,
                max:10,
            },
            dropdownlist:[
                {
                    name:'初级版',
                    value:1,
                },
                {
                    name:'中级版',
                    value:2,
                },
                {
                    name:'高级版',
                    value:3,
                },
            ],
            choosing:[
                {
                    name:'一个月',
                    value:1,
                    ifchoosing:true,
                },
                {
                    name:'三个月',
                    value:3,
                    ifchoosing:false,
                },
                {
                    name:'半年',
                    value:6,
                    ifchoosing:false,
                },
                {
                    name:'一年',
                    value:12,
                    ifchoosing:false,
                },
            ],
            fromChildren:{
                count:1,
                level:1,
                time:1,
            },
        }
    },
    methods:{
        // getCounter(data){
        //     this.fromChildren.counter = data;
        // },
        // getLevelValue(data){
        //     this.fromChildren.levelValue = data;
        // },
        // getTimeValue(data){
        //     this.fromChildren.timeValue = data;
        // },
        getGoodInfo(key,value){
            this[key] = value;
            this.fromChildren.count = this.counting?this.counting:1;
            this.fromChildren.level = this.levelValue?this.levelValue:1;
            this.fromChildren.time = this.timeValue?this.timeValue:1;
        },
    },
    computed:{
        final(){
            return this.fromChildren.count+this.fromChildren.level+this.fromChildren.time;
        },

        getOrder(){
            return this.$store.getters.getOrder;
        },
    },
    beforeCreate(){
        console.log("正在beforeCreate环节:");
        console.log(this);
    },
    created(){
        console.log("正在created环节:");
        console.log(this);
    },
    mounted(){
        console.log("正在mounted环节:");
        console.log(this);
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

    #kaifang_inner_top,#kaifang_inner_bottom
    {
        background-color: white;
        padding-top: 1%;
        padding-bottom:1%;
        padding-left: 2%;
        padding-right: 2%; 
    }
    #kaifang_inner_top
    {
        margin-bottom: 20px;
    }
    #kaifang_inner_top p
    {
        margin-top: 20px;
        margin-bottom: 60px;
        text-indent: 2em;
        color: gray;
        font-size: 14px;
    }



    #kaifang_inner_bottom
    {
        padding-bottom: 20px;
    }
    #kaifang_inner_bottom h2
    {
        margin-bottom: 20px;
    }
    #kaifang_inner_bottom p:first-of-type
    {
        text-indent: 2em;
        color: gray;
        font-size: 14px;
    }
    #kaifang_inner_bottom h3
    {
        margin-top: 20px;
        margin-bottom: 10px;
    }


    .component
    {
        display: inline-block;
    }
</style>
