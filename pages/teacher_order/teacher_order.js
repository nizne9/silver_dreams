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
          salary:390,
          hours:100,
          begin:"9月1日",
          end:"1月1日",
          student:28,
        },
        {
          status:1,
          school:"静海第一中学",
          subject:"数学",
          salary:500,
          hours:64,
          begin:"3月1日",
          end:"7月1日",
          student:36,
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