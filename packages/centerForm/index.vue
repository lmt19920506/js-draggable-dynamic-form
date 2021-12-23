<template>
  <el-card class="centerFormContainer">
    <div slot="header">
      <span style="float: left">表单设计</span>
      <el-button
        style="float: right; padding: 3px 0; margin-left: 5px"
        type="text"
        >保存</el-button
      >
      <el-button
        style="float: right; padding: 3px 0; margin-left: 5px"
        type="text"
        @click="previewView"
        >预览</el-button
      >
      <el-button
        style="float: right; padding: 3px 0; margin-left: 5px"
        type="text"
        @click="getJson"
        >获取json</el-button
      >
      <el-button
        style="float: right; padding: 3px 0; margin-left: 5px"
        type="text"
        >下载源码</el-button
      >
    </div>
    <div class="elcardzz" @dragover.prevent="dragover" @drop="dropFun"></div>
    <div class="formsContent">
      <el-form
        :model="formModel"
        :label-width="formSets.labelWidth + 'px'"
        :label-position="formSets.labelPosition"
        :size="formSets.formSize"
      >
        <el-row :gutter="10">
          <el-col
            v-for="(item, index) in formData"
            :key="index"
            :span="item.col"
          >
            <div
              class="formItem_box"
              :class="clickIndex === index ? 'active' : ''"
              draggable
              @dragstart="dragstartItem($event, item, index)"
              @dragover.prevent="drogoverItem($event, item, index)"
              @drop="dropItem($event, item, index)"
              @dragleave="dragleaveItem(index)"
              @click="clickItem(item, index)"
            >
              <div
                class="delete"
                :class="clickIndex === index ? 'active' : 'unactivated'"
                @click.stop.prevent="handleDelete(item, index)"
              >
                <i class="el-icon-delete"></i>
              </div>
              <div
                class="copy"
                :class="clickIndex === index ? 'active' : 'unactivated'"
                @click.stop.prevent="handleCopy(item, index)"
              >
                <i class="el-icon-document-copy"></i>
              </div>
              <el-form-item
                :label="item.name + ':'"
                v-if="['TableForm'].indexOf(item.type) === -1"
              >
                <FormItem :element="item" :formModel="formModel" />
              </el-form-item>
              <el-form-item :label="item.name + ':'" v-if="item.type === 'TableForm'">
                <TableForm
                  :formItemData="formItemData"
                  :data="item"
                  :drag1="drag1"
                  :drag2="drag2"
                  :drag3="drag3"
                  @setdrag3="setdrag3"
                  v-on="$listeners"
                />
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
import TableForm from "../tableForm/tableForm";
export default {
  components: {
    FormItem,
    TableForm,
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
    formSets: {
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
      storeLeftComp: {},
      drag3: "1", // 拖动到表格   1.没有   2.有
      currentId: 0, // 被点击选中的id值
      clickIndex: null,
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
        this.$emit("setdrag", { type: "drag1", value: "3" });
      }
    },
    dropFun() {
      // 不是中间的拖动时 者添加到中间的表单中
      if (this.drag2 === "1") {
        this.$emit("addcom");
        console.log("mt");
        this.clickIndex = this.formData.length - 1;
      }
      this.drag3 = "1";
    },
    clickItem(item, index) {
      this.$emit("selectCom", item);
      this.currentId = item.id;
      this.clickIndex = index;
    },
    dragstartItem(e, item, index) {
      this.$emit("setdrag", { type: "drag2", value: "2" });
      this.$emit("selectCom", item);
      this.startIndex = index;
      console.log("开始拖动 小div", index);
    },
    drogoverItem(e, item, index) {
      console.log("drogover");
      // 处理 从左侧拖动到中间组件的逻辑
      if (this.drag2 === "1" && this.drag1 !== "1") {
        // console.log(111)
        this.$emit("setdrag", { type: "drag1", value: "4" });
        // todo 增加横线
      }
      // 中间拖动进入到 中间的其他组件
      if (this.drag1 === "1" && this.drag2 !== "1") {
        // console.log(222)
        if (index !== this.startIndex) {
          this.endIndex = index;
          this.$emit("setdrag", { type: "drag2", value: "3" });
        } else {
          this.endIndex = -1;
        }
      }
    },
    dropItem(e, item, index) {
      console.log("drop---", index);
      // 中间的进行拖动交换
      if (this.drag1 === "1") {
        this.$emit("setdrag", { type: "drag2", value: "1" });
        if (
          this.startIndex !== this.endIndex &&
          this.startIndex != -1 &&
          this.endIndex != -1
        ) {
          this.$emit("jiaohuan", this.startIndex, this.endIndex);
        }
      }
      // 从左侧进入到小div中放下  并且没有进入到表格中时 进行对应位置的添加
      if (this.drag1 === "4" && this.drag3 != "2") {
        console.log("从左侧放入item中");
        this.$emit("addcom", index);
      }
      this.drag3 = "1";
      this.clickIndex = index;
    },
    dragleaveItem(index) {
      this.endIndex = -1;
    },
    handleDelete(data, index) {
      this.formData.splice(index, 1);
    },
    handleCopy(data, index) {},
    setdrag3(data) {
      this.drag3 = data;
    },
    previewView() {
      this.$emit("previewView");
    },
    getJson() {
      this.$emit('getJson')
    }
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
  min-height: 900px;
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
  height: 800px;
  // background: yellow;
  padding: 10px;
  overflow-y: auto;
}
.formItem_box {
  position: relative;
  padding: 5px 2px;
  overflow: hidden;
  border-radius: 3px;
  box-sizing: border-box;
  border: 1px dashed #3a88ed;
  margin-top: 10px;
  cursor: move;
  &:hover {
    background: rgba(19, 194, 194, 0.2);
    transition: 0.5s;
  }
  &:before {
    content: "";
    height: 3px;
    width: 100%;
    background: #13c2c2;
    position: absolute;
    top: 0;
    right: -100%;
    transition: all 0.3s;
  }
  &.active {
    &::before {
      right: 0;
    }

    background: rgba(19, 194, 194, 0.2);
    outline-offset: 0;
  }
}
.copy,
.delete {
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  z-index: 999;
  opacity: 0;
  transition: all 0.3s;
  cursor: pointer;

  &.unactivated {
    opacity: 0 !important;
    pointer-events: none;
  }

  &.active {
    opacity: 1 !important;
  }
}
.copy {
  border-radius: 0 0 0 8px;
  right: 30px;
  background: #13c2c2;
  cursor: pointer;
}
.delete {
  border-right: 0px;
  background: #13c2c2;
  cursor: pointer;
}
</style>
