<template>
  <el-dialog :visible.sync="isShowPreviewModel" title="预览">
    <FormView v-bind="$attrs" v-on="$listeners" />
  </el-dialog>
</template>

<script>
import formView from './formView'
export default {
  // props: {
  //   data: {
  //     type: Array,
  //     default: () => []
  //   }
  // },
  data() {
    return {
      isShowPreviewModel: false
    }
  }
}
</script>

<style>

</style>