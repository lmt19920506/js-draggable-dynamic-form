<template>
  <div>
    <el-form ref="showForm">
      <el-row :gutter="10">
        <el-col
          v-for="(item, index) in $attrs.data"
          :key="index"
          :col="item.col"
        >
          <template v-if="['tableForm'].indexOf(item.type) === -1">
            <el-form-item :label="item.name">
              <formItem :element="item" style="margin-top: 20px" />
            </el-form-item>
          </template>
          <template v-if="item.type === 'TableForm'">
            <el-form-item :label="item.name">
              <showTableForm :data="item" />
            </el-form-item>
          </template>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import formItem from "../formItem/index";
import showTableForm from "../tableForm/showTableForm";
export default {
  name: "FormView",
  components: { formItem, showTableForm },
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    console.log("attrs---", this.$attrs);
  },
};
</script>

<style></style>
