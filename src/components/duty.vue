<template>
    <div id="duty">
        duty
    </div>
</template>

<script>
export default {
    name:"duty",
    created(){
        var sendData = {
            name:'liMing',
            age:23,
        };
        // var params = new URLSearchParams();
        // params.append('name','liMIng');
        var url = this.Douban + "/v2/movie/top250?count=5";
        this.$axios.post(url,{
            data:sendData,
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
        }).then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err)
            });
},
}
</script>

<style scoped>
    *
    {
        margin:0;
        padding: 0;
    }
</style>
