<template>
  <div id="shucheng">
  <!-- 头部开始 -->
    <div class="top">
      <div class="top1">
        <div class="top1_one">
          <p>
            <!-- <a title="登录" href="html/user/login.html" class="top-f1"><span>登录&nbsp;</span></a> -->
            <router-link to='/dengluye'><a title="登录" class="top-f1"><span>登录&nbsp;</span></a></router-link>
            <a title="免费注册" href="#" class="top-f1"><span>&nbsp;免费注册&nbsp;&nbsp;</span></a>
            <a title="下载博库APP" href="#" class="top-f1"><span>&nbsp;&nbsp;&nbsp;&nbsp;<img src="@/assets/icon/phone.png" class="top-one-img"/>&nbsp;下载博库APP</span></a>
          </p>
          <p class="fr">
            <a title="联系客服" href="#" class="top-f1"><span>|&nbsp;&nbsp;联系客服</span></a>
            <a title="店铺管理" href="#" class="top-f1"><span>|&nbsp;&nbsp;店铺管理&nbsp;&nbsp;</span></a>
            <a title="收藏夹" href="#" class="top-f1"><span>&nbsp;&nbsp;|&nbsp;&nbsp;收藏夹&nbsp;&nbsp;</span></a>
          </p>
          <div class="xiala">
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
    <!-- 限时抢购开始 -->
    <div class="xinshiqianggou">
      <div class="top">
        <p>
            <img src="https://bnmpstyle.bookuu.com/www/images/icon/flashsale.png" alt="限时抢购" height="25" class="mt-10 visible">
        </p>
        <a href="">总有你想不到的低价</a>
        <!-- <p class="one">后结束抢购</p>
        <p>当前场次</p> -->
      </div>
      <div class="bottom">
          <ul>
              <router-link to="/detailPages">
                <li>
                  <div class="outer">
                      <div class="outer-top">
                          <a href=""></a>
                      </div>
                      <div class="outer-bottom">
                          <a href="">读唐诗</a>
                          <p>
                              <span>¥51.04</span>
                              <span>|</span>
                              <del>¥88.00</del>
                          </p>
                      </div>
                  </div>
               </li>
              </router-link>
              <li>
                  <div class="outer">
                      <div class="outer-top">
                          <a href=""></a>
                      </div>
                      <div class="outer-bottom">
                          <a href="">读唐诗</a>
                          <p>
                              <span>¥51.04</span>
                              <span>|</span>
                              <del>¥88.00</del>
                          </p>
                      </div>
                  </div>
              </li>
              <li>
                  <div class="outer">
                      <div class="outer-top">
                          <a href=""></a>
                      </div>
                      <div class="outer-bottom">
                          <a href="">读唐诗</a>
                          <p>
                              <span>¥51.04</span>
                              <span>|</span>
                              <del>¥88.00</del>
                          </p>
                      </div>
                  </div>
              </li>
              <li>
                  <div class="outer">
                      <div class="outer-top">
                          <a href=""></a>
                      </div>
                      <div class="outer-bottom">
                          <a href="">读唐诗</a>
                          <p>
                              <span>¥51.04</span>
                              <span>|</span>
                              <del>¥88.00</del>
                          </p>
                      </div>
                  </div>
              </li>
              <li>
                  <div class="outer">
                      <div class="outer-top">
                          <a href=""></a>
                      </div>
                      <div class="outer-bottom">
                          <a href="">读唐诗</a>
                          <p>
                              <span>¥51.04</span>
                              <span>|</span>
                              <del>¥88.00</del>
                          </p>
                      </div>
                  </div>
              </li>
              <li>
                  <div class="outer">
                      <div class="outer-top">
                          <a href=""></a>
                      </div>
                      <div class="outer-bottom">
                          <a href="">读唐诗</a>
                          <p>
                              <span>¥51.04</span>
                              <span>|</span>
                              <del>¥88.00</del>
                          </p>
                      </div>
                  </div>
              </li>
          </ul>
      </div>
    </div>
    <!-- 限时抢购结束 -->
    <!-- 重磅推荐开始 -->
    <div class="one">
        <div class="center-div">
            <div class="zhongb">
                <span>重磅推荐</span>&nbsp;博库精选推荐
            </div>
            <ul class="menu">
              <li class="center-li" style="margin:5px 10px 5px 6px">
                  <div>
                      <img src="@/assets/center-img/zhongbang1.jpg">
                  </div>
              </li>
              <li class="center-li" style="margin:5px 5px 5px 0px">
                  <div>
                      <img src="@/assets/center-img/zhongbang2.jpg">
                  </div>
              </li>
              <li class="center-li" style="margin:0px 10px 5px 6px">
                  <div>
                      <img src="@/assets/center-img/zhongbang3.jpg">
                  </div>
              </li>
              <li class="center-li" style="margin:0px 5px 5px 0px">
                  <div>
                      <img src="@/assets/center-img/zhongbang4.jpg">
                  </div>
              </li>
              <li class="center-li" style="margin:0px 10px 5px 6px">
                  <div>
                      <img src="@/assets/center-img/zhongbang5.jpg">
                  </div>
              </li>
              <li class="center-li" style="margin:0px 5px 5px 0px">
                  <div>
                      <img src="@/assets/center-img/zhongbang6.jpg" style="width:189.83px;height:86.28px">
                  </div>
              </li>
            </ul>
        </div>
        <div class="center-div">
            <div>
                <div class="xinsu">
                    <span>新品速递</span>&nbsp;发现品质生活
                </div>
            </div>
            <ul class="menu">
                <li class="center-li" style="margin:5px 10px 5px 6px">
                    <div >
                        <img src="@/assets/center-img/xinsu1.jpg">
                    </div>
                </li>
                <li class="center-li" style="margin:5px 5px 5px 0px">
                    <div>
                        <img src="@/assets/center-img/xinsu2.jpg">
                    </div>
                </li>
                <li class="center-li" style="margin:0px 10px 5px 6px">
                    <div>
                        <img src="@/assets/center-img/xinsu3.jpg">
                    </div>
                </li>
                <li class="center-li" style="margin:0px 5px 5px 0px">
                    <div>
                        <img src="@/assets/center-img/xinsu4.jpg">
                    </div>
                </li>
                <li class="center-li" style="margin:0px 10px 5px 6px">
                    <div>
                        <img src="@/assets/center-img/xinsu5.jpg" style="width:189.83px;height:86.28px">
                    </div>
                </li>
                <li class="center-li" style="margin:0px 5px 5px 0px">
                    <div>
                        <img src="@/assets/center-img/xinsu6.jpg">
                    </div>
                </li>
            </ul>
        </div>
        <div class="center-div1">
            <a name="paihang"><div class="title"><h4>畅销书排行</h4></div></a>
            <ul class="paihang_one">
                <li class="a"><a href="#" class="title-a"><span>1</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不抱怨的世界</a></li>
                <li class="b"><a href="#" class="title-a"><span>2</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;遇见未知的自己</a></li>
                <li class="c"><a href="#" class="title-a"><span>3</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;活法</a></li>
                <li class="d"><a href="#" class="title-a"><span>4</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高效能人士的七个习惯</a></li>
                <li class="e"><a href="#" class="title-a"><span>5</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;被迫强大</a></li>
                <li class="f"><a href="#" class="title-a"><span>6</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;偷影子的人</a></li>
                <li class="g"><a href="#" class="title-a"><span>7</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们仨</a></li>
                <li class="h"><a href="#" class="title-a"><span>8</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;进击的巨人</a></li>
                <li class="i"><a href="#" class="title-a"><span>9</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;遇见你陪伴你</a></li>
                <li class="j"><a href="#" class="title-a"><span>10</span>&nbsp;&nbsp;&nbsp;遇到心想事成的自己</a></li>
            </ul>
        </div>
    </div>
    <!-- 重磅推荐结束 -->
    <!-- 博库热推开始 -->
    <div class="bukuretui">
        <div class="bukuretuiTop">
            <div class="context">
                <label for="">
                    <img src="https://style2.bookuu.com/bnmp/www/images/icon/plate_52_4.png" alt="">博库热推
                </label>
                <p>
                    <a href="" class="first">编辑精选</a>
                    <a href="">新书上架</a>
                    <a href="">畅销热卖</a>
                    <a href="">一种关注</a>
                    <a href="">期刊MOOK</a>
                </p>
            </div>
        </div>
        <div class="listOne">
            <ul>
                <li>
                    <a href="">
                        <img src="https://media2.v.bookuu.com/activity/16/46/20170807164644391.jpg@!q75" alt="">
                    </a>
                </li>
                <li>
                    <div class="outer">
                        <div class="outer-top">
                            <a href=""></a>
                        </div>
                        <div class="outer-bottom">
                            <a href="">流浪地球</a>
                            <p>
                                <span>¥42.80</span>
                                <span>|</span>
                                <del>¥68.00</del>
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="outer">
                        <div class="outer-top">
                            <a href=""></a>
                        </div>
                        <div class="outer-bottom">
                            <a href="">流浪地球</a>
                            <p>
                                <span>¥42.80</span>
                                <span>|</span>
                                <del>¥68.00</del>
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="outer">
                        <div class="outer-top">
                            <a href=""></a>
                        </div>
                        <div class="outer-bottom">
                            <a href="">流浪地球</a>
                            <p>
                                <span>¥42.80</span>
                                <span>|</span>
                                <del>¥68.00</del>
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="outer">
                        <div class="outer-top">
                            <a href=""></a>
                        </div>
                        <div class="outer-bottom">
                            <a href="">流浪地球</a>
                            <p>
                                <span>¥42.80</span>
                                <span>|</span>
                                <del>¥68.00</del>
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="outer">
                        <div class="outer-top">
                            <a href=""></a>
                        </div>
                        <div class="outer-bottom">
                            <a href="">流浪地球</a>
                            <p>
                                <span>¥42.80</span>
                                <span>|</span>
                                <del>¥68.00</del>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="listOne">
            <ul>
                <li>
                    <div class="outer">
                        <div class="outer-top">
                            <a href=""></a>
                        </div>
                        <div class="outer-bottom">
                            <a href="">流浪地球</a>
                            <p>
                                <span>¥42.80</span>
                                <span>|</span>
                                <del>¥68.00</del>
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="outer">
                        <div class="outer-top">
                            <a href=""></a>
                        </div>
                        <div class="outer-bottom">
                            <a href="">流浪地球</a>
                            <p>
                                <span>¥42.80</span>
                                <span>|</span>
                                <del>¥68.00</del>
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="outer">
                        <div class="outer-top">
                            <a href=""></a>
                        </div>
                        <div class="outer-bottom">
                            <a href="">流浪地球</a>
                            <p>
                                <span>¥42.80</span>
                                <span>|</span>
                                <del>¥68.00</del>
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="outer">
                        <div class="outer-top">
                            <a href=""></a>
                        </div>
                        <div class="outer-bottom">
                            <a href="">流浪地球</a>
                            <p>
                                <span>¥42.80</span>
                                <span>|</span>
                                <del>¥68.00</del>
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="outer">
                        <div class="outer-top">
                            <a href=""></a>
                        </div>
                        <div class="outer-bottom">
                            <a href="">流浪地球</a>
                            <p>
                                <span>¥42.80</span>
                                <span>|</span>
                                <del>¥68.00</del>
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="">
                        <img src="https://media2.v.bookuu.com/activity/16/46/20170807164644391.jpg@!q75" alt="">
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <!-- 博库热推结束 -->
    <!-- 图书频道开始 -->
        <div class="tushupindao">
            <div class="top">
                <label for="">
                    <img src="https://style2.bookuu.com/bnmp/www/images/icon/plate_52_2.png" alt="">
                    <span>图书频道</span>
                </label>
                <p>
                    <a href="" class="first">诗文</a>
                    <a href="">书画</a>
                    <a href="">音乐</a>
                    <a href="">小说</a>
                    <a href="">哲学</a>
                    <a href="">宗教</a>
                    <a href="">历史</a>
                    <a href="">社会</a>
                    <a href="">政法</a>
                    <a href="">传记</a>
                    <a href="">文创</a>
                    <a href="">明星书</a>
                    <a href="">财经</a>
                    <a href="">励志</a>
                    <a href="">科普</a>
                    <a href="">古籍</a>
                </p>
            </div>
            <div class="content">
                <ul>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">读唐诗</a>
                                <p>
                                    <span>¥51.04</span>
                                    <span>|</span>
                                    <del>¥88.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">读唐诗</a>
                                <p>
                                    <span>¥51.04</span>
                                    <span>|</span>
                                    <del>¥88.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">读唐诗</a>
                                <p>
                                    <span>¥51.04</span>
                                    <span>|</span>
                                    <del>¥88.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">读唐诗</a>
                                <p>
                                    <span>¥51.04</span>
                                    <span>|</span>
                                    <del>¥88.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">读唐诗</a>
                                <p>
                                    <span>¥51.04</span>
                                    <span>|</span>
                                    <del>¥88.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">读唐诗</a>
                                <p>
                                    <span>¥51.04</span>
                                    <span>|</span>
                                    <del>¥88.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">读唐诗</a>
                                <p>
                                    <span>¥51.04</span>
                                    <span>|</span>
                                    <del>¥88.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">读唐诗</a>
                                <p>
                                    <span>¥51.04</span>
                                    <span>|</span>
                                    <del>¥88.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">读唐诗</a>
                                <p>
                                    <span>¥51.04</span>
                                    <span>|</span>
                                    <del>¥88.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">读唐诗</a>
                                <p>
                                    <span>¥51.04</span>
                                    <span>|</span>
                                    <del>¥88.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">读唐诗</a>
                                <p>
                                    <span>¥51.04</span>
                                    <span>|</span>
                                    <del>¥88.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">读唐诗</a>
                                <p>
                                    <span>¥51.04</span>
                                    <span>|</span>
                                    <del>¥88.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 图书频道结束 -->
        <!-- 三张图片开始 -->
        <div class="threePicture">
            <ul>
                <li>
                    <a href=""><img src="https://media2.v.bookuu.com/activity/15/45/20190110154523514.jpg@!q75" alt=""></a>
                </li>
                <li>
                    <a href=""><img src="https://media2.v.bookuu.com/activity/15/40/20190110154056877.jpg@!q75" alt=""></a>
                </li>
                <li>
                    <a href="">
                        <img src="https://media2.v.bookuu.com/activity/15/42/20190110154251278.jpg@!q75" alt="">
                    </a>
                </li>
            </ul>
        </div>
        <!-- 结束 -->
        <!-- 童书频道开始 -->
        <div class="tongshupindao">
            <div class="tongshupindaoTop">
                <div class="context">
                    <label for="">
                        <img src="https://style2.bookuu.com/bnmp/www/images/icon/plate_52_4.png" alt="">童书频道
                    </label>
                    <p>
                        <a href="" class="first">新品</a>
                        <a href="">故事</a>
                        <a href="">绘本</a>
                        <a href="">英语</a>
                        <a href="">科普</a>
                        <a href="">启蒙</a>
                        <a href="">成长</a>
                        <a href="">玩具书</a>
                        <a href="">动漫</a>
                        <a href="">0-3</a>
                        <a href="">4-6</a>
                        <a href="">4-6</a>
                        <a href="">7-14</a>
                        <a href="">胎教</a>
                        <a href="">育儿</a>
                    </p>
                </div>
            </div>
            <div class="listOne">
                <ul>
                    <li>
                        <a href="">
                            <img src="https://media2.v.bookuu.com/activity/16/46/20170807164644391.jpg@!q75" alt="">
                        </a>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">流浪地球</a>
                                <p>
                                    <span>¥42.80</span>
                                    <span>|</span>
                                    <del>¥68.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">流浪地球</a>
                                <p>
                                    <span>¥42.80</span>
                                    <span>|</span>
                                    <del>¥68.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">流浪地球</a>
                                <p>
                                    <span>¥42.80</span>
                                    <span>|</span>
                                    <del>¥68.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">流浪地球</a>
                                <p>
                                    <span>¥42.80</span>
                                    <span>|</span>
                                    <del>¥68.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">流浪地球</a>
                                <p>
                                    <span>¥42.80</span>
                                    <span>|</span>
                                    <del>¥68.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="listOne">
                <ul>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">流浪地球</a>
                                <p>
                                    <span>¥42.80</span>
                                    <span>|</span>
                                    <del>¥68.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">流浪地球</a>
                                <p>
                                    <span>¥42.80</span>
                                    <span>|</span>
                                    <del>¥68.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">流浪地球</a>
                                <p>
                                    <span>¥42.80</span>
                                    <span>|</span>
                                    <del>¥68.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">流浪地球</a>
                                <p>
                                    <span>¥42.80</span>
                                    <span>|</span>
                                    <del>¥68.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">流浪地球</a>
                                <p>
                                    <span>¥42.80</span>
                                    <span>|</span>
                                    <del>¥68.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="">
                            <img src="https://media2.v.bookuu.com/activity/16/46/20170807164644391.jpg@!q75" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 童书频道结束 -->
        <!-- 分类推荐开始 -->
        <div class="fenleituijian">
            <div class="fenleituijianTop">
                <div class="context">
                    <label for="">
                        <img src="https://style2.bookuu.com/bnmp/www/images/icon/plate_52_4.png" alt="">分类推荐
                    </label>
                    <p>
                        <a href="" class="first">美妆</a>
                        <a href="">美食</a>
                        <a href="">居家</a>
                        <a href="">旅行</a>
                        <a href="">健身</a>
                        <a href="">投资</a>
                        <a href="">职场</a>
                        <a href="">心理</a>
                        <a href="">IT</a>
                        <a href="">设计</a>
                        <a href="">影视小说</a>
                        <a href="">悬疑</a>
                        <a href="">科幻</a>
                        <a href="">青春</a>
                    </p>
                </div>
            </div>
            <div class="listOne">
                <ul>
                    <li>
                        <a href="">
                            <img src="https://media2.v.bookuu.com/activity/16/46/20170807164644391.jpg@!q75" alt="">
                        </a>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">流浪地球</a>
                                <p>
                                    <span>¥42.80</span>
                                    <span>|</span>
                                    <del>¥68.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">流浪地球</a>
                                <p>
                                    <span>¥42.80</span>
                                    <span>|</span>
                                    <del>¥68.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">流浪地球</a>
                                <p>
                                    <span>¥42.80</span>
                                    <span>|</span>
                                    <del>¥68.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">流浪地球</a>
                                <p>
                                    <span>¥42.80</span>
                                    <span>|</span>
                                    <del>¥68.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">流浪地球</a>
                                <p>
                                    <span>¥42.80</span>
                                    <span>|</span>
                                    <del>¥68.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="listOne">
                <ul>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">流浪地球</a>
                                <p>
                                    <span>¥42.80</span>
                                    <span>|</span>
                                    <del>¥68.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">流浪地球</a>
                                <p>
                                    <span>¥42.80</span>
                                    <span>|</span>
                                    <del>¥68.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">流浪地球</a>
                                <p>
                                    <span>¥42.80</span>
                                    <span>|</span>
                                    <del>¥68.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">流浪地球</a>
                                <p>
                                    <span>¥42.80</span>
                                    <span>|</span>
                                    <del>¥68.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">流浪地球</a>
                                <p>
                                    <span>¥42.80</span>
                                    <span>|</span>
                                    <del>¥68.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="">
                            <img src="https://media2.v.bookuu.com/activity/16/46/20170807164644391.jpg@!q75" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 分类推荐结束 -->
        <!-- 猜你喜欢开始 -->
        <div class="cainixihuan">
            <div class="top">
                <label for="">
                    <img src="https://style2.bookuu.com/bnmp/www/images/icon/plate_52_2.png" alt="">
                    <span>猜你喜欢</span>
                </label>
                <!-- <p>
                    <a href="" class="first">诗文</a>
                    <a href="">书画</a>
                    <a href="">音乐</a>
                    <a href="">小说</a>
                    <a href="">哲学</a>
                    <a href="">宗教</a>
                    <a href="">历史</a>
                    <a href="">社会</a>
                    <a href="">政法</a>
                    <a href="">传记</a>
                    <a href="">文创</a>
                    <a href="">明星书</a>
                    <a href="">财经</a>
                    <a href="">励志</a>
                    <a href="">科普</a>
                    <a href="">古籍</a>
                </p> -->
            </div>
            <div class="content">
                <ul>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">读唐诗</a>
                                <p>
                                    <span>¥51.04</span>
                                    <span>|</span>
                                    <del>¥88.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">读唐诗</a>
                                <p>
                                    <span>¥51.04</span>
                                    <span>|</span>
                                    <del>¥88.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">读唐诗</a>
                                <p>
                                    <span>¥51.04</span>
                                    <span>|</span>
                                    <del>¥88.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">读唐诗</a>
                                <p>
                                    <span>¥51.04</span>
                                    <span>|</span>
                                    <del>¥88.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">读唐诗</a>
                                <p>
                                    <span>¥51.04</span>
                                    <span>|</span>
                                    <del>¥88.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">读唐诗</a>
                                <p>
                                    <span>¥51.04</span>
                                    <span>|</span>
                                    <del>¥88.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">读唐诗</a>
                                <p>
                                    <span>¥51.04</span>
                                    <span>|</span>
                                    <del>¥88.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">读唐诗</a>
                                <p>
                                    <span>¥51.04</span>
                                    <span>|</span>
                                    <del>¥88.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">读唐诗</a>
                                <p>
                                    <span>¥51.04</span>
                                    <span>|</span>
                                    <del>¥88.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">读唐诗</a>
                                <p>
                                    <span>¥51.04</span>
                                    <span>|</span>
                                    <del>¥88.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">读唐诗</a>
                                <p>
                                    <span>¥51.04</span>
                                    <span>|</span>
                                    <del>¥88.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="outer">
                            <div class="outer-top">
                                <a href=""></a>
                            </div>
                            <div class="outer-bottom">
                                <a href="">读唐诗</a>
                                <p>
                                    <span>¥51.04</span>
                                    <span>|</span>
                                    <del>¥88.00</del>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 猜你喜欢结束 -->
    <footer>
       <div class="footer">
           <div class="tag">    
               <ul>
                   <li>
                       <img src="https://bnmpstyle.bookuu.com/www/images/zheng.png">
                       <div class="content">
                           <p>全场正品</p>
                           <p>出版社直采:博库出品</p>
                       </div>
                   </li>
                   <li>
                       <img alt="" src="https://bnmpstyle.bookuu.com/www/images/sheng.png">
                       <div class="content">
                           <p>全场满59包邮</p>
                           <p>惊喜不断·让利多多</p>
                       </div>
                   </li>
                   <li>
                       <img alt="" src="https://bnmpstyle.bookuu.com/www/images/huo.png">
                       <div class="content">
                           <p>门店自取</p>
                           <p>就近取货·方式灵活</p>
                       </div>
                   </li>
                   <li>
                       <img alt="" src="https://bnmpstyle.bookuu.com/www/images/hao.png">
                       <div class="content">
                           <p>售后无忧</p>
                           <p>服务体验·更加精彩</p>
                       </div>
                   </li>
               </ul>
           </div>
           <div class="tag1">
               <ul>
                   <li>
                       <span>新手指南</span>
                       <div><a href="">新用户注册</a></div>
                       <div><a href="">购物流程</a></div>
                       <div><a href="">积分制度</a></div>
                       <div><a href="">注册开店</a></div>
                       <div><a href="">激励制度</a></div>
                   </li>
                   <li>
                       <span>支付与配送</span>
                       <div><a href="">IC卡充值说明</a></div>
                       <div><a href="">验货与签收</a></div>
                       <div><a href="">配送范围</a></div>
                       <div><a href="">自行取货</a></div>
                       <div><a href="">支付方式</a></div>
                   </li>
                   <li>
                       <span>售后服务</span>
                       <div><a href="">发票制度</a></div>
                       <div><a href="">退换货流程</a></div>
                       <div><a href="">7天无理由退换货</a></div>
                   </li>
                   <li>
                       <span>个人中心</span>
                       <div><a href="">店铺设置</a></div>
                       <div><a href="">团队管理</a></div>
                       <div><a href="">收入管理</a></div>
                       <div><a href="">我的订单</a></div>
                       <div><a href="">我的优惠券</a></div>
                       <div><a href="">我的等级</a></div>
                   </li>
                   <li>
                       <span>了解博库</span>
                       <div><a href="">关于博库</a></div>
                       <div><a href="">联系我们</a></div>
                       <div><a href="">博库网隐私政策</a></div>
                       <div><a href="">博库用户注册协议</a></div>
                       <div><a href="">博库网分销商注册协议</a></div>
                   </li>
               </ul>
           </div>
           <div class="tag2">
               <ul>
                   <li>
                       <p>手机博库</p>
                       <img src="https://bnmpstyle.bookuu.com/www/images/app.jpg" alt="">
                       <p>下载手机客户端</p>
                   </li>
                   <li>
                        <p>关注微信</p>
                       <img src="https://bnmpstyle.bookuu.com/www/images/wx.jpg" alt="">
                       <p>关注官方微信</p>
                   </li>
               </ul>
               <div>
                   <p>服务热线&nbsp;0571-26306883</p>
                   <p>服务时间&nbsp;9：00-21：00</p>
               </div>
           </div>
           <div class="clearFloat"></div>
           <div class="copyright">
               <div class="one">
                   <img src="https://bnmpstyle.bookuu.com/www/images/jingcha.png" alt="">
                   <img src="https://bnmpstyle.bookuu.com/www/images/huizhang.png" alt="">
               </div>
               <div class="two">
                   <p>©Copyright 2005-2017 bookuu.com 版权所有</p>
                   <p>增值电信业务经营许可证:浙B2-2011021</p>
                   <p>出版物经营许可证新出发浙批字第300411号</p>
               </div>
               <div class="three">
                   <a href="https://ss.knet.cn/verifyseal.dll?sn=e14082133010052836nfbw000000&amp;comefrom=trust&amp;trustKey=dn&amp;trustValue=www.bookuu.com" target="_blank"><img alt="" height="30" class="va-md pd-0005 defaultlazy" src="https://bnmpstyle.bookuu.com/www/images/knetSealLogo.png"></a>
                   <a href="https://credit.szfw.org/CX20160711016212850139.html" target="_blank"><img alt="" height="30" class="va-md pd-0005 defaultlazy" src="https://bnmpstyle.bookuu.com/www/images/cert.png"></a>
               </div>
           </div>
       </div>
    </footer>    
  </div>
