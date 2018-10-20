<template>
    <div>
        detailMsg
        <router-link v-bind:to="{path:'/details/pingpai/'}">返回上一级</router-link>
    </div>
</template>

<script>
export default {
    name:'detailMsg',
    mounted(){
        console.log(this.$route);
    },
}
</script>

<style scoped>
    *
    {
        padding: 0;
        margin: 0;
    }
</style>


