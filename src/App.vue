<template>
  <div id="shucheng">
  <!-- 头部开始 -->
    <div class="top">
      <div class="top1">
        <div class="top1_one">
          <p>
            <a title="登录" href="html/user/login.html" class="top-f1"><span>登录&nbsp;</span></a>
            <a title="免费注册" href="#" class="top-f1"><span>&nbsp;免费注册&nbsp;&nbsp;</span></a>
            <a title="下载博库APP" href="#" class="top-f1"><span>&nbsp;&nbsp;&nbsp;&nbsp;<img src="@/assets/icon/phone.png" class="top-one-img"/>&nbsp;下载博库APP</span></a>
          </p>
          <p class="fr">
            <a title="联系客服" href="#" class="top-f1"><span>|&nbsp;&nbsp;联系客服</span></a>
            <a title="店铺管理" href="#" class="top-f1"><span>|&nbsp;&nbsp;店铺管理&nbsp;&nbsp;</span></a>
            <a title="收藏夹" href="#" class="top-f1"><span>&nbsp;&nbsp;|&nbsp;&nbsp;收藏夹&nbsp;&nbsp;</span></a>
          </p>
          <div>
            <el-select v-model="value4" clearable placeholder="我的博库" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="top2">
        <div class="top2_one">
          <div>
            <a href="">
              <img src="https://bnmpstyle.bookuu.com/www/images/icon/logo.png" alt="" class="db" draggable="false" width="220">
            </a>
            <div class="fl">
              <div class="fl_top">
                <el-input placeholder="余华" v-model="input5" class="input-with-select" size="middle" width="300">
                  <el-button slot="append" icon="el-icon-search"></el-button> 
                </el-input>
                <p>
                  <a target="_blank" class="cl-rd-l aaa" href="/search.php?k=茅台酒收藏" title="茅台酒收藏">茅台酒收藏</a>
                  <span class="cl-9 pd-0005">|</span>
                  <a target="_blank" class="cl-9" href="/search.php?k=夏摩山谷" title="夏摩山谷">夏摩山谷</a>
                  <span class="cl-9 pd-0005">|</span>
                  <a target="_blank" class="cl-9" href="/search.php?k=崔永元 有话说" title="崔永元 有话说">崔永元 有话说</a>
                  <span class="cl-9 pd-0005">|</span>
                  <a target="_blank" class="cl-9" href="/search.php?k=林清玄" title="林清玄">林清玄</a>
                  <span class="cl-9 pd-0005">|</span>
                  <a target="_blank" class="cl-9" href="/search.php?k=邓小平大决策" title="邓小平大决策">邓小平大决策</a>
                </p>
              </div>
              <div class="bottom">

              </div>
            </div>
            <div class="shopcar">
              <span>
                <a href="">
                  <img src="@/assets/icon/cart.png" alt="">
                </a>
              </span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div class="top3">
        <div class="one">
          <el-select v-model="value" placeholder="请选择" size="mini" width="200px">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="two">
          <a href="">首页</a>
          <a href="">新品</a>
          <a href="">限时购</a>
          <a href="">排行榜</a>
          <a href="">图书馆</a>
          <a href="">文创馆</a>
          <a href="">生活美学馆</a>
        </div>
      </div>
    </div>
    <!-- 头部结束 -->
    <!-- 轮播图开始 -->
    <div class="block">
      <el-carousel height="400px">
        <el-carousel-item>
          <img src="@/assets/1.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/assets/2.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/assets/3.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/assets/4.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/assets/5.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/assets/6.jpg" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 轮播图结束 -->
    <!-- 正品保证开始 -->
    <div class="zhengpin">
      <img src="@/assets/icon/zheng.png" alt="">
      <label for="">
        <span>正品保证</span>
      </label>
      <img src="@/assets/icon/tui.png" alt="">
      <label for="">
        <span>七天无理由退换货</span>
      </label>
      <img src="@/assets/icon/you.png" alt="">
      <label for="">
        <span>全场满59包邮</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      options: [{
        value: '选项1',
        label: '我的订单'
      }, {
        value: '选项2',
        label: '我的优惠券'
      }, {
        value: '选项3',
        label: '我的收藏'
      }, {
        value: '选项4',
        label: '我的收入'
      }, {
        value: '选项5',
        label: '官方消息'
      }],
      value4: '',
      // 搜索框
      input3: '',
      input4: '',
      input5: '',
      select: '',
      // 下拉框
      options1: [{
        value: '选项1',
        label: '文学艺术'
      }, {
        value: '选项2',
        label: '少儿童书'
      }, {
        value: '选项3',
        label: '经典励志'
      }, {
        value: '选项4',
        label: '生活时尚'
      }, {
        value: '选项5',
        label: '科技教育'
      }],
      value: '',
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
  .shucheng{
    font-family: "微软雅黑", "黑体", "Microsoft YaHei", "SimSun", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #212121;
  }
  *{
    margin: 0;
    padding: 0
  }
  /*头部样式开始*/
  .top{
    background-color: #fff;
    height: 190px;
    border-bottom: 2px #3ab5e6 solid;
    position: relative;
    z-index: 102;
  }
  .top > .top1{
    line-height: 40px;
    background-color: #f5f5f5;
    overflow: hidden;
  }
  .top1 > .top1_one{
    font-size: 12px;
    color: #666;
    margin: 0 auto;
    width: 1200px
  }
  .top1 > .top1_one p:first-child{
    float: left;
  }
  .top1 > .top1_one p:first-child a{
    color: #666;
    margin:0 2px
  }
  .top1 > .top1_one p:first-child a span{
    color: #ccc;
    padding: 0 5px
  }
  .top1 > .top1_one .fr{
    float: right;
  }
  .top1 > .top1_one .fr a{
    color: #666;
    float: right;
  }
  .top1 > .top1_one .fr a span{
    padding: 0 15px;
    /* float: right; */
    color: #ccc
  }
  .top1 > .top1_one div{
    position: relative;
    float: right
  }
  .top2{
    width: 1200px;
    margin: 0 auto;
    margin-top: 20px
  }
  .top2 .top2_one div a{
    display: inline-block
  }
  .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .el-input-group{
    width: 400px;
    margin-left: 100px
  }
  .top2 .fl{
    display: inline-block
  }
  .top2 .fl .fl_top p{
    line-height: 25px;
    font-size: 12px;
    margin-left: 94px
  }
  .top2 .fl .fl_top p .aaa{
    color: #e4393c;
    cursor: pointer;
  }
  .top2 .fl .fl_top p span{
    color: #999;
    padding: 0 5px;
  }
  .top2 .top2_one div .shopcar{
    float: right;
    margin-left: 60px;
    margin-top: 10px
  }
  .top3{
    overflow: hidden;
    margin-top: 20px
  }
  .top3 .one{
    margin-left: 400px;
    float: left;
    margin-top: 10px
  }
  .top3 .two{
    float: left;
    line-height: 40px;
    padding-left: 90px;
    font-size: 16px;
    margin-top: 5px
  }
  .top3 .two a{
    padding: 0 15px;
    float: left;
    color: #212121;
    cursor: pointer;
  }
  /*头部样式结束*/
  /* 轮播图开始 */
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  /* 轮播图结束 */
  /* 正品保证 */
  .zhengpin{
    line-height: 40px;
    width: 1240px;
    margin: 0 auto;
    overflow: hidden;
  }
  .zhengpin *{
    float: left;
  }
  .zhengpin label{
    margin-right: 60px
  }
  .zhengpin img{
    margin-right: 5px;
    margin-top: 8px
  }
</style>
