// pages/new_page/new.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectorItems:['身份证','回乡证','护照','军官证','台胞证','港澳居民身份证','台湾居民身份证']
  },

  selectorChange:function(e){
    let i=e.detail.value;   //获取选项数组下标
    let value=this.data.selectorItems[i];   //选项的值
    this.setData({selector:value});         //更新所选名称
  },

  onSubmit:function(e){
    console.log(e.detail.value);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})