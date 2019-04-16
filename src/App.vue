<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {},
  mounted(){}
}
</script>

<style>
body,ul,li,a{
  margin: 0;
  padding: 0;
  text-decoration: none;
}
#app {
  padding: 0;
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  list-style: none;
  font-size: 12px;
}
  /* UI借鉴 http://www.jq22.com/yanshi9449*/
</style>
