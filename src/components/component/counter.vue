<template>
    <div class="counter">
        <div class="decreasing button" v-on:click="decreasing">-</div>
        <input type="text" v-model="number" class="form-control" style="display:inline-block;"  @blur="send"/>
        <div class="adding button" v-on:click="adding">+</div>
    </div>
</template>

<script>
export default {
    name:'counter',
    data(){
        return{
            number:1,
        }
    },
    methods:{
        decreasing(){
            this.number--;
            if(this.number <= this.min)
            {
                this.number = this.min;
            }
            this.$emit("counter",this.number);
            this.$store.dispatch("updateOrder",["counter",this.number]);
            // this.$store.commit("updateOrder",{"counter":this.number});
        },
        adding(){
            this.number++;
            if(this.number >= this.max)
            {
                this.number = this.max;
            }
            this.$emit("counter",this.number);         //watch和传送值之间的执行顺序好像有分先后!!
            // this.$store.commit("updateOrder",["counter",this.number]);
            this.$store.dispatch("updateOrder",["counter",this.number]);
        },
        send(){
            let fix;
            // if(typeof this.number === 'string')
            // {
            //     fix = Number(this.number.replace(/\D/g,""));
            // }
            // else
            // {
            //     fix = this.number;
            // }
            fix = Number(this.number.replace(/\D/g,""));
            if(fix >= this.max)
            {
                fix = this.max;
            }
            else if(fix <= this.min)
            {
                fix = this.min;
            }
            this.number = fix;
            this.$emit("counter",this.number);    
            this.$store.dispatch("updateOrder",["counter",this.number]);
            // this.$store.commit("updateOrder",["counter",this.number]);
        },
    },
    props:{
        min:{
            type:Number,
            default:1,
        },
        max:{
            type:Number,
            default:5,
        },
    },
    // watch:{
    //     number(value){
    //         if(value <= 0)
    //         {
    //             this.number = this.min;
    //         }
    //         else if(value >= this.max)
    //         {
    //             this.number = this.max;
    //         }

    //     },
    // },
}
</script>

<style scoped>
    *
    {
        padding:0;
        margin: 0;
    }
    .button
    {
        display: inline-block;
        vertical-align: top;
        text-align: center;
        border: 1px solid #f1f1f1;
        width: 29px;
        height: 29px;
        font-size: 16px;
        line-height: 29px;
    }
    .button:hover
    {
        background-color: lightgreen;
        cursor: pointer;
    }

    .counter input[type='text']
    {
        height: 29px;
        border: 1px solid #f1f1f1;
        width: 35px;
        text-align: center;
        line-height: 29px;
    }
    .counter
    {
        vertical-align: middle;
        font-size: 0px;
    }
</style>
