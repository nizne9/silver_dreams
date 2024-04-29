const app = getApp()

Page({
    data: {
      total: 2,
      item_list:[
        {
          school:"绍兴市柯桥区柯桥中学",
          subject:"数学",
          salary:500,
          hours:64,
          begin:"9月1日",
          end:"1月1日",
          student:40,
        },
        {
          school:"云南省保山第一中学",
          subject:"英语",
          salary:550,
          hours:64,
          begin:"3月1日",
          end:"7月1日",
          student:35,
        },
        {
          school:"杨村第一中学",
          subject:"数学",
          salary:400,
          hours:70,
          begin:"3月1日",
          end:"7月1日",
          student:44,
        },
        {
          school:"莒县文心高级中学",
          subject:"数学",
          salary:500,
          hours:64,
          begin:"9月1日",
          end:"12月31日",
          student:40,
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
    },
    
});