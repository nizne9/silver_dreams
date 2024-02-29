const app = getApp()

Page({
    data: {
      
    },
    onShow: function() {
    },

    onLoad: function(e) {
      wx.hideHomeButton();
      var t = this
      app.getMainAreaHeight(t).then(res => {
        t.setData({
          mainHeight: 'height:-webkit-calc(100vh - ' + res +'px);height: calc(100vh - ' + res +'px);'
        })
      })
    },
    manageclass:function(){
      wx.navigateTo({
        url: '/pages/class0/class0',
      })
    }
});