<!--
    Exception 代码编辑入口
    @Author: zouwf
    @Date: 2019-12-12
-->
<template>
  <es-codemirror :code="code"></es-codemirror>
</template>

<script>
  import esCodemirror from "@/components/es-codemirror-vue/index";

  export default {
    name: "tesst",
    data() {
      return {
        code: ""
      };
    },
    components: {
      esCodemirror
    },
    computed: {

    },
    methods: {

    },
    created() {
      this.code = this.$route.query.code;
    }
  };
</script>
