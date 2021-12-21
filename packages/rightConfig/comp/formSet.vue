<template>
  <div>
    <el-form :model="formSets" size="mini" label-width="80px">
      <el-form-item label="对齐方式:">
        <el-select v-model="formSets.labelPosition" style="width: 100%">
          <el-option
            v-for="(item, index) in positionArr"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="字段宽度:">
        <el-input-number
          style="width: 100%"
          v-model.number="formSets.labelWidth"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="组件尺寸:">
        <el-select style="width: 100%" v-model="formSets.formSize">
          <el-option
            v-for="(item, index) in formSizeArr"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    formSets: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      positionArr: [
        { label: "左对齐", value: "left" },
        { label: "右对齐", value: "right" },
        { label: "顶对齐", value: "top" },
      ],
      formSizeArr: [
        { label: "大", value: "medium" },
        { label: "中", value: "small" },
        { label: "小", value: "mini" },
      ],
    };
  },
};
</script>

<style></style>
