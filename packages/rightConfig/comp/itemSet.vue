<template>
  <div>
    <el-form :model="form" label-width="80px" size="mini">
      <!-- 文本框 -->
      <!-- 下拉框 -->
      <!-- 多选 -->
      <!-- 表格 -->
      <el-form-item label="name:">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="model值">
        <el-input v-model="form.model"></el-input>
      </el-form-item>
      <el-form-item label="栅格数">
        <el-input-number
          v-model.number="form.col"
          :max="24"
          :min="1"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="默认值:" v-if="!['TableForm'].includes(form.type)">
        <el-input
          v-model="form.defaultValue"
          v-if="['Input'].includes(form.type)"
        ></el-input>
        <el-select
          style="width: 100%"
          v-if="['Select'].includes(form.type)"
          v-model="form.defaultValue"
          :multiple="form.multiple"
        >
          <el-option
            v-for="(item, index) in form.option"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-checkbox-group
          v-if="['Checkbox'].includes(form.type)"
          v-model="form.defaultValue"
          @change="changeMultiple"
          style="text-align: left"
        >
          <el-checkbox
            v-for="item in form.option"
            :label="item.value"
            :key="item.value"
            >{{ item.label }}</el-checkbox
          >
        </el-checkbox-group>
      </el-form-item>
      <div v-if="['Select', 'Checkbox'].includes(form.type)">
        <el-table :data="form.option" border size="mini">
          <el-table-column label="key">
            <template slot-scope="scope">
              <el-form :model="scope.row" size="mini">
                <el-form-item>
                  <el-input v-model="scope.row.label"></el-input>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="value">
            <template slot-scope="scope">
              <el-form :model="scope.row" size="mini">
                <el-form-item>
                  <el-input v-model="scope.row.value"></el-input>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="50" align="center">
            <template slot-scope="scope">
              <i
                class="el-icon-delete danger"
                title="删除"
                @click="dele(scope.row, scope.$index)"
              ></i>
            </template>
          </el-table-column>
        </el-table>
        <div style="text-align: left">
          <el-button size="mini" type="primary" @click="add"
            >添加选项</el-button
          >
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    formModel: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      form: {}
    }
  },
  methods: {
    changeMultiple(data) {
      console.log("change multiple-", data);
      // if (data) {
      //   this.form.defaultValue = this.form.defaultValue ? [this.form.defaultValue] : []
      // } else {
      //   this.form.defaultValue = ''
      // }
    },
    add() {
      this.form.addOption();
    },
    dele(row, index) {
      this.form.deleteOption(index);
    },
  },
  watch: {
    formModel: {
      handler: function(newVal) {
        console.log('watch---form', newVal)
        this.form = newVal
      },
      deep: true
    }
  }
};
</script>

<style></style>
