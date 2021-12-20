<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <collapseItem @setdrag="setdrag" @reset="reset" @setcom="setcom" />
      </el-col>
      <el-col :span="12">
        <centerForm
          :formData="data"
          :formItemData="formItemData"
          :drag1="drag1"
          :drag2="drag2"
          @setdrag="setdrag"
          @addcom="addcom"
          @jiaohuan="jiaohuan"
          @deleCom="deleCom"
          @selectCom="setcom"
          @previewView="previewView"
        />
      </el-col>
      <el-col :span="6">
        <rightConfig :form="formItemData" />
      </el-col>
    </el-row>
    <previewModel ref="previewModel" :data="data" />
  </div>
</template>

<script>
import collapseItem from "../collapseItem/index";
import centerForm from "../centerForm/index";
import rightConfig from '../rightConfig/rightConfig'
import previewModel from '../showForm/previewModel'
export default {
  name: "FormDesign",
  components: {
    collapseItem,
    centerForm,
    rightConfig,
    previewModel
  },
  data() {
    return {
      // 是否正在拖动左侧的组件： 1 没用动  2.已经拖动没有进入中间的界面  3.拖动进入中间的页面  4.进入设计页面中的组件
      drag1: "1",
      // 是否正在拖动中间的组件： 1 没有动  2.已经拖动没有进入其他组件  3.进入其他组件
      drag2: "1",
      // 左边被操作的组件
      com: {},
      data: [],
      formItemData: {},
    };
  },
  methods: {
    setdrag(data) {
      this[data.type] = data.value;
    },
    reset() {
      this.drag1 = "1";
      this.drag2 = "1";
    },
    setcom(data) {
      // this.com = data;
      this.formItemData = data
    },
    // 增加一个组件
    addcom(index = -1) {
      console.log('addCon--index---', index)
      // this.formItemData = this.com;
      if (index == -1) {
        this.data.push(this.formItemData)
      } else {
        // console.log('com---', this.com)
        this.data.splice(index, 0, this.formItemData)
      }
    },
    addcom2(com) {
      this.data.push(com);
      this.formItemData = com;
    },
    jiaohuan(start, end) {
      console.log('start---', start)
      console.log('end---', end)
      // let arr =  this.data
      // let aa = arr[start]
      // arr[start] = arr[end]
      // arr[end] = aa
      // this.data = arr
      const currentItem = this.data[start]
      const insteadItem = this.data[end]
      this.$set(this.data, end, currentItem)
      this.$set(this.data, start, insteadItem)
    },
    jiaohuan2(item, index) {
      console.log("jiaohuan---item", item);
      console.log("jiaohuan---index", index);
      this.data.splice(index, 0, item);
    },
    deleCom(index) {
      this.data.splice(index, 1)
    },
    previewView() {
      this.$refs.previewModel.isShowPreviewModel = true
    }
  },
};
</script>

<style></style>
