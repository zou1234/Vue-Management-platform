<template>
    <div class="ms-tag">
      <div class="ms-tagContent">
        <div @click='initLeft' class="ms-tagLeft el-icon-d-arrow-left" ></div>
        <div class="ms-tagList">
          <div class="ms-tagPop">
            <a @click="skipTo(item,$event)" :class="{'activeTage' : item.activeColor}"  v-for="item in data">
              <span>{{item.name}}</span>
              <i @click="removeTage(item.name)" class="fa fa-times"></i>
            </a>
          </div>
        </div>
        <div @click='initRight' class="ms-tagRight el-icon-d-arrow-right" ></div>
      </div>
    </div>
</template>

<script>
  import Fullpath from '../../router/fullpath'
    export default {
      name: "ms-tag",
      data(){
        return{
          data:[
            // {
            //   key:1,
            //   name:'Dashboard',
            // },
            // {
            //   key:2,
            //   name:'Layouts',
            // },
            // {
            //   key:3,
            //   name:'标签3',
            // },
            // {
            //   key:4,
            //   name:'标签4',
            // },
            // {
            //   key:5,
            //   name:'标签5',
            // },
            // {
            //   key:5,
            //   name:'标签5',
            // },
            // {
            //   key:5,
            //   name:'标签5',
            // },
            // {
            //   key:5,
            //   name:'标签5',
            // },
            // {
            //   key:5,
            //   name:'标签5',
            // },
            // {
            //   key:5,
            //   name:'标签5',
            // },
            // {
            //   key:5,
            //   name:'标签5',
            // },
            // {
            //   key:5,
            //   name:'标签5',
            // },
            // {
            //   key:5,
            //   name:'标签5',
            // },
            // {
            //   key:5,
            //   name:'标签5',
            // },
            // {
            //   key:5,
            //   name:'标签5',
            // },
            // {
            //   key:5,
            //   name:'标签5',
            // },
            // {
            //   key:5,
            //   name:'标签5',
            // },
            // {
            //   key:5,
            //   name:'标签6',
            // },
            // {
            //   key:5,
            //   name:'标签5',
            // },
            // {
            //   key:5,
            //   name:'标签4',
            // },
            // {
            //   key:5,
            //   name:'标签3',
            // },
            // {
            //   key:5,
            //   name:'标签2',
            // },
            // {
            //   key:5,
            //   name:'标签1',
            // }
          ],
          displacement:0,
        }
      },
      methods:{
        initLeft(){
          this.movement('left')
        },
        initRight(){
          this.movement('right')
        },
        movement(e){
          let tagPop = document.getElementsByClassName('ms-tagPop')[0]
          let tagSonWidth = document.getElementsByClassName('ms-tagPop')[0].offsetWidth
          let tagFatherWidth = document.getElementsByClassName('ms-tagList')[0].offsetWidth
          let differWidth = tagSonWidth - tagFatherWidth
             if(differWidth > 0){
               if(e == 'right'){
                 if(Math.abs(this.displacement) < differWidth){
                   this.displacement = this.displacement - 200
                   tagPop.style.left = this.displacement + 'px'
                   if(differWidth < Math.abs(this.displacement)){
                     tagPop.style.left = -differWidth + 'px'
                   }
                 }
               }else {
                  if(this.displacement < 0){
                    this.displacement = this.displacement + 200
                    tagPop.style.left = this.displacement + 'px'
                  }else {
                    tagPop.style.left = '0px'
                    this.displacement = 0
                  }
               }
             }
        },
        //跳转
        skipTo(item,$event){
          let tagName = $event.target.tagName
          if(tagName !== "I"){
            let allTage = this.$store.getters.allTage
            allTage.map(function (val) {
              if(val.activeColor === true){
                val.activeColor = false
              }
              if(val.name === item.name){
                val.activeColor = true
              }
            })
            this.$router.push({path:item.paths})
          }
        },
        //删除
        removeTage(name){
          let allTage = this.$store.getters.allTage, newTage = []
          allTage.map((val)=>{
              if(name !== val.name){
                newTage.push(val)
              }
          })
          // this.$router.push({path:"/Layouts/Layouts1"})
          this.$router.push({path:newTage[newTage.length-1].paths})
          newTage[newTage.length-1].activeColor = true
          this.$store.commit('GETNEWTAGE',newTage)
        }
      },
      created(){
        this.data = this.$store.getters.allTage;
      },
      watch:{
        '$store.getters.allTage'(val){
          this.data = val;
        }
      },
    }
</script>

<style lang="scss" scoped>
  .ms-tag{
    /*border: 1px solid red;*/
    box-sizing: border-box;
    background: #fff;
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
    user-select:none;
    .ms-tagContent{
      position: relative;
      .ms-tagList{
        padding: 20px 0;
        margin-right: 50px;
        margin-left: 50px;
        overflow: hidden;
        white-space:nowrap;
        position: relative;
        .ms-tagPop{
          overflow: hidden;
          white-space:nowrap;
          /*border: 1px solid red;*/
          padding: 8px 0;
          position: absolute;
          top: 4px;
          left: 0;
          transition: all 0.5s;
          /*width: 50%;*/
        }
      }
      a{
        border: 1px solid #d8dce5;
        padding: 5px 10px;
        margin-right: 10px;
        color: #495060;
        i{
          margin-left: 5px;
        }
      }
      .ms-tagRight,.ms-tagLeft{
        cursor: pointer;
        font-size: 15px;
        position: absolute;
        top: -3px;
        padding: 15px 15px;
      }
      .ms-tagRight{
        right: 0;
      }
      .ms-tagLeft{
        left: 0;
      }
    }
    .activeTage{
      background: #72d0eb;
      color: #ffffff!important;
    }
  }
</style>
