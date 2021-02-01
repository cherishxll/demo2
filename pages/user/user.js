Page({
  data: {},
  onLoad() {},
  jump:function(){
     my.navigateTo({
       url: '/pages/user/coupon/coupon',
       success: (result)=>{
         
       },
       fail: ()=>{},
       complete: ()=>{}
     });
  }
});
