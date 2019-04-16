<template>
    <div>
      <div>
        Dashboard1
      </div>
      <el-button @click="test">点击</el-button>
    </div>
</template>

<script>
    export default {
        name: "Dashboard",
        data(){
          return{

          }
        },
        methods:{
          test(){
            let addr = '/scene/removeScene.do'
            let data = { fsceneId: '1234' }
            this.$http.post(addr,data)
              .then(res =>{

            })
          }
        }
    }
</script>

<style scoped>

</style>
