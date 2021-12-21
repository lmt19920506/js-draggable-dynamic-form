<template>
  <el-card>
    <el-tabs v-model="tabName">
      <el-tab-pane label="字段设置" name="one">
        <FormItemSet :form="form" />
      </el-tab-pane>
      <el-tab-pane label="校验设置" name="two"></el-tab-pane>
      <el-tab-pane label="表单设置" name="three">
        <FormSet :formSets="formSets" />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import FormItemSet from './comp/itemSet'
import FormSet from './comp/formSet'
export default {
  components: {
    FormItemSet,
    FormSet
  },
  props: {
    form: {
      type: Object,
      default: () => {}
    },
    formSets: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      tabName: "one",
    };
  },
  
};
</script>

<style></style>
