<template>
  <div class="ms-left">
    <ul  v-for="value in menuList" >
      <li v-for="item in value.children" @click="toogleIcon($event,item)" :class="item.relationship" data-icon ='1'>
        <router-link class="routerLink" :to="item.routes">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
          <span :class="item.msExpand"></span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "ms-left",
      data(){
        return{
          menuList:[
            {
              key:'1',
              children:[
                {
                  key:'1',
                  name:'Dashboard',
                  icon:'fa fa-dashboard',
                  routes:'',
                  msExpand:'ms-expand',
                  relationship:'father',
                },
                {
                  key:'1-1',
                  name:'Dashboard1',
                  icon:'',
                  routes:'/Dashboard/Dashboard1',
                  msExpand:'ms-expandSon',
                  relationship:'son'
                },
                {
                  key:'1-2',
                  name:'Dashboard2',
                  icon:'',
                  routes:'/Dashboard/Dashboard2',
                  msExpand:'ms-expandSon',
                  relationship:'son'
                },
                {
                  key:'1-3',
                  name:'Dashboard3',
                  icon:'',
                  routes:'/Dashboard/Dashboard3',
                  msExpand:'ms-expandSon',
                  relationship:'son'
                },
              ]
            },

            {
              key:'2',
              children:[
                {
                  key:'2',
                  name:'Layouts',
                  icon:'fa fa-dashboard',
                  routes:'',
                  msExpand:'ms-expand',
                  relationship:'father',
                },
                {
                  key:'2-1',
                  name:'Layouts1',
                  icon:'',
                  routes:'/Layouts/Layouts1',
                  msExpand:'ms-expandSon',
                  relationship:'son'
                },
                {
                  key:'2-2',
                  name:'Layouts2',
                  icon:'',
                  routes:'/Layouts/Layouts2',
                  msExpand:'ms-expandSon',
                  relationship:'son'
                },
              ]
            },

            {
              key:'3',
              children:[
                {
                  key:'3',
                  name:'components',
                  icon:'fa fa-dashboard',
                  routes:'/components',
                  msExpand:'ms-expand',
                  relationship:'father',
                },
              ]
            }
          ]
        }
      },
      methods:{
        toogleIcon(event,item){
          let el = event.target.parentNode
          if(el.className == 'father'){
            $(el.parentNode).addClass('active')
            $(el.parentNode).siblings().removeClass('active')
            if(el.nodeName === 'LI'){
              $(el).siblings().toggle(200)
              $(el).parent().siblings().find('.son').hide()
            }else {
              $(el.parentNode).siblings().toggle(200)
              $(el.parentNode).parent().siblings().find('.son').hide()
            }
          }
          else {
            //添加导航标签
            let allTage = this.$store.getters.allTage,
                temporary = true,
                newAllTage = []
            if(allTage.length > 0){
              allTage.map((val)=>{
                if(val.activeColor === true){
                  val.activeColor = false
                }
                if(val.name === event.target.innerText){
                  temporary = false //去重
                  val.activeColor = true
                }
                newAllTage.push(val)
              })
            }

            if(temporary){
              let tage = {
                key:this.$store.getters.allTage.length + 1,
                name:event.target.innerText,
                paths:item.routes,
                activeColor:true
              }
              newAllTage.push(tage)
              this.$store.commit('GETNEWTAGE',newAllTage)
              console.log(typeof this.$store);
            }
          }
        },
      },
    }
</script>

<style lang="scss" scoped>
.ms-left{
  display: inline-block;
  background: #2a3542;
  height: calc(100vh - 62px);
  box-sizing: border-box;
  padding: 10px;
  /*border: 1px solid red;*/
  ul{
    box-sizing: border-box;
    color: #fff;
    li{
      list-style: none;
      width: 190px;
      color: #aeb2b7;
      font-size: 12px;
      cursor: pointer;
      span{
        margin-left: 5px;
      }
      a{
        display: block;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 15px 10px 15px 10px;
      }
      i{
        font-size: 15px;
      }
      .ms-expand{
        float: right;
        width: 20px;
        height: 20px;
        display: inline-block;
        background: url("../assets/nav-expand.png") no-repeat top;
      }
      a{
        color: #aeb2b7;
      }
    }
  }
  .active{
    background-color: rgba(232,230,255,0.1);
  }

}
.ms-expand-1{
  background: url("../assets/nav-expand.png") no-repeat top !important;
}
.ms-expand-2{
  background: url("../assets/nav-expand.png") no-repeat 2px -16px !important;
}
.son{
  /*margin-left: 23px;*/
  display: none ;
}
</style>
