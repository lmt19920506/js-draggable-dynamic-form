import assembly from './assembly'

export default class MSelect extends assembly{
  constructor(
    name = "下拉",
    type = "Select",
    model = "Select_model_" + new Date().getTime(),
    defaultValue = 'Shanghai',
    col = 24,
    key = "Select" + '_' + new Date().getTime()
  ) {
    super(type, name, model, defaultValue, col, key)
    this.showFrom = ['name', 'col', 'key','multiple','collapsetags','placeholder',
      'clearable','disabled','filterable','allowcreate','datatype','option','url'
    ]
    this.multiple = false
    this.collapsetags = false
    this.disabled = false
    this.filterable = false
    this.allowcreate = false
    this.placeholder = '请输入' + this.name
    this.clearable = true
    // 数据类型 option 和 url
    this.datatype = 'option'
    // 请求接口
    this.url = ''
    // 下拉框的选项
    this.option = [{
      value: 'Beijing',
      label: '北京'
    }, {
      value: 'Shanghai',
      label: '上海'
    }, {
      value: 'Tianjin',
      label: '天津'
    }, {
      value: 'ChongQing',
      label: '重庆'
    }]
    // 校验
    this.rules = [
      { required: false, message: '请输入' + this.name , trigger: 'change' },
    ]
  }

  deleteOption (index) {
    this.option.splice(index, 1)
  }
  addOption () {
    this.option.push({label: '新的选择', value: 'newValue'})
  }
}