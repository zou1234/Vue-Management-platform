<!--
    @describe：表单
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
            title: '单列表单',
            detail: '单列表单、带验证、各种配置',
            imgUrl: require('./image/form1.png'),
            code: require('./code/1.htm')
          },
          {
            title: '双列表单',
            detail: '双列表单、带验证、各种配置',
            imgUrl: require('./image/form2.png'),
            code: require('./code/2.htm')
          },
          {
            title: '三列表单',
            detail: '三列表单、带验证、各种配置',
            imgUrl: require('./image/form3.png'),
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
