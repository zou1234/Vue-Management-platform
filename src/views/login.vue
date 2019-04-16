<template>
    <div>
        <div class="Login">
           <span class="title">后端管理系统</span>
          <div class="user info">
            <span>用户名</span>
            <input type="text">
          </div>
          <div class="password info">
            <span>密 码</span>
            <input type="text">
          </div>
          <el-button class="loginBtn" @click="login">登录</el-button>
        </div>
    </div>
</template>
<script>
  import Fullpath from '../router/fullpath'
  import untils from '../common/untils'
    export default {
      data() {
        return {};
      },
        name: "login",
        methods:{
          login(){
            //动态添加菜单
            this.$router.addRoutes(Fullpath)
            this.$router.push({path: '/Dashboard/Dashboard1'})
          }
        },
      create(){

      }
    }
</script>

<style scoped lang="scss">
  .Login{
    border: 1px solid green;
    width: 500px;
    position: absolute;
    top: 30%;
    left: 50%;
    margin-left: -250px;
    text-align: center;
    padding: 15px 0;
  }
  .title{
    display: inline-block;
    padding: 15px 0;
    font-size: 20px;
    font-weight: 900;
  }
  .info{
    padding: 15px 0;
  }
  .info input{
    height: 30px;
    outline: none;
    padding-left: 10px;
  }
  .loginBtn{
    width: 100px;
    position: relative;
    left: 10px;
    margin-top: 10px;
  }
</style>
