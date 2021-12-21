import assembly from './assembly'

export default class MInput extends assembly {
  constructor(
    type = 'Input',
    name = "文本框",
    model = 'Input_model' + '_' + new Date().getTime(),
    defaultValue = '',
    col = 24,
    key = 'Input' + '_' + new Date().getTime()
  ) {
    super(type, name, model, defaultValue, col, key)
    this.showFrom = ['name', 'col', 'key','minlength','maxlength','showwordlimit','placeholder',
      'clearable','showpassword','disabled','prefixicon','suffixicon','prepend','append'
    ]
    this.minlength = 0
    this.maxlength = 100
    this.placeholder = '请输入' + this.name
    this.showpassword = false
    this.disabled = false
    this.prefixicon = 'el-icon-edit'
    this.suffixicon = ''
    this.prepend = ''
    this.append = ''
    // 校验
    this.rules = [
      {required: false, message: '请输入' + this.name, trigger: 'change'}
    ]
  }
  deleteRules(index) {
    this.rules.splice(index, 1)
  }
  addRules(data) {
    this.rules.push(data)
  }

}