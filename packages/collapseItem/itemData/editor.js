import assembly from './assembly'

export default class Editor extends assembly {
  constructor(
    type = 'Editor',
    name = '富文本',
    model = "Editor_model_" + new Date().getTime(),
    defaultValue = '',
    col = 24,
    key = "Editor" + '_' + new Date().getTime()
  ) {
    super(type, name, model, defaultValue, col, key)
    this.options = {
      height: 200,
      placeholder: '请输入富文本内容'
    }
  }
}