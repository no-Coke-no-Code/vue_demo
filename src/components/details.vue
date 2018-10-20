<template>
    <div id="details">
        <div id="details_left">
            <div id="product_board">
                <img class="img" v-bind:src="geturl"/>
                <ul>
                    <router-link v-for="(nav,index) in NavList" v-bind:to="{path:'/details/' + nav.tag}" tag="li" :key="index" active-class="activenav">
                        <span>{{nav.name}}</span>
                    </router-link>
                </ul>
            </div>
        </div>


        <div id="details_right">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
    name:'detail',
    data(){
        return{
            testing:[
                /\/details\/kaifang/,
                /\/details\/pingpai/,
                /\/details\/duty/,
                /\/details\/peak/,
            ],
            NavList:[
                {
                    name:'开放产品',
                    imgurl:"./../../static/logo1.jpg",
                    tag:'kaifang',
                },
                {
                    name:'品牌营销',
                    imgurl:"./../../static/logo1.jpg",
                    tag:'pingpai',
                },
                {
                    name:'使命必达',
                    imgurl:"./../../static/logo1.jpg",
                    tag:'duty',
                },
                {
                    name:'勇攀高峰',
                    imgurl:"./../../static/logo1.jpg",
                    tag:'peak',
                },
            ],
            imgurl:{
                // "/details/kaifang":"./../../static/logo1.jpg",
                // "/details/pingpai":"./../../static/logo2.jpg",
                // "/details/duty":"./../../static/logo3.jpg",
                // "/details/peak":"./../../static/logo4.jpg",
                "/details/kaifang":"./../../static/logo1.jpg",
                "/details/pingpai":"./../../static/logo2.jpg",
                "/details/duty":"./../../static/logo3.jpg",
                "/details/peak":"./../../static/logo4.jpg",
            },
        }
    },
    computed:{
        geturl(){
            // return this.imgurl[this.$route.path];
            for(let x = 0;x<this.testing.length;x++)
            {
                let result = this.testing[x].exec(this.$route.path);
                if(result)
                {
                    console.log(this.$route.path);
                    return this.imgurl[result[0]];
                }
            }
        },
    }
}
</script>

<style scoped>
    *
    {
        padding: 0px;
        margin: 0px;
        text-decoration: none;
        list-style-type: none;
    }

    #details
    {
        width: 90%;
        margin: 20px auto;
        overflow: hidden;
    }

    #details_left
    {
        display: inline-block;
        width: 20%;
        text-align: center;
        background-color: white;
        padding:20px 0;
        margin-right: 9%;
    }
    #details_left .img
    {
        width: 50%;
        height: 50%;
    }
    #product_board ul
    {
        margin-top: 20px;
    }
    #product_board ul li
    {
        height: 40px;
        line-height: 40px;
        text-align: left;
        padding-left:10px;
    }
    #product_board ul li:hover
    {
        background-color: lightgreen;
        color: white;
        cursor: pointer;
    }

    #product_board ul li:hover span
    {
        transition: 0.2s ease;
    }

    .activenav
    {
        background-color: lightgreen;
        color: white;
    }


    #details_right
    {
        display: inline-block;
        vertical-align: top;
        width: 70%;
    }
</style>

