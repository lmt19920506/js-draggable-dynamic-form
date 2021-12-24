<template>
  <div>
    <el-input
      v-if="element.type === 'Input'"
      v-model="element.defaultValue"
      :disabled="element.disabled"
    ></el-input>

    <el-select
      v-if="element.type === 'Select'"
      v-model="element.defaultValue"
      :multiple="element.multiple"
      :disabled="element.disabled"
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

    <el-radio-group
      v-if="element.type === 'Radio'"
      v-model="element.defaultValue"
    >
      <el-radio
        v-for="item in element.option"
        :key="item.value"
        :label="item.value"
        >{{ item.label }}</el-radio
      >
    </el-radio-group>
    <el-date-picker
      v-if="element.type === 'DatePicker'"
      v-model="element.defaultValue"
      :type="element.showType"
      :value-format="element.valueFormat"
      :clearable="element.clearable"
    ></el-date-picker>
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
