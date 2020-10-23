<!--
    @describe：框
    @Author: zouwf
    @Date: 2020-09-13
-->
<template>
  <div>
    <es-menu-list :data="data"></es-menu-list>
  </div>
</template>

<script>
  import esMenuList from '@/components/es-menu-list'

  export default {
    name: '',

    props: {},

    components: {
      esMenuList
    },

    data() {
      return {
        data: [
          {
            title: '外壳',
            detail: '纯图片组成的外壳，宽高和标题，可自由配置！！！',
            imgUrl: require('./image/frame1.png'),
            code: require('./code/1.htm')
          }
        ]
      }
    },

    // 计算属性
    computed: {},

    // 方法y
    methods: {},

    created() {
    },

    mounted() {
    }
  }
</script>
