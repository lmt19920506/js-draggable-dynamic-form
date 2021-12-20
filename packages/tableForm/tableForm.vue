<template>
  <div class="tableFormContent">
    <div
      class="contdiv"
      dragenter="dragenter"
      @dragover.prevent="dragover"
      @dragleave="dragleave"
      @drop="drop"
    ></div>
    <el-form :model="dynamicValidateForm">
      <el-table :data="dynamicValidateForm.domains">
        <el-table-column v-for="(item, index) in data.column" :key="'column' + index">
          <template slot="header">
            <span>{{item.name}}</span>
            <i class="el-icon-setting icons" style="cursor: pointer; z-index: 1000" @click="set(item)"></i>
            <i class="el-icon-delete icons"></i>
          </template>
          <template slot-scope="scope">
            <formItem :element="item" />
          </template>
        </el-table-column>
        <el-table-column label="Action" width="80px">
          <!-- <i></i> -->
        </el-table-column>
      </el-table>
    </el-form>
  </div>
</template>

<script>
import formItem from '../formItem/index'
export default {
  components: {
    formItem
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    drag1: {
      type: String,
      default: "",
    },
    drag2: {
      type: String,
      default: "",
    },
    drag3: {
      type: String,
      default: "",
    },
    formItemData: {
      type: Object
    }
  },
  data() {
    return {
      dynamicValidateForm: {
        domains: [
          // {a: 3}
        ]
      }
    }
  },
  methods: {
    dragenter() {
      console.log("进入表格");
    },
    dragover() {
      // 在表格上滑动
      this.$emit("setdrag3", "2");
    },
    dragleave() {
      this.$emit("setdrag3", "1");
    },
    drop() {
      if(['TableForm'].indexOf(this.formItemData.type) === -1) {
        this.data.addColumn(this.formItemData)
      } else if (['TableForm'].indexOf(this.formItemData.type) > -1) {
        this.$message.error('不能拖')
      }
    },
    set(data) {
      console.log('set---', data)
    }
  },
};
</script>

<style lang="scss" scoped>
.tableFormContent {
  position: relative;
  width: 100%;
  height: 117px;
  z-index: 99;
  /* background: blue; */
}
.contdiv {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  /* bottom: 40px; */
  bottom: 0;
  z-index: 100;
  transition: all 0.5s;
  border-radius: 3px;
  overflow: hidden;
  // background: #f0f0f0;
}
.icons {
  text-align: right;
  z-index: 10000;
  cursor: pointer;
}
</style>
