let phoneReg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;//11位手机号
let emailReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/; //邮箱
let idReg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[0-2])(([0-2][1-9])|10|20|30|31)\d{3}(\d|X|x)$/;  //18位从1900到2099年中间的范围验证

let FormValidate = (function () {
    function FormValidate () {}
    // From表单验证规则  可用于公用的校验部分
    FormValidate.Form = function () {
      return {
        // 手机号的验证规则
        validatePhone (rule, value, callback) {
            if(value){
                if (!phoneReg.test(value)) {
                    return callback(new Error('请输入正确的手机号'))
                  } else {
                    callback()
                  }
            }else{
                callback()
            }
          
        },
  
        // 邮箱的验证规则
        validateEmail (rule, value, callback) {
          if (value) {
            if (!emailReg.test(value)) {
                return callback(new Error('请输入正确的email地址'))
            } else {
              callback()
            }
          } else {
            callback()
          }
        },
  
  
  
        // 身份证的验证规则
        validateIdCard (rule, value, callback) {
            if(value){
                if (!idReg.test(value)) {
                    return callback(new Error('请输入正确的身份证号'))
                } else {
                  callback()
                }
            }else{
                callback()
            }
            
        },

    compareDate(startTime,endTime){
        var formatDate1 = new Date(startTime);
        var formatDate2 = new Date(endTime);
        if(formatDate1 > formatDate2){
            return '开始时间不能大于结束时间';
        }else
            {
                return '';
            }
        }


      }
    }
  
    return FormValidate
  }())
  
  exports.FormValidate = FormValidate;
