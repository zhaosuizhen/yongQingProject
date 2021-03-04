//质检办---农产品农残检测情况信息表 接口
import request from '@/utils/request'

// 农产品农残检测情况信息表分页
export function  qualityProductCheckSelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-check/selectListByPage',
      data
    })
  }

  //农产品农残检测情况信息表 删除
  export function  qualityProductCheckDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-check/delete',
      data
    })
  }

  
  //农产品农残检测情况信息表 审核
  export function  qualityProductCheckAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-check/audit',
      data,
      params
    })
  }

    //农产品农残检测情况信息表 详情
    export function  qualityProductCheckDetail(params) {
      return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/product-check/detail',
        params
      })
    }

  //农产品农残检测情况信息表 编辑
  export function  qualityProductCheckUpdate(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-check/update',
      data
    })
  }
    //农产品农残检测情况信息表 编辑
    export function  qualityProductCheckInsert(data) {
      return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/product-check/insert',
        data
      })
    }