import assembly from './assembly'
import MInput from './input'
export default class MTableForm extends assembly{
  constructor(
    type = 'TableForm',
    name = '表格',
    model = 'TableForm_' + new Date().getTime(),
    defaultValue = '', 
    col = 24,
    key = 'TableForm_' + new Date().getTime()
  ) {
    super(type, name, model, defaultValue, col, key)
    this.addForm = ['name', 'col', 'key', 'border', 'stripe']

    this.border = true
    this.stripe = false

    // 表格的校验在内部的组件中
    this.rules = []
    // 表格数据
    this.tableData = []
    // 表单表头
    this.column = [new MInput()]
    // { key: 'name', type: 'input',label: '名称', rules:[{ required: true, message: '名称不能为空', trigger: 'change'}] },
    // { key: 'name2', type: 'input',label: '名称2', rules:[{ required: true, message: '名称不能为空', trigger: 'change'}] },
  }
  addColumn(data) {
    this.column.push(data)
  }

  deleColumn(id) {
    this.column = this.column.filter(item => item.id !== id)
  }
}