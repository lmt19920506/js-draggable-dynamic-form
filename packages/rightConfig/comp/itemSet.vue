<template>
  <div>
    <el-form :model="form" label-width="80px" size="mini">
      <!-- 文本框 -->
      <!-- 下拉框 -->
      <!-- 多选 -->
      <!-- 表格 -->
      <el-form-item v-if="form && form.name" label="name:">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item v-if="form && form.model" label="model值">
        <el-input v-model="form.model"></el-input>
      </el-form-item>

      <el-form-item v-if="form && form.col" label="栅格数">
        <el-input-number
          v-model.number="form.col"
          class="w-100"
          :max="24"
          :min="1"
        ></el-input-number>
      </el-form-item>

      <el-form-item label="默认值:" v-if="!['TableForm', 'Upload', 'Editor'].includes(form.type) && form && form.defaultValue">
        <el-input
          v-model="form.defaultValue"
          v-if="['Input'].includes(form.type)"
        ></el-input>
        <el-select
          class="w-100"
          v-if="['Select', 'Radio', 'Switch'].includes(form.type)"
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

      <el-form-item
        v-if="['Input', 'Select', 'CheckBox'].includes(form.type)"
        label="禁用"
      >
        <el-switch v-model="form.disabled"></el-switch>
      </el-form-item>

      <el-form-item label="日期类型" v-if="form.type === 'DatePicker'">
        <el-select v-model="form.showType">
          <el-option
            v-for="item in form.typeSource"
            :key="item"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-row v-if="['Switch'].includes(form.type)">
        <el-form-item label="激活颜色">
          <el-color-picker v-model="formModel.activeColor"></el-color-picker>
        </el-form-item>
        <el-form-item label="停用颜色">
          <el-color-picker v-model="formModel.inactiveColor"></el-color-picker>
        </el-form-item>
      </el-row>

      <el-row v-if="['Slider'].includes(form.type)">
        <el-form-item label="最大值">
          <el-input-number
            :min="0"
            class="w-100"
            v-model="form.max"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="最小值">
          <el-input-number
            class="w-100"
            v-model="form.min"
          ></el-input-number>
        </el-form-item>
      </el-row>
      <!-- upload -->
      <el-row v-if="form.type === 'Upload'">
        <el-form-item label="上传地址">
          <el-input v-model="form.action"></el-input>
        </el-form-item>
        <el-form-item label="上传数量">
          <el-input-number :min="1" v-model="form.limit" style="width: 100%"></el-input-number>
        </el-form-item>
        <el-form-item label="文件name">
          <el-input v-model="form.uploadName"></el-input>
        </el-form-item>
        <!-- <el-form-item label="额外参数(json格式)">
          <el-input type="textarea" v-model="form.data"></el-input>
        </el-form-item> -->
        <el-form-item label="操作属性">
          <el-checkbox v-model="form.hidden">隐藏</el-checkbox>
          <el-checkbox v-model="form.disabled">禁用</el-checkbox>
          <el-checkbox v-model="form.multiple">多选</el-checkbox>
          <el-checkbox v-model="form.drag">允许拖拽</el-checkbox>
        </el-form-item>
      </el-row>

      <!-- 富文本 -->
      <el-row v-if="form.type === 'Editor'">
        <!-- <el-form-item label="默认值">
          <el-input type="textarea" v-model="form.defaultValue"></el-input>
        </el-form-item> -->
        <el-form-item label="高度">
          <el-input-number class="w-100" :min="100" v-model="form.options.height"></el-input-number>
        </el-form-item>
        <el-form-item label="占位内容">
          <el-input v-model="form.options.placeholder"></el-input>
        </el-form-item>
      </el-row>
      <div v-if="['Select', 'Checkbox', 'Radio'].includes(form.type)">
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
      form: {},
    };
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
      handler: function (newVal) {
        console.log("watch---form", newVal);
        this.form = newVal;
      },
      deep: true,
    },
  },
};
</script>

<style></style>
