<template>
    <div>
      <ms-Header></ms-Header>
      <ms-Left></ms-Left>
      <ms-Right></ms-Right>
    </div>
</template>

<script>
  import msHeader from "@/components/ms-header";
  import msLeft from "@/components/ms-left";
  import msRight from "@/components/ms-Right";
  export default {
    name: "header",
    components:{
      msHeader,
      msLeft,
      msRight
    }
  }
</script>

<style scoped>

</style>
