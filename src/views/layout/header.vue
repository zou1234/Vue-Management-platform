<template>
  <main class="ms-header">
    <div class="ms-headerTitle">
      <img src="@/assets/layout/logo.png" alt="/">
      <span>积累是高效的源泉！</span>
    </div>
  </main>
</template>

<script>
    export default {
        name: "ms-header"
    }
</script>

<style lang="scss" scoped>
  .ms-header{
    padding: 0 30px;
    height: 65px;
    background: #001938;
    box-sizing: border-box;
    line-height: 60px;
  }

  .ms-headerTitle{

    img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      vertical-align: middle;
      margin-right: 5px;
    }

    span{
      font-size: 21px;
      color: #ffffff;
      position: relative;
      top: 5px;
    }
  }
</style>
