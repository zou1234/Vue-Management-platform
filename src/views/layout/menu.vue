<template>
  <section>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      background-color="transparent"
      text-color="#fff"
      :router="true"
      active-text-color="yellow"
    >
      <el-submenu   v-for="(item, index) in $router.options.routes"
                     :key="index"
                     :index="item.path"
      >

        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(itemSon, indexSon) in item.children"
                        :index="itemSon.path"
                        :key="index + '-' + indexSon"
          >
            {{itemSon.name}}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </section>
</template>

<script>
  export default {
      name: "ms-left",
      data(){
        return{
          data: [],
          activeIndex: '/business-component'
        }
      },
      methods:{

      },
      created() {},
    }
</script>

<style lang="scss" scoped>
  section{
    display: inline-block;
    background: #001938;
    box-sizing: border-box;
    width: 100%;
    height: calc(100vh - 65px);
  }

  /deep/.el-menu-vertical-demo{
    width: 100%;
  }


</style>
