<template>
  <el-card class="collapseContainer">
    <!-- <div class=""></div> -->
    <el-row :gutter="10">
      <el-col :span="12" v-for="(item, index) in data" :key="index">
        <div class="collapse_item" draggable @dragstart="dragstart($event, item)" @dragend="dragend">
          {{ item.name }}
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import MInput from "./itemData/input";
import MSelect from "./itemData/select";
import MCheckbox from "./itemData/checkbox.js";
import MRadio from './itemData/radio'
import MTableForm from './itemData/tableForm'
import MDatePicker from './itemData/datePicker'
export default {
  data() {
    this.data = [
        { type: "input", name: "文本框" },
        { type: "Select", name: "下拉框" },
        { type: "Checkbox", name: "多选" },
        { type: 'Radio', name: '单选' },
        { type: 'DatePicker', name: '日期选择器' },
        { type: "TableForm", name: "表格" }
      ]
    return {};
  },
  methods: {
    dragstart(e, data) {
      this.$emit('setdrag', {type: 'drag1', value: '2'})
      let obj = this.getobj(data.type)
      console.log('obj---', obj)
      this.$emit('setcom', obj)
      e.dataTransfer.setData('formdata', JSON.stringify(obj))

    },
    dragend() {
      // console.log('left dragend---', 'dragend')
      this.$emit('reset')
    },
    getobj(type) {
      // console.log('t-', new MInput())
      let obj = {}
      if (type === 'input') {
        obj = new MInput()
      } else if (type === 'Select') {
        obj = new MSelect()
      } else if (type === 'Checkbox') {
        obj = new MCheckbox()
      } else if (type === 'Radio') {
        obj = new MRadio
      } else if (type === 'DatePicker') {
        obj = new MDatePicker()
      } else if (type === 'TableForm') {
        obj = new MTableForm()
      }
      return obj
    }
  }
}
</script>

<style lang="scss" scoped>
.collapseContainer {
  position: relative;
  min-height: 900px;
}
.collapse_item {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-bottom: 10px;
  transition: 0.3s;
  cursor: pointer;
  cursor: move;
  font-size: 14px;
  background: #f1f2fd;
  &:hover {
    // border: 1px dashed #579ff8;
    // color: #579ff8;
    // transition: 0.3s;
    color: #13c2c2;
    border: 1px solid  #13c2c2;
    position: relative;
    // z-index: 1;
    box-shadow: 0 2px 6px #13c2c2;
  }
}
</style>