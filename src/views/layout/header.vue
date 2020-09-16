<template>
  <main class="es-header">
    <div class="es-header__left">
      <img src="@/assets/layout/logo.png" alt="/">
      <span>海川酷子</span>
    </div>
    <div class="es-header__right">
      <span>{{text}}</span>
    </div>
  </main>
</template>

<script>
    export default {
      name: "es-header",
      data(){
        return{
          text: "大多数人想要改造这个世界，但却罕有人想改造自己",
          data: [
            {
              title: "大多数人想要改造这个世界，但却罕有人想改造自己",
            },
            {
              title: "积极的人在每一次忧患中都看到一个机会， 而消极的人则在每个机会都看到某种忧患",
            },
            {
              title: "莫找借口失败，只找理由成功。",
            },
            {
              title: "伟人之所以伟大，是因为他与别人共处逆境时，别人失去了信心，他却下决心实现自己的目标",
            },
            {
              title: "世界上那些最容易的事情中，拖延时间最不费力",
            },
            {
              title: "人之所以能，是相信能",
            },
            {
              title: "当你感到悲哀痛苦时，最好是去学些什么东西。学习会使你永远立于不败之地",
            },
            {
              title: "世上没有绝望的处境，只有对处境绝望的人",
            },
            {
              title: "一个有信念者所开发出的力量，大于99个只有兴趣者",
            },
            {
              title: "积累是高效的源泉",
            }
          ]
        }
      },
      methods:{
        getText(){
          const number = Math.floor((Math.random())*10);
          this.text = this.data[number].title;
        }
      },
      created() {
        setInterval(()=>{
          this.getText()
        }, 10000)
      }
    }
</script>

<style lang="scss" scoped>
  .es-header{
    padding: 0 30px;
    height: 65px;
    background: #001938;
    box-sizing: border-box;
    line-height: 60px;

    .es-header__left{
      display: inline-block;

      img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 5px;
      }

      span{
        font-size: 25px;
        color: #7cc2ff;
        position: relative;
        top: 5px;
        font-family: "cikers";
      }

    }

    .es-header__right{
      float: right;
      font-size: 20px;
      color: #b5ff87;
      line-height: 65px;
      font-family: "cikers";
    }

  }


</style>
