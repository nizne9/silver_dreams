const app = getApp()

Page({
    data: {
      total: 2,
      item_list:[
        {
          school:"洋县中学",
          subject:"数学",
          salary:0,
          hours:0,
          begin:"1月1日",
          end:"1月1日",
          student:0,
        },
        {
          school:"北邮",
          subject:"操作系统",
          salary:500,
          hours:64,
          begin:"1月1日",
          end:"6月1日",
          student:40,
        },
      ],
      
    },
    onShow: function() {
      wx.hideHomeButton();
    },

    onLoad: function(e) {
      var t = this
      app.getMainAreaHeight(t).then(res => {
        t.setData({
          mainHeight: 'height:-webkit-calc(100vh - ' + res +'px);height: calc(100vh - ' + res +'px);'
        })
      })
    },
    gotoPage: function(){ 
      console.log('bindtap触发了')
      wx.navigateTo({ url: '/pages/order_detil/order_detil'}) 
    }
});