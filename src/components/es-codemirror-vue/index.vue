<!--
    @Modular：代码编辑器
    @Author: zouwf
    @Date: 2020-07-13
-->
<template>
    <div class="es-codemirror">
        <div class="codemirror">
            <codemirror
                v-model="code"
                :options="cmOption"
                @cursorActivity="onCmCursorActivity"
                @ready="onCmReady"
                @focus="onCmFocus"
                @blur="onCmBlur"
            />
        </div>
        <div class="pre" :style="{background: preBackground}">
          <code-render v-model="code"></code-render>
        </div>
    </div>
</template>

<script>
import dedent from 'dedent'
import { codemirror } from 'vue-codemirror'
// base style
import 'codemirror/lib/codemirror.css'
// theme css
import 'codemirror/theme/base16-dark.css'
// language
import 'codemirror/mode/vue/vue.js'
// active-line.js
import 'codemirror/addon/selection/active-line.js'
// styleSelectedText
import 'codemirror/addon/selection/mark-selection.js'
import 'codemirror/addon/search/searchcursor.js'
// highlightSelectionMatches
import 'codemirror/addon/scroll/annotatescrollbar.js'
import 'codemirror/addon/search/matchesonscrollbar.js'

import 'codemirror/addon/search/match-highlighter.js'
// keyMap
import 'codemirror/mode/clike/clike.js'
import 'codemirror/addon/edit/matchbrackets.js'
import 'codemirror/addon/comment/comment.js'
import 'codemirror/addon/dialog/dialog.js'
import 'codemirror/addon/dialog/dialog.css'

import 'codemirror/addon/search/search.js'
import 'codemirror/keymap/sublime.js'
// foldGutter
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/brace-fold.js'
import 'codemirror/addon/fold/comment-fold.js'
import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/indent-fold.js'
import 'codemirror/addon/fold/markdown-fold.js'
import 'codemirror/addon/fold/xml-fold.js'

// import codeRender from "@@/../code-render";
import codeRender from '../../components/code-render'
export default {
  name: 'codemirror-example-vue',
  title: 'Mode: text/x-vue & Theme: base16-dark',
  props: {
    // 代码
    code: '',
    // 效果区域背景颜色
    preBackground: {
      type: String,
      default: '#f3f3f3'
    }
  },
  components: {
    codemirror,
    codeRender
  },
  data () {
    return {
      cmOption: {
        dedentCode: '',
        tabSize: 4,
        foldGutter: true,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        keyMap: 'sublime',
        mode: 'text/x-vue',
        theme: 'base16-dark',
        extraKeys: {
          'F11' (cm) {
            cm.setOption('fullScreen', !cm.getOption('fullScreen'))
          },
          'Esc' (cm) {
            if (cm.getOption('fullScreen')) cm.setOption('fullScreen', false)
          }
        }
      }
    }
  },
  methods: {
    onCmCursorActivity (codemirror) {
      console.debug('onCmCursorActivity', codemirror)
    },
    onCmReady (codemirror) {
      console.debug('onCmReady', codemirror)
    },
    onCmFocus (codemirror) {
      console.debug('onCmFocus', codemirror)
    },
    onCmBlur (codemirror) {
      this.dedentCode = codemirror.getValue()
    }
  },
  created () {
    this.dedentCode = dedent(this.code)
  }
}
</script>

<style lang="scss" scoped>
    .es-codemirror {
      display: flex;
      height: 100vh;

      & > div{
        flex: 1;
      }

      .pre {
        display: block;
        margin: 0;
        overflow: auto;
        padding: 1rem;
        font-size: 20px;
        line-height: 1.6;
        word-break: break-all;
        word-wrap: break-word;
        background: #f3f3f3;
      }

      /deep/ .CodeMirror{
        height: 100vh!important;
        font-size: 20px;
      }

    }

</style>
