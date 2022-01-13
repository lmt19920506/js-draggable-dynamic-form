import assembly from './assembly'

export default class Upload extends assembly {
  constructor(
    name = "上传",
    type = "Upload",
    model = "Upload_model_" + new Date().getTime(),
    defaultValue = 'a',
    col = 24,
    key = "Upload" + '_' + new Date().getTime()
  ) {
    super(type, name, model, defaultValue, col, key)
    // 必选参数，上传的地址
    this.action = 'https://jsonplaceholder.typicode.com/posts/'
    this.headers = {} // 设置上传的请求头部
    this.multiple = false  // 是否支持多选
    this.data = {}  // 上传时附带的额外参数
    this.uploadName = ''  // 上传的文件字段明
    this.fileList = []  // 上传文件的列表
    this.showFileList = true  // 是否显示已上传文件列表
    this.drag = false  // 是否启用拖拽上传
    this.limit = 3  // 最大允许上传个数
    this.hidden = false
    this.disabled = false
  }
}