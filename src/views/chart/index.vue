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
  import esCodemirror from "@/components/es-codemirror-code/index";

  export default {
    name: "tesst",
    data() {
      let codeText = require(`./index.htm`);

debugger
      let codes = `<template>
                       <div>熟蜀都华氏度深度胡</div>
                   </template>
                   <style>div{color: red}</style>`;
      // let a = codeText.default;
      // console.log(a);
      return {
        code: codeText
        // code: codes
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
