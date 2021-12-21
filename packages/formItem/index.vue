<template>
  <div>
    <el-input
      v-if="element.type === 'Input'"
      v-model="element.defaultValue"
    ></el-input>

    <el-select
      v-if="element.type === 'Select'"
      v-model="element.defaultValue"
      :multiple="element.multiple"
      style="width: 100%"
    >
      <el-option
        v-for="(item, index) in element.option"
        :key="index"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>

    <el-checkbox-group
      v-if="element.type === 'Checkbox'"
      v-model="element.defaultValue"
      style="text-align: left; width: 100%"
    >
      <el-checkbox
        v-for="(item, index) in element.option"
        :key="index"
        :label="item.value"
        >{{ item.label }}</el-checkbox
      >
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: "FormItem",
  props: {
    element: {
      type: Object,
      default: () => {},
    },
    formModel: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
