<!--
 * @Description: 对vue-quill-editor封装
 * @Author: kcz
 * @Date: 2020-03-30 12:44:03
 * @LastEditors: kcz
 * @LastEditTime: 2020-04-26 19:21:27
 -->
<template>
  <quillEditor
    :style="{ height: `${element.options.height}px` }"
    :value="element.defaultValue"
    ref="vueQuillEditor"
    class="ql-editor-class"
    :class="{ chinesization: element.chinesization }"
    :options="editorOption"
    :disabled="element.disabled || parentDisabled"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @change="onEditorChange($event)"
  >
  </quillEditor>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

export default {
  name: "editor",
  props: ["value", "element", "parentDisabled"],
  components: { quillEditor },
  data() {
    return {
      editorOption: {
        placeholder: this.element.options.placeholder
      }
    };
  },
  methods: {
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange(e) {
      this.$emit("change", e.html);
    }
  }
};
</script>
<style lang="scss" scoped>
.ql-editor-class {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 1.42;
  height: 100%;
  outline: none;
  padding: 0 0 66px;
  tab-size: 4;
  -moz-tab-size: 4;
  text-align: left;
  word-wrap: break-word;
}
</style>
