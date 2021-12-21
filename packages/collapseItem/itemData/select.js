import assembly from './assembly'

let num = 0
export default class MSelect extends assembly{
  constructor(
    name = "下拉",
    type = "Select",
    model = "Select_model_" + new Date().getTime(),
    defaultValue = 'two',
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
      value: 'one',
      label: '下拉1'
    }, {
      value: 'two',
      label: '下拉2'
    }, {
      value: 'three',
      label: '下拉3'
    }, {
      value: 'four',
      label: '下拉4'
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
    num++
    this.option.push({label: `新的选择_${num}`, value: `newValue_${num}`})
  }
}