<template>
  <div class="ex-popUp" v-if="newDialogVisible">
    <el-dialog
      class="ex-dialog"
      :title="title"
      :visible.sync="newDialogVisible"
      :show-close="false"
      :width="width || '35%'"
      close-on-press-escape
      :top="top"
      append-to-body>
      <img src='../img/close.png' class="ex-popCloseImg" @click='close'>
      <div class="ex-popContent">
        <slot></slot>
      </div>
      <div class="ex-popUpFooter" v-if="notFooter === void 0">
        <div><el-button @click="close" v-if="cancelButton === void 0"> {{leftButtonText || '取消'}}</el-button></div>
         <div><el-button type="primary" v-if="confirmButton === void 0" @click="confirm">{{rightButtonText || '确定'}}</el-button></div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'pop-up',
  props: [
    'top', // 弹框距离浏览器顶部距离
    'title', // 弹框标题
    'width', // 弹框高度
    'notFooter', // 控制底部按钮显示,默认显示,传任意值隐藏
    'dialogVisible', // 控制堂课显示隐藏
    'cancelButton', // 控制底部按钮个数
    'confirmButton', // 控制底部按钮个数
    'leftButtonText', // 按钮左边文本
    'rightButtonText'// 按钮右边文本
  ],
  data () {
    return {
      newDialogVisible: false
    }
  },
  methods: {
    close () {
      this.$emit('closePop')
    },
    confirm () {
      this.$emit('popUpConfirm')
    },
  },
  watch: {
    dialogVisible (newValue) {
      this.newDialogVisible = newValue
    }
  }
}
</script>

<style lang="scss">
  .ex-dialog{
    .ex-popCloseImg{
      position: absolute;
      right: -15px;
      top: -15px;
      cursor: pointer;
    }
    .ex-popUpFooter{
      text-align: center;
      padding: 15px 0;
    }
    .ex-popUpFooter div{
      display: inline-block;
    }
    .ex-popUpFooter div:first-child{
      margin-right: 30px;
    }
    .ex-popContent{
      padding: 20px;
      max-height: 60vh;
      overflow-y: auto;
      border-top: 1px solid #ededed ;
      border-bottom: 1px solid #ededed ;
      box-shadow: -2px 5px 10px #ededed inset
    }
    .el-dialog__close:before{
      content: ''!important;
    }
    .el-dialog{
      min-width: 500px;
    }
    .el-dialog__body{
      padding:0!important;
    }
  }
</style>
