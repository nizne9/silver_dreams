// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    password: ''
  },

  onInputId: function(e) {
    this.setData({
      id: e.detail.value 
    });
  },

  onInputPassword: function(e) {
    this.setData({
      password: e.detail.value 
    });
  },

  // 处理注册
  handleRegister() {
    wx.navigateTo({
      url: '/pages/register/register'
    });
  },

  // 处理登录
  handleLogin() {
    const { id, password } = this.data;
    // TODO: 添加身份证号和密码的验证逻辑
    if (!id || !password) {
      wx.showToast({
        title: '身份证号或密码不能为空',
        icon: 'none'
      });
      return;
    }

    // TODO: 添加发送登录请求的代码
    wx.showToast({
      title: '登录成功',
      icon: 'success'
    });
    // TODO: 登录成功后的处理，比如页面跳转
    console.log("登录信息：", id, password);
    wx.navigateTo({
      url: '/pages/teacher/teacher'
    });
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

  }
})