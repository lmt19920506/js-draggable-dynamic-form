export default class assembly {
  constructor(type, name, model, defaultValue, col, key) {
    console.log('assembly---type---', type)
    this.id = type + '_' + new Date().getTime()
    this.type = type
    this.name = name
    this.model = model
    this.defaultValue = defaultValue
    this.col = col
    this.key = key
  }
}