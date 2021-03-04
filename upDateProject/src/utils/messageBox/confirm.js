import { MessageBox } from 'element-ui'

export function handleCofirm(text = '确定执行此操作吗？', type = 'warning',showCancelButton = true) {
    return MessageBox.confirm(text, '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      showCancelButton:showCancelButton,
      type: type,
      center: true
    })
  }