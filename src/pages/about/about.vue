<template>
	<div id='aboutMe'>
		<header-nav :routerLink = 'routerLink'></header-nav>
		<main class='introductBox'>
			<div class='myIntroduct'>
				<h3 class='tell'>简介</h3>
				<article class='mything'>
					目前是重庆邮电大学大三的一名学生~ 专业的话是集成电路与集成设计的 哈哈。。好像跨专业是有点远的那种了。 接触web的话也是大一的时候一次偶然的机会，去到学校的技术部门，从此入坑，大概就说这么多吧~期待着以后更多的故事等我填写。(￣︶￣)↗
				</article>
				<footer class='otherthing'>
					<span class='time'>2018/10/31 17:20</span>
				</footer>
			</div>
			<div class='myImg'>
				<div class='ImgBox'>
					<img src='../../../static/img/my.jpg'>
				</div>
				<footer class='findMe'>
					<h5>你能找到我吗?</h5>
					<nav class='findIconWrapper'>
						<ul class='findBox'>
							<li class='findIcon'>
								<a class='findLink' href='#'>
									<i class="myicon fa fa-qq fa-fw" aria-hidden="true"></i> 
								</a>
							</li>
							<li class='findIcon'>
								<a class='findLink' href='#'>
									<i class="myicon fa fa-weixin" aria-hidden="true"></i>
								</a>
							</li>
							<li class='findIcon'>
								<a class='findLink' href='#'>
									<i class="myicon fa fa-github" aria-hidden="true"></i>
								</a>
							</li>
						</ul>
					</nav>
				</footer>
			</div>
		</main>
	</div>
</template>

<script type="text/javascript">
import headerNav from '@/components/headerNav'
	export default{
		data(){
			return{

			}
		},
		props:['routerLink'],
		methods:{

		},
		components:{
			'header-nav':headerNav,
		}
	}
</script>

<style lang='less' scoped>
#aboutMe{
	background:rgba(0,0,0,0.1);
}
	.introductBox{
		width:1100px;
		margin:0 auto;
		padding-top:50px;
		display:flex;
		justify-content:space-between;
		.myIntroduct{
			position:relative;
			width:775px;
			height:300px;
			padding:25px;	
			background:white;
			text-align:left;
			.tell{
				padding-bottom:10px;
				border-bottom:1px solid #e1dede;
			}
			.mything{
				padding-top:15px;
				font-size:18px;
				line-height:30px;
			}
			.otherthing{
				position:absolute;
				bottom:0;
				right:0;
				.time{
					display:block;
					margin-right:5px;
					text-align:right;
					height:30px;
					line-height:30px;
				}
			}
		}
		.myImg{
			width:300px;
			padding:25px;
			transition:all .3s ease;
			background:white;
			.ImgBox{
				img{
					width:100%;
					height:200px;
				}
			}
			.findMe{
				.findBox{
					padding-top:5px;
					display:flex;
					align-items:center;
					justify-content:center;
					width:100%;
					.findIcon{
						margin:0 5px;
					}
					.findLink{
						display:flex;
						align-items:center;
						justify-content:center;
						.myicon{
							width:42px;
							height:42px;
							border-radius:50%;
							background-color:rgba(0,0,0,0.1);
							color:rgba(0,0,0,0.5);
							line-height:40px;
						}
					}
				}
			}
		}
	}
</style>