const app = getApp()

Page({
    data: {
      array: ['全部订单', '进行中订单', '已完成订单'],
      index: 0,
      item_list:[
        {
          status:0,
          school:"洋县中学",
          subject:"数学",
          salary:0,
          hours:0,
          begin:"1月1日",
          end:"1月1日",
          student:0,
        },
        {
          status:1,
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
      /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },
    onLoad: function(e) {
      wx.hideHomeButton();
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