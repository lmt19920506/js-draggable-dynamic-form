<template>
  <div>
    <el-form>
      <el-table
        :data="dynamicValidateForm.domains"
        :border="data.border"
        :stripe="data.stripe"
      >
        <el-table-column
          v-for="(item, index) in columns"
          :key="index"
        >
        <template slot="header">
          {{item.name}}
        </template>
        <template slot-scope="scope">
          <el-form-item :key="scope.$index" :rules="item.rules" :prop="'domains.' + scope.$index + '.' + item.key">
            <tableFormModuleItem :element="item" :form="scope.row" />
          </el-form-item>
        </template>
      </el-table-column>
      </el-table>
      <el-button type="primary" @click="addTableData">添加一行</el-button>
    </el-form>
  </div>
</template>

<script>
import tableFormModuleItem from './tableFormModuleItem'
export default {
  components: {
    tableFormModuleItem
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
      tableColumnData: {}
    };
  },
  computed: {
    columns() {
      return this.data.column;
    },
  },
  methods: {
    init() {
      this.data.column.forEach(item => {
        if((item.type === 'CheckBox') || (item.type === 'Select' && item.multiple)) {
          item.default = []
        }
        this.tableColumnData[item.model] = item.defaultValue
      })
    },
    addTableData() {
      this.dynamicValidateForm.domains.push(this.tableColumnData)
    }
  },
  mounted() {
    this.init()
  }
};
</script>

<style></style>
