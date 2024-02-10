const app = getApp()

Page({
    data: {
      title:"分包 - 首页",
      showTip: !1
    },
    onShow: function() {
    },
      /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },
    onLoad: function(e) {
      var t = this
      app.getMainAreaHeight(t).then(res => {
        t.setData({
          mainHeight: 'height:-webkit-calc(100vh - ' + res +'px);height: calc(100vh - ' + res +'px);'
        })
      })
      e.showTip && this.setData({
        showTip: e.showTip == 1 ? !0 : !1
      })
    }
});