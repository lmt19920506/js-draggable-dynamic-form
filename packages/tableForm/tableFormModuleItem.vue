<template>
  <div>
    <el-input v-model="forms[element.model]" v-if="element.type === 'Input'"></el-input>
    <el-select v-model="forms[element.model]" v-if="element.type === 'Select'">
      <el-option v-for="(item, index) in element.option" :key="index" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  props: ['element', 'config', 'form'],
  computed: {
    forms() {
      return this.form
    }
  },
  methods: {
    generateModel() {
      const data = {};
      this.element.column.forEach(e => {
        console.log('e---', e)
        data[e.model] = e.defaultValue;
        // data['key'] = e.key
      });
      console.log('data---', data)
    }
  }
};
</script>

<style>

</style>