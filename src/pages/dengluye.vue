<template>
	<div class="denglu">
		<div class="top">
        <img src="@/assets/logo.png" alt=""/>
    </div>
    <div class="neirong">
    	<div class="neir">
    		<img src="@/assets/background.jpg" alt="">
    		<div class="one">
    			<div class="one_one">
    				博库用户登录
    			</div>
    			<el-input
					  placeholder="请输入用户名/账号"
					  v-model="input10"
					  clearable>
					</el-input>
					<el-input placeholder="请输入密码" v-model="input11" show-password></el-input>
					<el-button type="primary">确认</el-button>
					<span>没有博库账户??? 我要去注册>>></span>
    		</div>
    	</div>
    </div>
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
	export default{
		data(){
			return{
				input10: '',
				input11: ''
			}
		}
	}
</script>
<style scoped>
	input{
    width: 300px;
    height: 30px;
    border:1px solid darkgrey;
    /*圆角设置*/
    border-radius: 6px;
	}
	.password-bottom{
	    color: darkturquoise;
	    position: relative ;
	    left: 118px;
	    margin-bottom: 10px;
	}
	/*top顶部*/
	.top{
	    padding: 0 30px 0 30px;
	    /*margin-bottom: 40px;*/
	    margin-top: 10px;
	    height: 80px;
	    /*border-bottom: 3px solid #3AB5E6*/
	}
	.neir{
		position: relative;
	}
	.neir img{
		width: 100%;
		height: 500px
	}
	.neir .one{
		width: 400px;
		height: 420px;
		background-color: #fff;
		position: absolute;
		top: 40px;
		left: 900px;
		padding:10px;
	}
	.neir .one .one_one{
		color: #3AB5E6;
		line-height: 30px;
		border-bottom: 1px solid #ccc
	}
	.el-input {
		margin-top: 20px;
		width: 400px
	}
	.el-button{
		width: 400px;
		margin-top: 20px;
		margin-bottom: 20px
	}
	.one span{
		cursor: pointer;
	}
	.one span:hover{
		color: red
	}
	/**/
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