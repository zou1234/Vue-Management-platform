<!--
    Exception 首页
    @Author: zouwf
    @Date: 2019-12-12
-->
<template>
  <div>
    <es-codemirror :code="code"></es-codemirror>
<div>w3wewewew</div>
  </div>
  <!--<es-codemirror></es-codemirror>-->
</template>

<script>
  import esCodemirror from "@/components/es-codemirror";

  export default {
    name: "tesst",
    data() {
      // let codeText = require(`./index.htm`);
      return {
        // code: codeText
        code: ''
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
