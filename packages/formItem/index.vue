<template>
  <div>
    <template v-if="element.type === 'Input'">
      <el-input v-model="element.defaultValue" ></el-input>
    </template>
    <template v-if="element.type === 'Select'">
      <el-select v-model="element.defaultValue" :multiple="element.multiple" style="width: 100%">
        <el-option v-for="(item, index) in element.option" :key="index" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </template>
    <template v-if="element.type === 'Checkbox'">
      <el-checkbox-group v-model="element.defaultValue">
        <el-checkbox v-for="(item, index) in element.option" :key="index" :label="item.value">{{item.label}}</el-checkbox>
      </el-checkbox-group>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    element: {
      type: Object,
      default: () => {}
    },
    formModel: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>

</style>