import assembly from './assembly'

export default class MDatePicker extends assembly {
  constructor(
    type = 'DatePicker',
    name = '日期选择',
    model = "DatePicker_model_" + new Date().getTime(),
    defaultValue = '',
    col = 24,
    key = "DatePicker" + '_' + new Date().getTime()
  ) {
    super(type, name, model, defaultValue, col, key)
    this.disabled = false
    this.clearable = false
    this.size = 'mini'
    this.showType = 'daterange'
    this.valueFormat = 'yyyy-MM-dd'
    this.rangePlaceholder = ["开始时间", "结束时间"]
    this.typeSource = ['year', 'month', 'date', 'dates', 'week', 'datetime', 'datetimerange', 'daterange', 'monthrange']
  }
}