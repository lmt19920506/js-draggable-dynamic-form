<template>
  <div>
    <el-form
      :model="dynamicValidateForm"
      ref="dynamicValidateForm"
      size="mini"
    >
      <el-table
        :data="dynamicValidateForm.domains"
        :border="data.border"
        :stripe="data.stripe"
        style="width: 100%"
      >
        <el-table-column
          type="index"
          width="50"
          align="center"
        ></el-table-column>
        <el-table-column
          width="200"
          v-for="(item, index) in columns"
          :key="index"
        >
          <template slot="header">
            <span style="color:#F56C6C" v-if='item.rules.length > 0 && item.rules[0].required'>*</span>
            <span>{{ item.name }}</span>
          </template>
          <template slot-scope="scope">
            <el-form-item
              :key="scope.$index"
              :rules="item.rules"
              :prop="'domains.' + scope.$index + '.' + item.key"
            >
              <tableFormModuleItem :element="item" :form="scope.row" />
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button type="danger" size="mini" @click="dele(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="primary" size="mini" @click="addTableData">添加一行</el-button>
    </el-form>
  </div>
</template>

<script>
import tableFormModuleItem from "./tableFormModuleItem";
export default {
  components: {
    tableFormModuleItem,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      dynamicValidateForm: {
        domains: [],
      },
      tableColumnData: {},
    };
  },
  computed: {
    columns() {
      return this.data.column;
    },
  },
  methods: {
    init() {
      this.data.column.forEach((item) => {
        if (
          item.type === "CheckBox" ||
          (item.type === "Select" && item.multiple)
        ) {
          item.default = [];
        }
        this.tableColumnData[item.model] = item.defaultValue;
      });
    },
    addTableData() {
      console.log('table attr---', this.data)
      const tableColumnData = {};
      this.data.column.forEach((item) => {
        if (
          item.type === "CheckBox" ||
          (item.type === "Select" && item.multiple)
        ) {
          item.default = [];
        }
        tableColumnData[item.model] = item.defaultValue;
      });
      this.dynamicValidateForm.domains.push({
        ...tableColumnData,
        key: Date.now(),
      });
      this.data.tableData = this.dynamicValidateForm.domains
    },
    dele(index) {
      this.dynamicValidateForm.domains.splice(index, 1)
      this.data.tableData.splice(index, 1)
    }
  },
  mounted() {
    // this.init()
  },
};
</script>

<style></style>
