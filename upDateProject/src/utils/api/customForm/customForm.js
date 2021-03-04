//自定义表单 接口
import request from '@/utils/request'


// 自定义表单分页
export function customFormSelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/custom-columns/getCustomTablePage',
      data
    })
  }
  
  //自定义表单 删除
  export function  customFormDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/custom-columns/deleteTableColumns',
      data
    })
  }
//自定义表单 审核
export function  customFormAudit(data,params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/custom-columns/audit',
    data,
    params
  })
}

//自定义表单 详情
export function  customFormDetail(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/custom-columns/selectTableColumns',
    data
  })
}

//自定义表单 编辑
export function  customFormUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/custom-columns/insertListTableColumns',
    data
  })
}

//更新模板
export function  updateTemplate(data) {
  return request({
    
    method: 'POST',
    url: '/bigdata_update_nanxian/custom-columns/generateExcle',
    data
  })
}

//下载模板
export function  downLoadTemplate(params) {
  return request({
    responseType: 'blob',
    method: 'GET',
    url: '/bigdata_update_nanxian/custom-columns/exportExcel',
    params
  })
}

//通用导入模板
export function  inputExcelTable(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/custom-columns/inputExcelTableColumns',
    data
  })
}
