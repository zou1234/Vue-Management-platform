<template>
    <div>
      <!--<button @click="hehe">点击</button>-->
      <!--<pop-up-->
      <!--:dialogVisible="dialogVisible"-->
      <!--@closePop = closePop-->
      <!--&gt;</pop-up>-->
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
         return{
           dialogVisible:false
         }
      },
      methods:{
        hehe(){
        this.dialogVisible = true
        },
        closePop(){
          this.dialogVisible = false
        }
      }
    }
</script>

<style scoped>

</style>
