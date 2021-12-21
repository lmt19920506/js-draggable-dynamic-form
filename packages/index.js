// 导入样式
// import './style/var.scss'

import FormDesign from './formDesign/index.vue'
import FormView from './showForm/formView.vue'
import FormItem from './formItem/index.vue'


// 以数组得结构保存组件，便于遍历
const components = [FormDesign, FormView, FormItem]

// 定义install方法
const install = function(Vue) {
  if (install.installed) return
  install.installed = true
  // 遍历并注册全局组件
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具备一个install方法
  install,
  // 组件列表
  ...components
}