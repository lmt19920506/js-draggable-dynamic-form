<template>
  <el-upload
      v-if="element.type === 'Upload'"
      :action="element.action"
      :limit="element.limit"
      :file-list="element.fileList"
      :before-upload="beforeUpload"
      :on-change="handleChange"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
    >
    <el-button size="small" type="primary" :disabled="element.disabled">上传</el-button>
  </el-upload>
</template>

<script>
export default {
  props: {
    element: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    beforeUpload(data) {
      console.log('before---', data)
    },
    handleChange() {},
    handlePreview() {},
    handleRemove() {},
    beforeRemove() {}
  }
}
</script>

<style>

</style>