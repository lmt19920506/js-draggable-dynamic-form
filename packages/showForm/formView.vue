<template>
  <div>
    <el-form
      ref="showForm"
      :model="form"
      :label-position="$attrs.formSets.labelPosition"
      :label-width="$attrs.formSets.labelWidth + 'px'"
    >
      <el-row :gutter="10">
        <el-col
          v-for="(item, index) in $attrs.data"
          :key="index"
          :span="item.col"
        >
            <div v-if="['TableForm'].indexOf(item.type) === -1" class="dialog_show_item_box">
              <el-form-item :label="item.name + ':'">
                <formItem :element="item" />
              </el-form-item>
            </div>
            <div v-if="item.type === 'TableForm'" class="dialog_show_item_box">
              <el-form-item :label="item.name">
                <showTableForm :data="item" />
              </el-form-item>
            </div>
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
  computed: {
    form() {
      let obj = {}
      this.$attrs.data.forEach(item => {
        obj[item.model] = item.defaultValue
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.dialog_show_item_box {
  background: rgba(233, 233, 233, 0.4);
  padding: 5px;
  margin-bottom: 5px;
}
</style>
