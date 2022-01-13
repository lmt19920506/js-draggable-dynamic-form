<template>
  <el-card class="collapseContainer">
    <!-- <div class=""></div> -->
    <el-collapse v-model="activeName">
      <el-collapse-item :title="item.compName" :name="item.name" v-for="(item, index) in componentData" :key="index">
        <el-row :gutter="10">
          <el-col
            :span="12"
            v-for="(child, ind) in item.children"
            :key="ind"
          >
            <div
              class="collapse_item"
              draggable
              @dragstart="dragstart($event, child)"
              @dragend="dragend"
            >
              <i class="icon iconfont" :class="child.icon"></i>
              <span class="text">{{ child.name }}</span>
            </div>
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script>
import MInput from "./itemData/input";
import MSelect from "./itemData/select";
import MCheckbox from "./itemData/checkbox.js";
import MRadio from "./itemData/radio";
import MTableForm from "./itemData/tableForm";
import MDatePicker from "./itemData/datePicker";
import MSwitch from "./itemData/switch";
import MSlider from "./itemData/slider";
import MUpload from './itemData/upload'
import MEditor from './itemData/editor'
export default {
  data() {
    this.componentData = [
      {
        compName: "基础组件",
        name: 1,
        children: [
          { type: "input", name: "文本框", icon: "icon-edit" },
          { type: "Select", name: "下拉框", icon: "icon-xialaxuanze" },
          { type: "Checkbox", name: "多选", icon: "icon-duoxuanxuanzhong" },
          { type: "Radio", name: "单选", icon: "icon-danxuan" },
          { type: "Switch", name: "开关", icon: "icon-gongyezujian-kaiguan" },
          { type: "Upload", name: "上传", icon: "icon-yunshangchuan" },
          { type: "Slider", name: "滑块", icon: "icon-huakuai" },
          { type: "Editor", name: "富文本", icon: "icon-bianjiqi" },
          { type: "DatePicker", name: "日期选择器", icon: "icon-riqi" },
          { type: "TableForm", name: "表格", icon: "icon-biaodanzujian-biaoge"}
        ],
      },
      {
        compName: '布局组件',
        name: 2,
        children: []
      }
    ];
    return {
      activeName: 1,
    };
  },
  methods: {
    dragstart(e, data) {
      this.$emit("setdrag", { type: "drag1", value: "2" });
      let obj = this.getobj(data.type);
      console.log("obj---", obj);
      this.$emit("setcom", obj);
      e.dataTransfer.setData("formdata", JSON.stringify(obj));
    },
    dragend() {
      // console.log('left dragend---', 'dragend')
      this.$emit("reset");
    },
    getobj(type) {
      // console.log('t-', new MInput())
      let obj = {};
      if (type === "input") {
        obj = new MInput();
      } else if (type === "Select") {
        obj = new MSelect();
      } else if (type === "Checkbox") {
        obj = new MCheckbox();
      } else if (type === "Radio") {
        obj = new MRadio();
      } else if (type === "Switch") {
        obj = new MSwitch();
      } else if (type === 'Upload') {
        obj = new MUpload()
      } else if (type === "Slider") {
        obj = new MSlider();
      } else if (type === 'Editor') {
        obj = new MEditor()
      } else if (type === "DatePicker") {
        obj = new MDatePicker();
      } else if (type === "TableForm") {
        obj = new MTableForm();
      }
      return obj;
    },
  },
};
</script>

<style lang="scss" scoped>
.collapseContainer {
  position: relative;
  min-height: 900px;
}
.collapse_item {
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  align-items: center;
  height: 35px;
  margin-bottom: 10px;
  transition: 0.3s;
  cursor: pointer;
  cursor: move;
  font-size: 14px;
  // border-radius: 10px;
  // background: #f1f2fd;
  border: 1px solid #ccc;
  font-size: 14px;
  &:hover {
    // border: 1px dashed #579ff8;
    // color: #579ff8;
    // transition: 0.3s;
    color: #13c2c2;
    border: 1px solid #13c2c2;
    position: relative;
    // z-index: 1;
    box-shadow: 0 2px 6px #13c2c2;
  }
  .iconfont {
    font-size: 17px;
    margin-left: 15px;
  }
  .text {
    margin-left: 10px;
  }
}
</style>
