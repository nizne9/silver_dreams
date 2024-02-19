// components/order/order.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    school:{
      type:String,
      value:"洋县中学",
    },
    subject:{
      type:String,
      value:"数学",
    },
    salary:{
      type:Number,
      value:0,
    },
    hours:{
      type:Number,
      value:0,
    },
    begin:{
      type:String,
      value:"1月1日",
    },
    end:{
      type:String,
      value:"1月1日",
    },
    student:{
      type:Number,
      value:0,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },
  observers:{
    "school": function (id) {
    this.setData({ school: id});
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})