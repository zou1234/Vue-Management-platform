<template>
  <div class="u-code">
    <!--代码编辑-->
    <div  class="u-code__edit">
      <codemirror
        ref="myCm"
        :value="code"
        :options="cmOptions"
        @ready="handleOnCmReady"
        @focus="hangdlOnCmFocus"
        @input="handlOnCmCodeChange"
      >
      </codemirror>
      <div class="u-code__edit-submit" @click="handleInitCode">提交运行</div>
    </div>
    <!--结果展示-->
    <div id="exhibition" class="u-code__exhibition"></div>
  </div>
</template>

<script>
  import editor from 'vue-codemirror'
  // language js
  import 'codemirror/mode/javascript/javascript.js'
  // theme css
  import 'codemirror/theme/base16-dark.css'


  // more codemirror resources
  // import 'codemirror/some-resource...'
  export default {
    data () {
      return {
        code: '<!DOCTYPE html>\n' +
          '<html>\n' +
          '<head>\n' +
          '<meta charset="utf-8">\n' +
          '<title>菜鸟教程(runoob.com)</title>\n' +
          '<style>\n' +
          'body\n' +
          '{\n' +
          '\tbackground-color:#d0e4fe;\n' +
          '}\n' +
          'h1\n' +
          '{\n' +
          '\tcolor:orange;\n' +
          '\ttext-align:center;\n' +
          '}\n' +
          'p\n' +
          '{\n' +
          '\tfont-family:"Times New Roman";\n' +
          '\tfont-size:20px;\n' +
          '}\n' +
          '</style>\n' +
          '</head>\n' +
          '\n' +
          '<body>\n' +
          '\n' +
          '<h1>CSS 实例!</h1>\n' +
          '<p>这是一个段落。</p>\n' +
          '\n' +
          '</body>\n' +
          '</html>',
        cmOptions: {
          // codemirror options
          tabSize: 4,
          mode: 'text/javascript',
          theme: 'base16-dark',
          lineNumbers: true,
          line: true,
          // more codemirror options, 更多 codemirror 的高级配置...
        },
        test1: 1,
        test2: this.test1
      }
    },
    methods: {
      handleOnCmReady(cm) {
        console.log('the editor is readied!', cm)
      },
      hangdlOnCmFocus(cm) {
        console.log('the editor is focus!', cm)
      },
      handlOnCmCodeChange(newCode) {
        console.log('this is new code', newCode);
        this.code = newCode
      },
      handleInitCode(){
        this.init()
      },
      init (){
        let that = this;
        function autodivheight(){
          var winHeight=0;
          if (window.innerHeight) {
            winHeight = window.innerHeight;
          } else if ((document.body) && (document.body.clientHeight)) {
            winHeight = document.body.clientHeight;
          }
          //通过深入Document内部对body进行检测，获取浏览器窗口高度
          if (document.documentElement && document.documentElement.clientHeight) {
            winHeight = document.documentElement.clientHeight;
          }
          height = winHeight*0.68
          editor.setSize('100%', height);
          document.getElementById("exhibition").style.height= height +"px";
        }

        function submitTryit() {
          var text = that.code;
          var patternHtml = /<html[^>]*>((.|[\n\r])*)<\/html>/im;
          var patternHead = /<head[^>]*>((.|[\n\r])*)<\/head>/im;
          var array_matches_head = patternHead.exec(text);
          var patternBody = /<body[^>]*>((.|[\n\r])*)<\/body>/im;

          var array_matches_body = patternBody.exec(text);
          var basepath_flag = 1;
          var basepath = '';
          if(basepath_flag) {
            basepath = '<base href="//www.runoob.com/try/demo_source/" target="_blank">';
          }
          if(array_matches_head) {
            text = text.replace('<head>', '<head>' + basepath );
          } else if (patternHtml) {
            text = text.replace('<html>', '<head>' + basepath + '</head>');
          } else if (array_matches_body) {
            text = text.replace('<body>', '<body>' + basepath );
          } else {
            text = basepath + text;
          }
          var ifr = document.createElement("iframe");
          ifr.setAttribute("frameborder", "0");
          ifr.setAttribute("id", "iframeResult");
          document.getElementById("exhibition").innerHTML = "";
          document.getElementById("exhibition").appendChild(ifr);

          var ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument;
          ifrw.document.open();
          ifrw.document.write(text);
          ifrw.document.close();
          autodivheight();
        }

        submitTryit();
      }
    },
    computed: {
      codemirror() {
        return this.$refs.myCm.codemirror
      }
    },
    mounted() {
      console.log('11', this.test2)
      console.log('this is current codemirror object', this.codemirror)
      this.init();
      // you can use this.codemirror to do something...
    }
  }
</script>
<style>
  .u-code{
    display: flex;
  }
  .u-code__edit{
    width: 50%;
    position: relative;

  }
  .u-code__exhibition{
    width: 50%;
    border: 1px solid #cccccc;
    height: calc(100vh - 118px);
  }
  #iframeResult{
    width: 100%;
    height: 100%;
  }

  .CodeMirror{
    height: calc(100vh - 115px);
  }
  .u-code__edit-submit{
    position: absolute;
    right: 20px;
    top: 10px;
    border: #72d0eb;
    background: #72d0eb;
    color: #ffffff;
    padding: 5px 8px;
    cursor: pointer!important;
    z-index: 10000;
    border-radius: 5px;
  }
</style>
