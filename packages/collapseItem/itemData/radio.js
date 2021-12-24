import assembly from './assembly'
let num = 0

export default class MRadio extends assembly {
  constructor(
    name = "单选",
    type = "Radio",
    model = "Radio_model_" + new Date().getTime(),
    defaultValue = '',
    col = 24,
    key = "Radio" + '_' + new Date().getTime()
  ) {
    super(type, name, model, defaultValue, col, key)
    this.disabled = false
    this.border = true
    this.size = 'mini'
    this.option = [
      {label: '单选1', value: 'a'},
      {label: '单选2', value: 'b'},
      {label: '单选3', value: 'c'},
      {label: '单选4', value: 'd'},
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