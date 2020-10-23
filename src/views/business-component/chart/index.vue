<!--
    @describe：图表
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
            title: '折线柱状图混合',
            detail: '单列表单、带验证、各种配置',
            imgUrl: require('./image/chart1.png'),
            code: require('./code/1.htm')
          },
          {
            title: '折线图',
            detail: '双列表单、带验证、各种配置',
            imgUrl: require('./image/chart2.png'),
            code: require('./code/2.htm')
          },
          {
            title: '饼图',
            detail: '满足常规颜色、重置formatter配置',
            imgUrl: require('./image/chart3.png'),
            code: require('./code/3.htm')
          },
          {
            title: '饼图',
            detail: '满足常规颜色、重置formatter配置',
            imgUrl: require('./image/chart3.png'),
            code: require('./code/3.htm')
          },
          {
            title: '饼图',
            detail: '满足常规颜色、重置formatter配置',
            imgUrl: require('./image/chart3.png'),
            code: require('./code/3.htm')
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
