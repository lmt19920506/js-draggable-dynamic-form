import assembly from "./assembly";

export default class TSwitch extends assembly {
  constructor(
    name = "开关",
    type = "Switch",
    model = "Switch_model_" + new Date().getTime(),
    defaultValue = false,
    col = 24,
    key = "Switch" + "_" + new Date().getTime()
  ) {
    super(type, name, model, defaultValue, col, key);
    this.disabled = false
    this.option = [
      {label: '开', value: true},
      {label: '关', value: false}
    ]
    this.activeColor = '#13ce66'
    this.inactiveColor = '#ff4949'
  }
}
