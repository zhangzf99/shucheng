<template>
  <div id="shucheng">
  <!-- 头部开始 -->
    <div class="top">
      <div class="top-one">
        <a title="登录" href="html/user/login.html" class="top-f1"><span>登录&nbsp;|</span></a>
        <a title="免费注册" href="#" class="top-f1"><span>&nbsp;免费注册&nbsp;&nbsp;</span></a>
        <a title="下载博库APP" href="#" class="top-f1"><span>&nbsp;&nbsp;&nbsp;&nbsp;<img src="@/assets/icon/phone.png" class="top-one-img"/>&nbsp;下载博库APP</span></a>
      </div>
      <div class="top-two">
        <select name="我的博库" class="top-select">
            <a><option>我的订单</option></a>
            <a><option>我的购物车</option></a>
            <a><option>我的资料信息</option></a>
            <a><option>官方消息</option></a>
        </select>
        <a title="收藏夹" href="#" class="top-f1"><span>&nbsp;&nbsp;|&nbsp;&nbsp;收藏夹&nbsp;&nbsp;</span></a>
        <a title="店铺管理" href="#" class="top-f1"><span>|&nbsp;&nbsp;店铺管理&nbsp;&nbsp;</span></a>
        <a title="联系客服" href="#" class="top-f1"><span>|&nbsp;&nbsp;联系客服</span></a>
      </div>
    </div>
    <!-- 头部结束 -->
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },

}
</script>

<style>
  div,ul,li,a{
    padding: 0;
    margin: 0
  }
  a{
    text-decoration: none;
    color: #ccc
  }
  /*头部样式开始*/
  .top > .top-one{
    float: left;
  }
  /*头部样式结束*/
</style>
