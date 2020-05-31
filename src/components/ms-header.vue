<template>
  <div class="ms-header">
    <div class="ms-headerTitle">邹文丰前端博客</div>
  </div>
</template>

<script>
    export default {
        name: "ms-header"
    }
</script>

<style scoped>
  .ms-header{
    padding: 0 30px;
    height: 60px;
    background:#72d0eb;
    box-sizing: border-box;
    border: 1px solid #a0d9ea;
  }

  .ms-headerTitle{
    font-size: 21px;
    color: #ffffff;
    float: left;
    margin-top: 15px;
    text-transform: uppercase;
  }
</style>
