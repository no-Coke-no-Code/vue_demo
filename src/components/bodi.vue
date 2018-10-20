<template>
    <div id="bodi">
        <div id="bodi_left">
            <div class="bodi_left_block">
                <h2>全部产品</h2>
                <ul>
                    <template v-for="(item,index) in productList">
                        <h3>{{item.category}}</h3>
                        <ul>
                            <li v-for="product in item.list">
                                <a v-bind:href="product.url" target="_blank">{{product.name}}</a>
                                <span v-bind:class="{hotlogo:product.hot,nologo:!product.hot}">HOT</span>
                            </li>
                        </ul>
                        <div class="hr" v-if="index%2 == 0"></div>
                    </template>
                </ul>
            </div>
            <div class="bodi_left_block">
                <h2>最新消息</h2>
                <ul>
                    <template v-for="(item,index) in productList">
                        <h3>{{item.category}}</h3>
                        <ul>
                            <li v-for="product in item.list">
                                <a v-bind:href="product.url" target="_blank">{{product.name}}</a>
                            </li>
                        </ul>
                        <div class="hr" v-if="index%2 == 0"></div>
                    </template>
                </ul>
            </div>
        </div>


        <div id="bodi_right">
            <div id="bodi_right_block">
                <photoroll/>
            </div>
            <div id="bodi_right_block">
                <div v-for="item in itemlist" class="item">
                    <div class="item_inner">
                        <img class="img" v-bind:src="item.pic"/>
                        <div class="item_inner_content">
                            <h2>{{item.title}}</h2>
                            <p>{{item.description}}</p>
                            <div class="btn">
                                <router-link v-bind:to="{path:'/details/' + item.tag}">立刻购买</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import photoroll from "./photoroll.vue";

export default {
    name:'bodi',
    data(){
        return{
            productList:[
                {
                    category:"手机应用类",
                    list:[
                        {
                            name:'花生壳',
                            url:'http://www.baidu.com',
                            hot:true,
                        },
                        {
                            name:'百度',
                            url:'http://www.baidu.com',
                            hot:true,
                        },
                        {
                            name:'腾讯云',
                            url:'http://www.baidu.com',
                            hot:false,
                        },
                        ],
                },
                {
                    category:"PC应用类",
                    list:[
                        {
                            name:'荒野求生',
                            url:'http://baidu.com',
                            hot:false,
                        },
                        {
                            name:'绝地求生',
                            url:'http://baidu.com',
                            hot:true,
                        },
                        {
                            name:'刺激战场',
                            url:'http://baidu.com',
                            hot:false,
                        },
                    ],
                },
            ],
            itemlist:[
                {
                    title:'开放产品',
                    description:'开放产品是一款开放产品',
                    pic:'./../../static/logo1.jpg',
                    tag:'kaifang',
                },
                {
                    title:'品牌营销',
                    description:'品牌营销帮助你的产品更好地找到定位',
                    pic:'./../../static/logo2.jpg',
                    tag:'pingpai',
                },
                {
                    title:'使命必达',
                    description:'使命必达快速迭代永远保持最前端的速度',
                    pic:'./../../static/logo3.jpg',
                    tag:'duty',
                },
                                {
                    title:'勇攀高峰',
                    description:'助你勇闯高峰',
                    pic:'./../../static/logo4.jpg',
                    tag:'peak',
                },
            ],
        }
    },
    // created(){
    //     var url = this.Host + "/api/v1/contents/9386190";
    //     this.$axios.get(url).then((res) => {
    //         console.log(res);
    //     }).catch((err) => {
    //         console.log("无法获取数据" + err);
    //     });
    // },
    components:{
        photoroll,
    },
}
</script>

<style scoped>
    *
    {
        padding: 0;
        margin: 0;
        text-decoration: none;
    }
    a:hover
    {
        color: gray;
    }

    #bodi
    {
        width: 90%;
        margin: 20px auto;
        overflow: hidden;
    }

    #bodi_left
    {
        width: 20%;
        margin-right: 50px;
        float: left;
    }

    .bodi_left_block
    {
        background-color: white;
        /* padding-bottom: 20px; */
        margin-bottom: 10px;
        min-height: 350px;
    }
    .bodi_left_block > h2
    {
        background-color: lightgreen;
        color: white;
        font-size: 20px;
        padding: 8px 8px;
    }
    .bodi_left_block h3
    {
        padding: 8px 8px;
        font-weight: bold;
        font-size: 17px;
    }
    .bodi_left_block h3:nth-of-type(2)
    {
        padding-top: 0;
    }
    .bodi_left_block li
    {
        margin-bottom: 5px;
        padding-left: 8px;
    }

    .hr
    {
        border-top: 1px solid gray;
        margin:10px 0;
    }

    .hotlogo
    {
        background-color: red;
        color: white;
        padding: 0px 5px;
        font-size: 10px;
    }
    .nologo
    {
        display: none;
    }

    #bodi_right
    {
        overflow: hidden;
    }
    #bodi_right_block
    {
        margin-bottom: 10px;
        overflow: hidden;
        height:350px;
    }
    #bodi_right_block:first-of-type
    {
        height: 350px;
    }
    #bodi_right_block .item
    {
        display: inline-block;
        background-color:white;
        width: 48%;
        height: 45%;
        margin-right: 4%;
        overflow: hidden;
        padding-top: 20px;
        padding-left: 50px;
        box-sizing: border-box;
    }
    #bodi_right_block .item:nth-of-type(2n)
    {
        margin-right: 0;
    }
    #bodi_right_block .item:nth-of-type(1),#bodi_right_block .item:nth-of-type(2)
    {
        margin-bottom: 4%;
    }

    #bodi_right_block .btn
    {
        width: 100px;
        height: 30px;
        background-color: lightgreen;
        text-align: center;
        overflow: hidden;
        border-radius: 10%;
        box-shadow: gray 5px 5px 5px;
    }
    #bodi_right_block .btn > a
    {
        line-height: 30px;
        width: 100%;
        height: 100%;
        display: inline-block;
        color: white
    }
    #bodi_right_block .btn > a:hover
    {
        font-size: 17px;
        color: black;
    }
    #bodi_right_block .btn:hover
    {
        box-shadow: gray 3px 3px 3px;
    }


    .img
    {
        vertical-align: top;
        width: 50px;
        height: 50px;
        margin-top: 5px;
        margin-right: 5px;
    }
    .item_inner_content
    {
        display: inline-block;
    }
    .item_inner_content h2
    { 
        margin-bottom:5px;
    }
    .item_inner_content p
    {
        margin-bottom:5px;
    }
</style>
