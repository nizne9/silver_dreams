Component({
  properties: {
      idx: {
          type: Number,
          value: 0
      }
  },
  data: {
      tabBar: [
      {
        "current": 0,
        "pagePath": "/pages/highschool/highschool",
        "text": "订单管理",
        "iconClass":"icon-homefill",
        "iconTopClass":""
      },
      {
        "current": 0,
        "pagePath": "/pages/highschool_student/highschool_student",
        "text": "学生管理",
        "iconClass":"icon-add",
        "iconTopClass":""

      },
      {
        "current": 0,
        "pagePath": "/pages/highschool_home/highschool_home",
        "text": "学校信息",
        "iconClass":"icon-my",
        "iconTopClass":""
      },
    ]
  },
  observers: {
    "idx": function (id) {
      var otabbar = this.data.tabBar;
      otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
      otabbar[id]['current'] = 1;
      this.setData({ tabBar: otabbar});
    }
  },
  methods: {
    goToTab: function(e){
      var url = e.currentTarget.dataset.url
      wx.redirectTo({
        url:url
      })
    }
  }
});