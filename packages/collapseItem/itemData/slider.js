import assembly from './assembly'

export default class TSlider extends assembly {
  constructor(
    name = "滑块",
    type = "Slider",
    model = "Slider_model_" + new Date().getTime(),
    defaultValue = 1,
    col = 24,
    key = "Slider" + '_' + new Date().getTime()
  ) {
    super(type, name, model, defaultValue, col, key)
    this.min = 0
    this.max = 10
    this.disabled = false
  }
  change() {
    
  }
}