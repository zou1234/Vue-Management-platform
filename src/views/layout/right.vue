<template>
    <main class="msRightPop">
      <div class="msRightTagPop">
      </div>
      <div>
        <router-view></router-view>
      </div>
    </main>
</template>

<script>

    export default {
      name: "ms-right",
      components:{}
    }
</script>

<style lang="scss" scoped>
  main{
    height: 100%;
    padding: 10px;
  }
</style>
