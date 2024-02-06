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
          "pagePath": "/pages/teacher/teacher",
          "text": "首页",
          "iconClass":"icon-homefill",
          "iconTopClass":""
        },
        {
          "current": 0,
          "pagePath": "/pages/teacher_order/teacher_order",
          "text": "订单",
          "iconClass":"icon-add",
          "iconTopClass":""

        },
        {
          "current": 0,
          "pagePath": "/pages/teacher_home/teacher_home",
          "text": "主页",
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
        wx.navigateTo({
          url:url
        })
      }
    }
});