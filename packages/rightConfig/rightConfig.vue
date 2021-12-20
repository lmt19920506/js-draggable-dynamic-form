<template>
  <el-tabs v-model="tabName">
    <el-tab-pane label="字段设置" name="one">
      <el-form :model="form" label-width="80px" size="mini">
        <el-form-item label="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="默认值">
          <el-input
            v-model="form.defaultValue"
            v-if="['Input'].includes(form.type)"
          ></el-input>
          <el-select v-if="['Select'].includes(form.type)" v-model="form.defaultValue" :multiple="form.multiple">
            <el-option
              v-for="(item, index) in form.option"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item v-if="['Select'].includes(form.type)" label="多选">
          <el-checkbox v-model="form.multiple" @change="changeMultiple"></el-checkbox>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="校验设置" name="two"></el-tab-pane>
    <el-tab-pane label="表单设置" name="three"></el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      tabName: "one",
    };
  },
  methods: {
    changeMultiple(data) {
      console.log('change multiple-', data)
      if (data) {
        this.form.defaultValue = this.form.defaultValue ? [this.form.defaultValue] : []
      } else {
        this.form.defaultValue = ''
      }
    }
  }
};
</script>

<style></style>
