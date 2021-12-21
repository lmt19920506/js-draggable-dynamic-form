import assembly from './assembly'
let num = 0
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
      label: 'checkbox_01'
    }, {
      value: 'checkbox_02',
      label: '多选2'
    }, {
      value: 'checkbox_03',
      label: '多选3'
    }, {
      value: 'checkbox_04',
      label: '多选4'
    }]
    // 校验
    this.rules = [
      { required: false, message: '请输入' + this.name , trigger: 'change' },
    ]
  }

  addOption() {
    num++
    this.option.push({label: `新选项_${num}`, value: `newVal_${num}`})
  }

  deleteOption(index) {
    this.option.splice(index, 1)
  }
}