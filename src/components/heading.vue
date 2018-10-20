<template>
    <div id="heading">
        <div id="heading_wrapper">
            <div id="heading_inner">
                <router-link to="/">
                    <img src="./../assets/logo.png" id="logo">
                </router-link>
                <span>巴拉巴拉小魔仙</span>
            </div>
            <div id="heading_nav">
                <ul id="nav">
                    <li>
                        <!-- <router-link>登录</router-link> -->
                        登录
                    </li>
                    <button class="btn btn-primary">haha</button>
                    <li class="nav_shuxian">|</li>
                    <li>
                        <!-- <router-link>注册</router-link> -->
                        注册
                    </li>
                    <li class="nav_shuxian">|</li>
                    <li>
                        <!-- <router-link>关于</router-link> -->
                        关于
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'heading',

}
</script>

<style scoped>
    *
    {
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style-type: none;
    }

    #heading
    {
        overflow: hidden;
        height: 100px;
        line-height: 100px;
        background-color: darkslategrey;
    }

    #heading_wrapper
    {
        width: 90%;
        margin: auto;
    }

    #heading_inner
    {
        float: left;
    }
    #logo
    {
        vertical-align: middle;
        width: 10%;
        height: 60%;
    }

    #heading_nav
    {
        float: right;
    }

    #nav li
    {
        float: left;
    }

    .nav_shuxian
    {
        padding: 0 10px;
    }
</style>

