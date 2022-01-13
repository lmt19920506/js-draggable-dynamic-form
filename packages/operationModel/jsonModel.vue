<template>
  <el-dialog
    :visible.sync="isShowDialog"
    :close-on-click-modal="false"
    title="生成JSON"
  >
    <previewCode :editorJson="editorJson" />
  </el-dialog>
</template>

<script>
import previewCode from "../previewCode/index";
export default {
  components: {
    previewCode,
  },
  data() {
    return {
      isShowDialog: false,
      editorJson: "",
      jsonData: {},
    };
  },
  watch: {
    isShowDialog(val) {
      if (val) {
        // console.log('aaa')
        this.editorJson = JSON.stringify(this.jsonData, null, 2)
      }
    }
  }
};
</script>

<style></style>
