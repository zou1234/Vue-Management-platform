<!--
    @describe：布局
    @Author: zouwf
    @Date: 2020-09-13
-->
<template>
  <main>
    <!-- 头部 -->
    <ms-header></ms-header>
    <section class="menu-constant">
      <el-row>
        <!-- 菜单 -->
        <el-col :span="4">
          <ms-left></ms-left>
        </el-col>
        <!-- 右边主体 -->
        <el-col :span="20">
          <ms-right></ms-right>
        </el-col>
      </el-row>
    </section>
  </main>
</template>

<script>
  import msHeader from "./header";
  import msLeft from "./menu";
  import msRight from "./right";
    export default {
        name: "",

        props: {},

        components: {
          msHeader,
          msLeft,
          msRight
        },

        data() {
            return {};
        },

        //计算属性
        computed: {},

        //方法
        methods: {},

        created() {
        },

        mounted() {
        }
    };
</script>

<style lang="scss" scoped>
  main{

    .menu-constant{
      /*width: 1280px;*/
      width: 100%;
      margin: 0 auto;
      height: calc(100vh - 150px);
    }
  }
</style>
