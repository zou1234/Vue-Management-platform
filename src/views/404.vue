<template>
    <div style="font-size: 25px">
      404页面不存在
      <button @click="hehe">ddffdfdfdf</button>
    </div>
</template>

<script>
  import Fullpath from '../router/fullpath'
    export default {
        name: "404",
        methods:{
          hehe(){
            this.$router.addRoutes(Fullpath)
            this.$router.push({path: '/Dashboard/Dashboard1'});
            console.log(this.$router);
          }
        }
    }
</script>

<style scoped>

</style>
