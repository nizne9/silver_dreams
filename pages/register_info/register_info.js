// pages/register_info/register_info.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    identity: '',
    phone_num: '',
    code: '',
    id: '',
    password: '',
    confirm_psw: '',
    invitation_code: '',
    school_name: '',
    teacher_title: '',
    teacher_certificate: '',
  },

  onInput: function (e) {
    const field = e.currentTarget.dataset.field;
    this.setData({
      [field]: e.detail.value
    });
  },

  // 注册
  submitForm() {
    const form_data = this.data;
    const identity = this.data.identity
    // TODO: 添加验证逻辑
    const fields_empty = Object.keys(form_data).some(key => {
      // 对于非学生或学校负责人身份，跳过邀请码的检查
      if (identity !== 'student' && identity !== 'school_admin' && key === 'invitation_code') {
        return false;
      }
      return !form_data[key];
    });

    if (fields_empty) {
      wx.showToast({
        title: '请填写所有必填项',
        icon: 'none'
      });
      return;
    }

    if (this.data.password !== this.data.confirm_psw) {
      wx.showToast({
        title: '两次输入的密码不一致！',
        icon: 'none'
      });
      return;
    }

    // TODO: 添加发送注册请求的代码
    wx.showToast({
      title: '注册成功',
      icon: 'success',
      success: wx.navigateTo({
        url: '/pages/login/login'
      })
    });
    console.log("注册信息：", form_data);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (options.identity) {
      this.setData({
        identity: options.identity
      });
    }
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