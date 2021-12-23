<template>
  <div>
    <codemirror ref="codeMirror" :value="editorJson" style="height: 100%"></codemirror>
    <div style="text-align: center" v-if="isShowBtn">
      <el-button type="primary" size="mini">复制数据</el-button>
      <el-button type="primary" size="mini" @click="handleExportJson">导出代码</el-button>
    </div>
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror-lite";
export default {
  components: {
    codemirror
  },
  props: {
    fileFormat: {
      type: String,
      default: "json"
    },
    editorJson: {
      type: String,
      default: ''
    },
    isShowBtn: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    exportData(data, fileName = `demo.${this.fileFormat}`) {
      let content = "data:text/csv;charset=utf-8,";
      content += data;
      var encodedUri = encodeURI(content);
      var actions = document.createElement("a");
      actions.setAttribute("href", encodedUri);
      actions.setAttribute("download", fileName);
      actions.click();
    },
    handleExportJson() {
      this.exportData(this.editorJson);
    }
  }
}
</script>

<style>

</style>