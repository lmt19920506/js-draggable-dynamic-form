<template>
  <div>
    <el-dialog
      ref="previewModelDialog"
      :visible.sync="isShowPreviewModel"
      v-if="isShowPreviewModel"
      title="预览"
      width="70%"
      :before-close="handleClose"
    >
      <FormView ref="formView" v-bind="$attrs" v-on="$listeners" />
      <span slot="footer">
        <el-button type="primary" @click="getModelData">获取数据</el-button>
      </span>
    </el-dialog>
    <el-dialog :visible.sync="isShowModelDataDialog" title="数据">
      <previewCode :editorJson="editorJson" />
    </el-dialog>
  </div>
</template>

<script>
import formView from "../showForm/formView";
import previewCode from "../previewCode/index";
export default {
  components: {
    previewCode,
  },
  props: {
    dialogKey: {
      type: [String, Number]
    }
  },
  data() {
    return {
      isShowPreviewModel: false,
      isShowModelDataDialog: false,
      editorJson: ''
    };
  },
  methods: {
    handleClose() {
      this.isShowPreviewModel = false;
    },
    getModelData() {
      this.isShowModelDataDialog = true
      console.log('json---', this.$attrs)
      let obj = {}
      this.$attrs.data.forEach(item => {
        obj[item.model] = item.defaultValue
        if (item.type === 'TableForm') {
          obj[item.model] = item.tableData
        }
      })
      this.editorJson = JSON.stringify(obj, null, 2)
    },
  },
  watch: {
    // isShowPreviewModel(newVal) {
    //   if (newVal) {
    //     this.$nextTick(() => {
    //       this.$refs.formView.init();
    //     });
    //   }
    // },
  },
};
</script>

<style></style>
