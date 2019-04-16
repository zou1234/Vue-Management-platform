<template>
    <div class="msRightPop">
      <div class="msRightTagPop">
        <ms-Tag></ms-Tag>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
  import msTag from '@/components/ms-tag'
    export default {
      name: "ms-right",
      components:{
        msTag
      }
    }
</script>

<style lang="scss" scoped>
  .msRightPop{
    /*border: 1px solid red;*/
    box-sizing: border-box;
    vertical-align: top;
    display: inline-block;
    width: calc(100% - 214px);
    height: calc(100vh - 61px);
  }
</style>