</template>

<script>
import axios from '@/http/axios'
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
//   watch: {
//         '$route' (to,from) {
//           //对路由变化做出响应
//           console.log('有变化了') //测试点击路由的反应
//           console.log(to)
//           console.log(from)
//           //页面需要重新加载的地方
//         }
//       },
    created(){
      // 查询所有的书籍
      axios.post('/book/selectAllBook').then((data)=>{
        console.log(data)
      }).catch(()=>{

      })
    },
  methods:{
    
  }
}
</script>

<style>
  div,ul,li,a{
    padding: 0;
    margin: 0
  }
  ul li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: #ccc
  }
  #shucheng{
    font-family: "微软雅黑", "黑体", "Microsoft YaHei", "SimSun", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #212121;
    background-color: #F5F5F5
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
  .xiala{

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
    margin-left: 200px
  }
  .top2 .fl{
    display: inline-block
  }
  .top2 .fl .fl_top p{
    line-height: 25px;
    font-size: 12px;
    margin-left: 200px
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
    margin-left: 40px;
    margin-top: 10px
  }
  .top3{
    overflow: hidden;
    padding-top: 30px;
    /*margin-top: 20px*/
  }
  .top3 .one{
    margin-left: 200px;
    float: left;
    padding: 0;
    display: inline-block;
  }
  .top3 .two{
    float: left;
    line-height: 40px;
    padding-left: 90px;
    font-size: 16px;
    /*margin-top: 5px*/
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
  .block img{
    width: 1349px;
    height: 400px
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
  /*限时抢购开始*/
  /*限时抢购开始*/
.xinshiqianggou{
    width: 1290px;
    /*height: 300px;*/
    margin: 10px 30px;
    /*background-color: red;*/
    overflow: hidden;
}
.xinshiqianggou .top{
    overflow: hidden;
    border-bottom: 2px #ea5863 solid;
    position: relative;
    height: 45px;
    line-height: 45px;
    background-color: #ECEEF2
}
.xinshiqianggou .top *{
    float: left;
}
.xinshiqianggou .top p{
    line-height: 45px
}
.xinshiqianggou .top p:first-child{
    margin-top: 10px
}
.xinshiqianggou .top a{
    color: #e4393c;
    margin-left: 20px;
}
.xinshiqianggou .top p:last-child{
    float: right;
    margin-right: 200px;
    color: #e4393c;
}
.xinshiqianggou .top .one{
    float: right;
    color: #e4393c;
}
.xinshiqianggou .bottom{
    width: 100%;
    overflow: hidden;
}
.xinshiqianggou .bottom ul{
    overflow: hidden;
}
.xinshiqianggou .bottom ul a{
  width: 16.66%
}
.xinshiqianggou .bottom ul a li{
  width: 100%
}
.xinshiqianggou .bottom ul *{
    float: left;
}
.xinshiqianggou .bottom ul li{
    width: 16.66%;
    height: 280px;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid red
}
/*重磅推荐开始*/
.one {
    overflow: hidden;
    padding:23px;
}
.center-div{
    width: 31%;
    float: left;
    background-color: #ffffff;
    overflow: hidden;
    margin: 0 10px 0 10px;
    box-sizing: border-box;
}
.zhongb{
  margin: 0 5px
}
.xinsu{
  margin: 0 5px
}
.center-div .menu{
  overflow: hidden;
  padding:0;
  width: 100%;
  /*padding-left: 10px*/
}
.center-div .menu li{
  margin: 0;
  float: left;
  width: 47%;
  /*margin-left: 10px*/
}
.center-div .menu li img{
  width: 100%
}
.center-div ul li{
  font-size: 14px;
}
.center-div ul li:hover{
  transform: scale(1.05);
  transition: transform 1s
}
.center-div1{
  /*margin-left: 10px;*/
  width: 34%;
  float: right;
}
.center-div1 ul {
  padding: 0 10px
}
.center-div1 ul li{
  border-bottom: 1px solid #ccc;
  line-height: 35px;
}
.center-div1 ul li span{
  color: red
}
/*重磅推荐*/
.zhongb{
    height: 35px;
    font-size:16px;
    color:#FFF;
    line-height:30px;
    text-indent:2em;
    background-color: #63C5E5
}
/*新品速递*/
.xinsu{
    height: 35px;
    font-size:16px;
    color:#FFF;
    line-height:30px;
    text-indent:2em;
    background-color: #63C5E5
}
/*排行榜*/
.title{
    height: 35px;
    font-size:16px;
    color:#FFF;
    line-height:30px;
    text-indent:2em;
    background-color: #63C5E5
}
/*.a{background: url('@/assets/center-img/book_no01.gif') 0px 4px no-repeat;}
.b{background: url('@/assets/center-img/book_no02.gif') 0px 4px no-repeat;}
.c{background: url('@/assets/center-img/book_no03.gif') 0px 4px no-repeat;}
.d{background: url('@/assets/center-img/book_no04.gif') 0px 5px no-repeat;}
.e{background: url('@/assets/center-img/book_no05.gif') 0px 5px no-repeat;}
.f{background: url('@/assets/center-img/book_no06.gif') 0px 5px no-repeat;}
.g{background: url('@/assets/center-img/book_no07.gif') 0px 5px no-repeat;}
.h{background: url('@/assets/center-img/book_no08.gif') 0px 5px no-repeat;}
.i{background: url('@/assets/center-img/book_no09.gif') 0px 5px no-repeat;}
.j{background: url('@/assets/center-img/book_no10.gif') 0px 5px no-repeat;}
li{text-indent: 2em;font-size: 12px;}*/
.title-a{line-height: 19px;color: #1a66b3;}
.title-a:hover{text-decoration: underline;color:chocolate;}
/*重磅推荐结束*/
/*博库热推样式*/
.bukuretui {
    box-sizing: border-box;
    margin: 0 30px
}
.bukuretui > .bukuretuiTop {
    border-bottom: 2px #5babbb solid;
    position: relative;
    height: 45px;
    line-height: 45px;
    box-sizing: border-box;
}
.bukuretui > .bukuretuiTop .context {
    width: 100%;
    height: 100%;
    padding: 0 20px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    box-sizing: border-box;
}
.bukuretui > .bukuretuiTop .context label{
    font-size: 18px;
    margin-right: 15px;
    float: left;
    box-sizing: border-box;
    line-height: 45px
}
.bukuretui > .bukuretuiTop .context label img{
    margin-right: 4px;
    position: relative;
    top: 5px;
}
.bukuretui > .bukuretuiTop .context p{
    float: right;
}
.bukuretui > .bukuretuiTop .context p a{
    line-height: 45px;
    margin-right: 10px;
    cursor: pointer;
    padding: 4px 10px;
    font-size: 14px
}
.bukuretui > .bukuretuiTop .context p .first{
    color: #fff;
    background-color: #62adbb;
}
.bukuretui .listOne{
    overflow: hidden;
}
.bukuretui .listOne a{
    float: left;
    width: 200px;
    height: 280px;
    cursor: pointer;
}
.bukuretui .listOne ul{
    width: 100%;
    position: relative;
    overflow: hidden;
    /*border-left: 1px #f5f5f5 solid;*/
    /*float: right;*/
}
.bukuretui .listOne ul li{
    text-align: center;
    height: 280px;
    width: 16.6%;
    float: left;
    margin: 0;
    box-sizing: border-box;
    border:1px solid red;  
}
.bukuretui .listOne ul li a img{
    float: left;
    width: 100%
}
.bukuretui .listOne ul li .outer{
    border: 1px #f5f5f5 solid;
    border-left-width: 0;
    padding: 5px;
}
.bukuretui .listOne ul li .outer-top{
    overflow: hidden;
    padding: 20px;
    height: 148px;
    position: relative;
}
.bukuretui .listOne ul li .outer-bottom{
    text-align: center;
}
.bukuretui .listOne ul li .outer-bottom a{
    line-height: 18px;
    color: #666;
    overflow: hidden;
    margin-top: 2px;
    height: 36px;
}
.bukuretui .listOne ul li .outer-bottom p{
    line-height:40px;
    text-align: center;
}
.bukuretui .listOne ul li .outer-bottom span:first-child{
    font-size: 16px;
    color: #e4393c;
}
.bukuretui .listOne ul li .outer-bottom span:last-child{
    color: #999
}
.bukuretui .listOne ul li .outer-bottom p del{
    font-size: 12px;
    color: #999
}

/*图书频道开始*/
.tushupindao{
    padding: 0 30px;
    margin-bottom: 20px;
}
.tushupindao .top{
    border-bottom: 2px solid #5babbb;
    line-height: 45px;
    height: 45px;
    background-color: #ECEEF2;
    overflow: hidden;
}
.tushupindao .top label{
    font-size: 18px;
    margin-right: 15px;
    float: left;
    line-height: 45px
}
.tushupindao .top label img{
    margin-right: 5px
}
.tushupindao .top p{
    float: right;
}
.tushupindao .top p a{
    padding: 4px 10px;
    cursor: pointer;
    margin-right: 10px;
    font-size: 14px
}
.tushupindao .top p .first{
    color: #fff;
    background-color: #62adbb;
}
.tushupindao .content{
    overflow: hidden;
}
.tushupindao .content ul{
    background-color: #fff;
}
.tushupindao .content ul li{
    text-align: center;
    width: 214.5px;
    height: 300px;
    float: left;
    margin: 0;
    background-color: #fff
}
.tushupindao .content ul li .outer{
    border: 1px #f5f5f5 solid;
    border-left-width: 0;
    padding: 5px;
}
.tushupindao .content ul li .outer .outer-top{
    padding: 20px;
    overflow: hidden;
    position: relative;
    height: 189px
}
.tushupindao .content ul li .outer .outer-top a{
    background-image: url(https://wdimg3.bookuu.com/goods/11/59/35/2018121530323938-60673.jpg@!w210);
}
.tushupindao .content ul li .outer .outer-bottom{
    text-align: center;
}
.tushupindao .content ul li .outer .outer-bottom a{
    line-height: 18px;
    color: #666;
    overflow: hidden;
    margin-top: 2px;
    height: 36px
}
.tushupindao .content ul li .outer .outer-bottom p{
    line-height: 40px
}
.tushupindao .content ul li .outer .outer-bottom span:first-child{
    font-size: 16px;
    color: #e4393c;
}
.tushupindao .content ul li .outer .outer-bottom span:last-child{
    color: #999
}
.tushupindao .content ul li .outer .outer-bottom p del{
    font-size: 12px;
    color: #999
}
/*图片开始*/
.threePicture{
    margin-bottom: 20px;
    padding: 0 30px
}
.threePicture ul{
    overflow: hidden;
}
.threePicture ul li{
    float: left;
    width: 33.3%;
    /*box-sizing: border-box;*/
    /*border:1px solid #ccc;*/
    margin: 0
}
.threePicture ul li a{
    margin: 3px;
    cursor: pointer;
    display: inline-block;
    height: 144px;
    width: 100%;
    float: left;
    margin: 0
}
.threePicture ul li a img{
    width: 100%;
    float: left;
}

/*童书频道开始*/
/*.tongshupindao{

}*/
.tongshupindao {
    box-sizing: border-box;
    margin: 0 30px
}
.tongshupindao > .tongshupindaoTop {
    border-bottom: 2px #5babbb solid;
    position: relative;
    height: 45px;
    line-height: 45px;
    box-sizing: border-box;
}
.tongshupindao > .tongshupindaoTop .context {
    width: 100%;
    height: 100%;
    padding: 0 20px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    box-sizing: border-box;
}
.tongshupindao > .tongshupindaoTop .context label{
    font-size: 18px;
    margin-right: 15px;
    float: left;
    box-sizing: border-box;
    line-height: 45px
}
.tongshupindao > .tongshupindaoTop .context label img{
    margin-right: 4px;
    position: relative;
    top: 5px;
}
.tongshupindao > .tongshupindaoTop .context p{
    float: right;
}
.tongshupindao > .tongshupindaoTop .context p a{
    line-height: 45px;
    margin-right: 10px;
    cursor: pointer;
    padding: 4px 10px;
    font-size: 14px
}
.tongshupindao > .tongshupindaoTop .context p .first{
    color: #fff;
    background-color: #62adbb;
}
.tongshupindao .listOne{
    overflow: hidden;
}
.tongshupindao .listOne a{
    float: left;
    width: 200px;
    height: 280px;
    cursor: pointer;
}
.tongshupindao .listOne ul{
    width: 100%;
    position: relative;
    overflow: hidden;
    /*border-left: 1px #f5f5f5 solid;*/
    /*float: right;*/
}
.tongshupindao .listOne ul li{
    text-align: center;
    height: 280px;
    width: 16.6%;
    float: left;
    margin: 0;
    box-sizing: border-box;
    border:1px solid red;  
}
.tongshupindao .listOne ul li a img{
    float: left;
    width: 100%
}
.tongshupindao .listOne ul li .outer{
    border: 1px #f5f5f5 solid;
    border-left-width: 0;
    padding: 5px;
}
.tongshupindao .listOne ul li .outer-top{
    overflow: hidden;
    padding: 20px;
    height: 148px;
    position: relative;
}
.tongshupindao .listOne ul li .outer-bottom{
    text-align: center;
}
.tongshupindao .listOne ul li .outer-bottom a{
    line-height: 18px;
    color: #666;
    overflow: hidden;
    margin-top: 2px;
    height: 36px;
}
.tongshupindao .listOne ul li .outer-bottom p{
    line-height:40px;
    text-align: center;
}
.tongshupindao .listOne ul li .outer-bottom span:first-child{
    font-size: 16px;
    color: #e4393c;
}
.tongshupindao .listOne ul li .outer-bottom span:last-child{
    color: #999
}
.tongshupindao .listOne ul li .outer-bottom p del{
    font-size: 12px;
    color: #999
}


/*分类推荐开始*/
.fenleituijian {
    box-sizing: border-box;
    margin: 0 30px
}
.fenleituijian > .fenleituijianTop {
    border-bottom: 2px #5babbb solid;
    position: relative;
    height: 45px;
    line-height: 45px;
    box-sizing: border-box;
}
.fenleituijian > .fenleituijianTop .context {
    width: 100%;
    height: 100%;
    padding: 0 20px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    box-sizing: border-box;
}
.fenleituijian > .fenleituijianTop .context label{
    font-size: 18px;
    margin-right: 15px;
    float: left;
    box-sizing: border-box;
    line-height: 45px
}
.fenleituijian > .fenleituijianTop .context label img{
    margin-right: 4px;
    position: relative;
    top: 5px;
}
.fenleituijian > .fenleituijianTop .context p{
    float: right;
}
.fenleituijian > .fenleituijianTop .context p a{
    line-height: 45px;
    margin-right: 10px;
    cursor: pointer;
    padding: 4px 10px;
    font-size: 14px
}
.fenleituijian > .fenleituijianTop .context p .first{
    color: #fff;
    background-color: #62adbb;
}
.fenleituijian .listOne{
    overflow: hidden;
}
.fenleituijian .listOne a{
    float: left;
    width: 200px;
    height: 280px;
    cursor: pointer;
}
.fenleituijian .listOne ul{
    width: 100%;
    position: relative;
    overflow: hidden;
    /*border-left: 1px #f5f5f5 solid;*/
    /*float: right;*/
}
.fenleituijian .listOne ul li{
    text-align: center;
    height: 280px;
    width: 16.6%;
    float: left;
    margin: 0;
    box-sizing: border-box;
    border:1px solid red;  
}
.fenleituijian .listOne ul li a img{
    float: left;
    width: 100%
}
.fenleituijian .listOne ul li .outer{
    border: 1px #f5f5f5 solid;
    border-left-width: 0;
    padding: 5px;
}
.fenleituijian .listOne ul li .outer-top{
    overflow: hidden;
    padding: 20px;
    height: 148px;
    position: relative;
}
.fenleituijian .listOne ul li .outer-bottom{
    text-align: center;
}
.fenleituijian .listOne ul li .outer-bottom a{
    line-height: 18px;
    color: #666;
    overflow: hidden;
    margin-top: 2px;
    height: 36px;
}
.fenleituijian .listOne ul li .outer-bottom p{
    line-height:40px;
    text-align: center;
}
.fenleituijian .listOne ul li .outer-bottom span:first-child{
    font-size: 16px;
    color: #e4393c;
}
.fenleituijian .listOne ul li .outer-bottom span:last-child{
    color: #999
}
.fenleituijian .listOne ul li .outer-bottom p del{
    font-size: 12px;
    color: #999
}


/*猜你喜欢开始*/
.cainixihuan{
    padding: 0 30px;
    margin-bottom: 20px;
}
.cainixihuan .top{
    border-bottom: 2px solid #5babbb;
    line-height: 45px;
    height: 45px;
    background-color: #ECEEF2;
    overflow: hidden;
}
.cainixihuan .top label{
    font-size: 18px;
    margin-right: 15px;
    float: left;
    line-height: 45px
}
.cainixihuan .top label img{
    margin-right: 5px
}
.cainixihuan .top p{
    float: right;
}
.cainixihuan .top p a{
    padding: 4px 10px;
    cursor: pointer;
    margin-right: 10px;
    font-size: 14px
}
.cainixihuan .top p .first{
    color: #fff;
    background-color: #62adbb;
}
.cainixihuan .content{
    overflow: hidden;
}
.cainixihuan .content ul{
    background-color: #fff;
}
.cainixihuan .content ul li{
    text-align: center;
    width: 214.5px;
    height: 300px;
    float: left;
    margin: 0;
    background-color: #fff
}
.cainixihuan .content ul li .outer{
    border: 1px #f5f5f5 solid;
    border-left-width: 0;
    padding: 5px;
}
.cainixihuan .content ul li .outer .outer-top{
    padding: 20px;
    overflow: hidden;
    position: relative;
    height: 189px
}
.cainixihuan .content ul li .outer .outer-top a{
    background-image: url(https://wdimg3.bookuu.com/goods/11/59/35/2018121530323938-60673.jpg@!w210);
}
.cainixihuan .content ul li .outer .outer-bottom{
    text-align: center;
}
.cainixihuan .content ul li .outer .outer-bottom a{
    line-height: 18px;
    color: #666;
    overflow: hidden;
    margin-top: 2px;
    height: 36px
}
.cainixihuan .content ul li .outer .outer-bottom p{
    line-height: 40px
}
.cainixihuan .content ul li .outer .outer-bottom span:first-child{
    font-size: 16px;
    color: #e4393c;
}
.cainixihuan .content ul li .outer .outer-bottom span:last-child{
    color: #999
}
.cainixihuan .content ul li .outer .outer-bottom p del{
    font-size: 12px;
    color: #999
}

/*限时抢购开始*/
.xinshiqianggou{
    width: 1290px;
    /*height: 300px;*/
    margin: 10px 30px;
    /*background-color: red;*/
    overflow: hidden;
}
.xinshiqianggou .top{
    overflow: hidden;
    border-bottom: 2px #ea5863 solid;
    position: relative;
    height: 45px;
    line-height: 45px;
    background-color: #ECEEF2
}
.xinshiqianggou .top *{
    float: left;
}
.xinshiqianggou .top p{
    line-height: 45px
}
.xinshiqianggou .top p:first-child{
    margin-top: 10px
}
.xinshiqianggou .top a{
    color: #e4393c;
    margin-left: 20px;
}
.xinshiqianggou .top p:last-child{
    float: right;
    margin-right: 200px;
    color: #e4393c;
}
.xinshiqianggou .top .one{
    float: right;
    color: #e4393c;
}
.xinshiqianggou .bottom{
    width: 100%;
    overflow: hidden;
}
.xinshiqianggou .bottom ul{
    overflow: hidden;
}
.xinshiqianggou .bottom ul *{
    float: left;
}
.xinshiqianggou .bottom ul li{
    width: 16.66%;
    height: 280px;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid red
}

/*底部样式开始*/
.footer{
    margin-top: 20px;
    border-top: 1px #e1e1e1 solid;
    background-color: #fff;
    overflow: hidden;
}
.footer .tag{
    padding: 20px;
    height: 60px;
    border-bottom: 1px #e1e1e1 solid;
}
.footer .tag ul{
    padding: 0 50px;
    width: 1100px;
    margin: 0 auto;
    overflow: hidden;
}
.footer .tag ul li{
    line-height: 25px;
    width: 25%;
    float: left;
    box-sizing:border-box;
    padding: 0;
    margin: 0
}
.footer .tag ul li img{
    margin-right: 10px;
    float: left;
    padding: 0;
    margin: 0;
}
.footer .tag ul li .content{
    float: left;
}
.footer .tag ul li .content p:first-child{
    font-size: 24px
}
.footer .tag1{
    padding: 20px 0;
    width: 850px;
    overflow: hidden;
    margin: 0 74px;
    float: left;
    background-color: #fff
}
.footer .tag1 ul{
    float: left;
    overflow: hidden;
    width: 850px;
    overflow: hidden;
}
.footer .tag1 ul li{
    width: 20%;
    margin: 0;
    padding: 0;
    line-height: 30px;
    float: left;
}
.footer .tag1 ul li span{
    font-size: 16px;
    line-height: 40px
}
.footer .tag1 ul li div{
    line-height: 30px
}
.footer .tag1 ul li div a{
    color: #ccc;
    cursor: pointer;
}
.footer .tag2{
    width: 330px;
    padding: 10px 10px 0 10px;
    float: right;
}
.footer .tag2 ul{
    overflow: hidden;
    text-align: center;
}
.footer .tag2 ul li{
    text-align: center;
    width: 50%;
    float: left;
    margin: 0;
    padding: 0
}
.footer .tag2 ul li p{
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    color: #666;
    font-size: 16px;
}
.footer .tag2 ul li img{
    border: 1px #ddd solid;
    margin: 0 auto;
    width: 105px;
    height: 105px;
}
.footer .tag2 div p{
    text-align: center;
}
.clearFloat{
    clear: both;
}
.footer .copyright{
    height: 50px;
    padding: 20px 0;
    background-color: #414141;
    position: static;
}
.footer .copyright .one{
    float: left;
    line-height: 50px;
    text-align: center;
    margin-left: 350px;
    margin-right: 5px;
    margin-top: 5px
}
.footer .copyright .one img{
    padding: 0 5px;
}
.footer .copyright .two{
    float: left;
    text-align: center;
    padding: 0 10px;
    margin-right: 10px
}
.footer .copyright .two p{
    font-size: 14px;
    color: #999
}
.footer .copyright .three{
    float: left;
    margin-top: 13px
}
</style>
