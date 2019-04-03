<template>
	<div class="xiangqin">
		<div class="top"></div>
		<div class="bottom">
			<div class="left">
			<img src="" alt="">
			</div>
			<div class="middle">
				<h4>小牛顿人文馆．写给孩子的世界名人传记B辑(全12册)</h4>
				<div class="author">
					<span>作者:&nbsp;&nbsp;邓甜甜</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<span>出版社:&nbsp;&nbsp;宿州学院</span>
				</div>
				<div class="price">
					<div><span>定价:</span>&nbsp;&nbsp;&nbsp;&nbsp;<del>￥300</del></div>
					<div><span>售价:</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="aa">￥14.00</span></div>
				</div>
				<div class="address">
					<span>配送至:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<el-cascader
						expand-trigger="hover"
						:options="options"
						v-model="selectedOptions2"
						size="mini"
						@change="handleChange">
					</el-cascader>
					&nbsp;&nbsp;&nbsp;&nbsp;<span class="bb">免邮费</span>
					<br>
					<br>
					<span>销量:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<span>28件</span>
					<br>
					<br>
					<span>数量:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<el-input-number v-model="num1" @change="handleChange1" :min="1" :max="100000" label="请选择数量" size="mini"></el-input-number>
					<span class="cc">库存:</span>&nbsp;&nbsp;<span class="cc">300</span>
					<br>
					<br>
					<el-button type="primary" plain size="mini">立即购买</el-button>
					<el-button type="primary" plain size="mini">加入购物车</el-button>
					<br>
					<br>
					<span>服务:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<i class="el-icon-success">正品保证</i>
					<i class="el-icon-success">七天无理由退换货</i>
					<i class="el-icon-success">赠送144积分</i>
				</div>
			</div>
			<div class="right">
				<div class="right_top">
					<div>
						<img src="@/assets/default_shop.png" alt="">
					  <span class="one">博库体验店</span>
					</div>
					<br>
					<br>
					<el-button type="primary" round size="middle">进入主页</el-button>
					<el-button type="primary" round size="middle">一键开店</el-button>
				</div>
				<div class="right_bottom">
					<img src="@/assets/app.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return{
			// 城市选择数据
			options: [{
          value: 'zhinan',
          label: '江苏省',
					children: [{
						value: 'kekong',
						label: '扬州市'
					},{
						value: 'yizhi',
						label: '无锡市'
					}, {
						value: 'fankui',
						label: '苏州市'
					}, {
						value: 'xiaolv',
						label: '常州市'
					}, {
						value: 'kekong',
						label: '扬州市'
					}]
        },{
          value: 'zhinan',
          label: '安徽省',
					children: [{
						value: 'kekong',
						label: '合肥市'
					},{
						value: 'yizhi',
						label: '六安市'
					}, {
						value: 'fankui',
						label: '宿州市'
					}, {
						value: 'xiaolv',
						label: '黄山市'
					}, {
						value: 'kekong',
						label: '芜湖市'
					}]
        },{
          value: 'zhinan',
          label: '湖北省',
					children: [{
						value: 'kekong',
						label: '武汉市'
					},{
						value: 'yizhi',
						label: '黄石市'
					}, {
						value: 'fankui',
						label: '潜江市'
					}, {
						value: 'xiaolv',
						label: '天门市'
					}, {
						value: 'kekong',
						label: '黄冈市'
					}]
        },{
          value: 'zhinan',
          label: '浙江省',
					children: [{
						value: 'kekong',
						label: '杭州市'
					},{
						value: 'yizhi',
						label: '宁波市'
					}, {
						value: 'fankui',
						label: '温州市'
					}, {
						value: 'xiaolv',
						label: '湖州市'
					}, {
						value: 'kekong',
						label: '绍兴市'
					}]
        }],
        selectedOptions: [],
				selectedOptions2: [],
				// 城市选择数据结束
				// 计数器
				num1: 1
		}
	},
	methods: {
      handleChange(value) {
        // console.log(value);
			},
			// 计数器函数
			handleChange1(value) {
        console.log(value);
      }
    }
}
</script>

<style scoped>
	.xiangqin{
		padding: 0 10px 0 10px
	}
	.top{
		width: 100%;
		height: 180px;
	}
	.bottom{
		overflow: hidden;
	}
	.left{
		width: 30.3%;
		height: 400px;
		box-sizing: border-box;
		border: 1px solid #ccc;
		float: left;
	}
	.middle{
		float: left;
		width: 46.3%;
		height: 400px;
		box-sizing: border-box;
		border: 1px solid #ccc
	}
	.middle h4{
		margin-bottom: 10px
	}
	.middle .author{
		font-size: 14px
	}
	.middle .price{
		width: 100%;
		height: 110px;
		background-color: #ccc;
		margin-top: 10px;
		padding: .5em;
		box-sizing: border-box;
	}
	.middle .price div{
		box-sizing: border-box;
		height: 50%;
	}
	.middle span{
		color: #999999;
		font-size: 14px
	}
	.middle .price div span{
		font-size: 14px;
		line-height: 47px;
		color: #999999
	}
	.middle .price del{
		color: #875033
	}
	.middle .price .aa{
		color: #e4393c;
		font-size: 20px
	}
	.middle .address{
		margin-top: 18px
	}
	.middle .el-cascader{
		width: 200px
	}
	.middle .bb{
		font-size: 12px;
		color: #999999
	}
	.middle .cc{
		font-size: 12px;
		color: #999999
	}
	.middle .el-input-number{
		margin-right: 20px
	}
	.middle i{
		margin-left: 25px;
		font-size: 12px;
		color: #999999
	}
	.right{
		float: left;
		width: 23.3%;
		height: 400px;
		box-sizing: border-box;
		border: 1px solid #ccc
	}
	.right_top{
		border: 1px solid #ccc;
		width: 100%;
		height: 170px;
		padding: 10px
	}
	.right_top > div{
		height: 80px;
		overflow: hidden;
	}
	.right_top img{
		border-radius: 50%;
		width: 80px;
		height: 80px;
		float: left;
	}
	.right_top .one{
		float: left;
		margin-top: 22px;
		margin-left: 20px
	}
	.right_bottom img{
		width: 200px;
		height: 200px;
	}
</style>