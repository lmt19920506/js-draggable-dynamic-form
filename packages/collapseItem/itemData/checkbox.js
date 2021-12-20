import assembly from './assembly'

export default class MCheckbox extends assembly{
  constructor(
    type = "Checkbox",
    name = "多选",
    model = "Checkbox_model_" + new Date().getTime(),
    defaultValue = ['Tianjin'],
    col = 24,
    key = "Checkbox" + '_' + new Date().getTime()
  ) {
    super(type, name, model, defaultValue, col, key)
    this.showFrom = ['name', 'col', 'key',
      'disabled','checkboxtype','datatype','option','url','min','max'
    ]

    // button
    this.checkboxtype = 'fang'
    this.disabled = false
    this.min = 0
    this.max = 2

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

  addOption() {
    this.option.push({label: '新选项', value: 'newVal'})
  }

  deleteOption(index) {
    this.option.splice(index, 1)
  }
}