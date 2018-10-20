<template>
    <div id="pingpai">
        <h2>电影频道</h2>
        <ul>
            <li v-for="(item,index) in movieList">
                <p>影片名称:{{item.title}}</p>
                <p>评分:{{item.rating.average}} / 10</p>
                <p>主演:{{castsList[index].join(",")}}</p>
                <router-link v-bind:to="{path:'/details/pingpai/detailMsg/' + Number(index+start)}" tag="button">查看详情</router-link>
            </li>
        </ul>
        <div id="changePage">
            <button @click="prevPage" v-bind:class="{unclick:this.start == 0}">上一页</button>
            <span>{{this.nowPage}} | {{this.totalPage}}</span>
            <button @click="nextPage">下一页</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"pingpai",
    data(){
        return{
            length:0,
            totalPage:0,
            totalNum:0,
            nowPage:1,
            movieList:[],
            castsList:[],
            start:0,
            count:5,
            url:this.Douban + "/v2/movie/top250",
            whereStart:0,
        }
    },
    methods:{
        gettingData:function(url){
            this.$axios.get(url)
                .then((data) => {
                    console.log(data)
                    this.totalNum = data.data.total;
                    this.totalPage = data.data.total / this.count;
                    this.castsList = [];
                    this.movieList = data.data.subjects;
                    this.length = this.movieList.length;
                    for(let x = 0;x<this.length;x++)
                    {
                        let casts = [];
                        for(let y = 0;y<this.movieList[x].casts.length;y++)
                        {
                            casts.push(this.movieList[x].casts[y].name);
                        }
                        this.castsList.push(casts);
                    }
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        nextPage:function(){
            this.start = this.start + 5;
            this.nowPage = Number((this.start+5) / this.count);
            this.start-5;
            this.gettingData(this.url + "?count=" + this.count +"&start=" + this.start);
        },
        prevPage:function(){
            this.start = this.start - 5;
            this.nowPage = Number((this.start+5) / this.count);
            this.start-5;
            this.gettingData(this.url + "?count=" + this.count + "&start=" + this.start);
        },
    },
    created(){
        console.log(this);
        this.gettingData(this.url+ "?count=" + this.count);
    },
}
</script>

<style scoped>
    *
    {
        padding: 0;
        margin: 0;
        list-style-type: none;
        text-decoration: none;
    }
    button
    {
        cursor: pointer;
    }
    h2
    {
        padding-bottom: 10px;
        border-bottom: 3px dotted gray;
    }
    ul
    {
        margin-bottom: 30px;
    }
    li
    {
        padding: 20px 10px;
        border-bottom: 1px dotted gray;
    }
    li > p
    {
        margin: 5px 0;
    }
    li > p:last-of-type
    {
        margin-bottom: 10px;
    }
    li:hover
    {
        background-color: lightblue;
    }


    .unclick
    {
        visibility: hidden;
    }

    #pingpai ul li button
    {
        transition: 0.3s ease;
        font-size: 15px;
        width: 90px;
        height: 25px;
        line-height: 25px;
        text-align: center;
    }
    #pingpai ul li button:hover
    {
        background-color: lightgreen;
        color: white;
    }

    #changePage
    {
        text-align: center;
    }
</style>
