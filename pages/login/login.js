// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    testAccounts: [{
        id: 'student-test',
        password: '114514',
        type: 'student'
      },
      {
        id: 'teacher-test',
        password: '114514',
        type: 'teacher'
      },
      {
        id: 'highschool-test',
        password: '114514',
        type: 'highschool'
      },
    ],
    id: '',
    password: ''
  },

  onInputId: function (e) {
    this.setData({
      id: e.detail.value
    });
  },

  onInputPassword: function (e) {
    this.setData({
      password: e.detail.value
    });
  },

  // 处理注册
  handleRegister() {
    wx.navigateTo({
      url: '/pages/register_select/register_select'
    });
  },

  // 处理登录
  handleLogin() {
    const {
      testAccounts,
      id,
      password
    } = this.data;
    // TODO: 添加身份证号和密码的验证逻辑
    if (!id || !password) {
      wx.showToast({
        title: '身份证号或密码不能为空',
        icon: 'none'
      });
      return;
    }

    // TODO: 添加发送登录请求的代码
    // TODO: 替换为实际登录逻辑
    const accountInfo = testAccounts.find(account => account.id === id && account.password === password);
    if (accountInfo) {
      const type = accountInfo.type;
      // 根据 type 跳转到相应的页面
      if (type === 'teacher') {
        wx.showToast({
          title: '登录成功',
          icon: 'success',
          success: wx.redirectTo({
            url: '/pages/teacher/teacher'
          })
        });
      } else if (type === 'student') {
        wx.showToast({
          title: '登录成功',
          icon: 'success',
          success: wx.redirectTo({
            url: '/pages/student/student'
          })
        });
      } else if (type === 'highschool') {
        wx.showToast({
          title: '登录成功',
          icon: 'success',
          success: wx.redirectTo({
            url: '/pages/highschool/highschool'
          })
        });
      } else {
        // 未知类型，提示错误信息
        wx.showToast({
          title: '登录失败，账号类型错误',
          icon: 'none'
        });
      }
    } else {
      // 登录失败，提示错误信息
      wx.showToast({
        title: '登录失败，请检查账号和密码',
        icon: 'none'
      });
    }
    console.log("登录信息：", id, password);
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