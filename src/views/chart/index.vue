<!--
    Exception 首页
    @Author: zouwf
    @Date: 2019-12-12
-->
<template>
  <div>
    <es-codemirror :code="code"></es-codemirror>
  </div>
</template>

<script>
  import esCodemirror from "@/components/es-codemirror";

  export default {
    name: "tesst",
    data() {
      let codeText = require(`./index.htm`);
      debugger
      return {
        code: codeText
        // code: '<es-codemirror :code="code"><div>232323</div></es-codemirror>'
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
