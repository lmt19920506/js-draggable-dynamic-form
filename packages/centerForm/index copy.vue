<template>
  <el-card class="centerFormContainer">
    <div slot="header" class="clearfix">
      <!-- <span>表单设计</span> -->
      <p>drag1---{{ drag1 }}</p>
      <p>drag2---{{ drag2 }}</p>
      <p>drogoverIndex--::{{ drogoverIndex }}</p>
      <el-button
        style="float: right; padding: 3px 0; margin-left: 5px"
        type="text"
        >保存</el-button
      >
      <el-button
        style="float: right; padding: 3px 0; margin-left: 5px"
        type="text"
        >预览</el-button
      >
      <el-button
        style="float: right; padding: 3px 0; margin-left: 5px"
        type="text"
        >下载源码</el-button
      >
    </div>
    <div class="elcardzz" @dragover.prevent="dragover" @drop="drop"></div>
    <div class="formsContent">
      <el-form :model="formModel">
        <el-row :gutter="10">
          <el-col
            v-for="(item, index) in formData"
            :key="index"
            :span="item.col"
          >
            <div
              class="formItem_box"
              draggable
              @dragstart="dragstartItem($event, item, index)"
              @dragover.prevent="drogoverItem($event, item, index)"
              @drop="dropItem($event, item, index)"
              @dragleave="dragleaveItem(index)"
            >
              <!-- <div class="delete" @click="dele(index)">
                <i class="el-icon-delete"></i>
              </div> -->
              <el-form-item :label="item.name">
                <FormItem :element="item" :formModel="formModel" />
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </el-card>
</template>

<script>
import FormItem from "../formItem/index";
export default {
  components: {
    FormItem,
  },
  props: {
    drag1: {
      type: String,
      default: "1",
    },
    drag2: {
      type: String,
      default: "1",
    },
    formData: {
      type: Array,
      default: () => [],
    },
    formItemData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      formModel: {},
      startIndex: -1,
      endIndex: -1,
      selectDragIndex: -1,
      drogoverIndex: -1,
      storeLeftComp: {}
    };
  },
  methods: {
    dragstart(e) {
      e.dataTransfer.setData("one", "aaa");
    },
    dragover(e) {
      console.log("hahah");
      if (this.drag2 === "1") {
        // 中间组件拖动到中间的其他组件
        this.$emit("setDrag", { type: "drag1", value: "3" });
      }
    },
    drop(e) {
      if (!e.dataTransfer.getData("formdata")) return;
      let comp = JSON.parse(e.dataTransfer.getData("formdata"));
      this.storeLeftComp = comp
      if (this.drag2 === "1") {
        this.$emit("addcom", comp);
      }
      this.drag3 = 1;
    },
    dragstartItem(e, item, index) {
      console.log("dragstartItem-item---", item);
      console.log("dragstartItem-index---", index);
      e.dataTransfer.setData("itemData", JSON.stringify(item));
      this.$emit("setDrag", { type: "drag2", value: "2" });
      console.log("start drag");
      this.startIndex = index;
      this.selectDragIndex = index;
    },
    drogoverItem(e, item, index) {
      // console.log("drogover222---", index);
      // 从左侧进入到中间
      if (this.drag1 === '3' && this.drag2 === '1' ) {
        // console.log('从左侧进入中间---', index)
        this.drogoverIndex = index
      }
      if (this.drag1 === "1" && this.drag2 !== "1") {// 中间组件拖动
        // this.endIndex = index;
        this.$emit("setDrag", { type: "drag2", value: "3" });
      }
    },
    dropItem(e, item, index) {
      // console.log("drop2222---aa", item);
      if (this.drag1 === '3') {
        console.log('drop 了')
        // const leftItem = JSON.parse(e.dataTransfer.getData(e.dataTransfer.formdata))
        
        this.formData.splice(this.drogoverIndex, 0, this.storeLeftComp)
      }
      if (!e.dataTransfer.getData("itemData")) return;
      const r = JSON.parse(e.dataTransfer.getData("itemData"));
      console.log("drop-data---", r);
      if (this.drag1 === "1") {
        this.$emit("setDrag", { type: "drag2", value: "1" });
        // if (this.startIndex !== index) {
        this.$emit("deleCom", this.selectDragIndex);
        this.$emit("jiaohuan", r, index);
        // }
      }
    },
    dragleaveItem(index) {
      this.endIndex = -1;
    },
    dele(index) {
      this.formData.splice(index, 1);
    },
  },
  watch: {
    formItemData(newVal) {
      for (let key in newVal) {
        this.$set(this.formModel, newVal["model"], newVal["defaultValue"]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.centerFormContainer {
  position: relative;
  min-height: 700px;
  overflow-y: auto;
}
.elcardzz {
  position: absolute;
  top: 58px;
  left: 0;
  right: 0;
  bottom: 0;
}
.formsContent {
  height: 300px;
  // background: yellow;
  padding: 10px;
}
.formItem_box {
  position: relative;
  padding: 3px;
  overflow: hidden;
  border-radius: 3px;
  box-sizing: border-box;
  border: 1px dashed #3a88ed;
  margin-top: 5px;
  &:hover {
    border: 1px dashed pink;
    cursor: move;
  }
}
</style>
