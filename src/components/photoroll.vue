<template>
    <div id="ads">
        <!-- <div id="photocontainer">
            <img src="./../photoroll/pic1.jpg"/>
            <img src="./../photoroll/pic2.jpg"/>
            <img src="./../photoroll/pic3.jpg"/>
            <img src="./../photoroll/pic4.jpg"/>
            <img src="./../photoroll/pic5.jpg"/>
        </div>
        <div id="buttoncontainer">
            <span index="1" class="on"></span>
            <span index="2"></span>
            <span index="3"></span>
            <span index="4"></span>
            <span index="5"></span>
        </div> -->
        <template v-for="imgs in imglist">
            <img v-bind:src="imgs.src" v-bind:class="{showing:imgs.showing,unshowing:!imgs.showing}"/>
        </template>
        <!-- <img v-bind:src="imgs.src"/> -->
        <button id="btnleft" v-on:click="trunleft">向左</button>
        <button id="btnright" v-on:click="turnright">向右</button>
    </div>
</template>

<script>
export default {
    name:'photoroll',
    data(){
        return{
            imglist:[
                {
                    id:0,
                    name:"img1",
                    src:"./../../static/pic1.jpg",
                    showing:true,
                },
                {
                    id:1,
                    name:"img2",
                    src:"./../../static/pic2.jpg",
                    showing:false,
                },
                {
                    id:2,
                    name:"img3",
                    src:"./../../static/pic3.jpg",
                    showing:false,
                },
                {
                    id:3,
                    name:"img4",
                    src:"./../../static/pic4.jpg",
                    showing:false,
                },
                {
                    id:4,
                    name:"img5",
                    src:"./../../static/pic5.jpg",
                    showing:false,
                },
            ],
        }
    },
    methods:{
        turnright(){
            for(let x = 0;x<this.imglist.length;x++)
            {
                if(this.imglist[x].showing == true)
                {
                    this.imglist[x].showing = false;
                    if(x == 4)
                    {
                        x = 0;
                        this.imglist[x].showing = true;
                        break;
                    }
                    else
                    {
                        this.imglist[x+1].showing = true;
                        break;
                    }
                }
            }
        },
        trunleft(){
            for(let x = 0;x<this.imglist.length;x++)
            {
                if(this.imglist[x].showing == true)
                {
                    this.imglist[x].showing = false;
                    if(x == 0)
                    {
                        x = 4;
                        this.imglist[x].showing = true;
                        break;
                    }
                    else
                    {
                        this.imglist[x-1].showing = true;
                        break;
                    }
                }
            }
        },
    },
}
</script>

<style scoped>
    *
    {
        padding: 0;
        margin: 0;
    }
    #ads
    {
        font-size: 0px;
        position: relative;
    }
    #ads img
    {
        width: 100%;
        height: 100%;
    }

    #btnleft
    {
        position:absolute;
        top: 10px;
        left: 100px;
    }
    #btnright
    {
        position: absolute;
        top: 10px;
        right: 100px;
    }

    .showing
    {
        display: inline;
    }
    .unshowing
    {
        display: none;
    }
</style>


