// pages/add_order/add_order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subject_list:["语文", "数学", "英语", "物理", "化学", "生物", "历史", "政治", "地理"],
    subject_index:0,
    class_list:[],
    class_index:0,
    begin_date:'2016-09-01',
    end_date:'2016-09-01',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  bindPickerChange: function (e) {
    this.setData({
      subject_index: e.detail.value
    })
  },
  bindbeginDateChange: function (e) {
    this.setData({
      begin_date: e.detail.value
    })
  },
  bindendDateChange: function (e) {
    this.setData({
      end_date: e.detail.value
    })
  },
})