<!--
    Exception 首页
    @Author: zouwf
    @Date: 2019-12-12
-->
<template>
  <es-codemirror :code="code"></es-codemirror>
</template>

<script>
  import esCodemirror from "@/components/es-codemirror";

  export default {
    name: "tesst",
    data() {
      let codeText = require(`./index.htm`);
      let a = codeText.default;
      // console.log(a);
      return {
        code: a
        // code: '<div>数据范围比例</div>'
      };
    },
    components: {
      esCodemirror
    },
    computed: {

    },
    methods: {

    }
  };
</script>
