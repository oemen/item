var ipt=document.getElementsByTagName('input')
var reg=/^(?:(?:\+|00)86)?1[3-9]\d{9}$/
var span=document.getElementsByClassName('error')
// 手机号验证/^(?:(?:\+|00)86)?1[3-9]\d{9}$/
// console.log($('input').eq(0).html);
    ipt[0].onblur=function(){
           if(!reg.test(ipt[0].value)){
                ipt[0].value=null
                span[0].style.display='block'
                return  alert('请输入正确的11位手机号')
        }else{
               span[0].style.display = 'none'
        }   
    }
$.get('http://192.168.31.110:3000/users/register', function (a) {
    console.log(a);
})
    // 判断验证码
ipt[1].onblur = function (){
    if (ipt[1].value!=7364){
         span[1].style.display = 'block'
       return alert('图片验证码输入错误')
    }else{
        span[1].style.display = 'none'
    }
}  
 // 获取随机验证码
var num = parseInt(Math.random()*10000)
console.log(num);
    suiji.onclick=function(){
        alert('您的验证码为：'+num+'(请在60秒之内输入)')
        ipt[4].onblur=function(){
            if(ipt[2].value!=num){
                alert('数字验证码输入有误')

            }
        }
    }
// 判断两次密码是否一致
ipt[6].onblur=function(){
    if(ipt[6].value!=ipt[5].value){
        alert('两次密码不一致')
        span[6].style.display = 'block'
    }else{
        span[6].style.display = 'none'
    }
}
  
