// pages/student/student.js
Page({
  data: {
    ongoing_courses:[
      {
        status:1,
        teacher:"李老师",
        teacherAvatarUrl:"https://avatars.githubusercontent.com/u/97940276?v=4",
        school:"北邮",
        subject:"操作系统",
        salary:500,
        hours:64,
        begin:"1月1日",
        end:"6月1日",
        student:40,
      },
      {
        status:1,
        teacher:" 田所老师",
        teacherAvatarUrl:"https://avatars.githubusercontent.com/u/97940276?v=4",
        school:"下北泽高中",
        subject:"哲学",
        salary:500,
        hours:64,
        begin:"1月14日",
        end:"5月14日",
        student:40,
      },
    ],
    completed_courses:[
      {
        status:0,
        teacher:"梁老师",
        avatar_url:"https://avatars.githubusercontent.com/u/97940276?v=4",
        school:"洋县中学",
        subject:"数学",
        salary:0,
        hours:0,
        begin:"1月1日",
        end:"1月1日",
        student:0,
      }
    ],
  },
  viewProgress: function (e) {
    // TODO: 查看进度的逻辑
  },
  evaluateCourse: function (e) {
    // TODO: 评价课程的逻辑
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