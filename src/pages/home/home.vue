<template>
	<div class='con'>
		<main class='main'>
			<div class='content_box'>
				<div class='content_main'>
					<header class='main_title'>
						<h1 class='title'>js学习</h1>
						<div class='time_Box'>
							<span class='time'>2018-08-30 17：04 </span>
							<span class='time'>伊甸园</span>
							<span class='type'>js基础</span>
						</div>
					</header>
					<div class='main_introduction'>
						这个 文章是我好久好久之前写的 现在放上来 测试测试测试测试
					</div>
					<div class='show_all'>
						阅读全文
					</div>
					<footer class='main_footer'>
						
					</footer>
				</div>
			</div> <!-- 内容例子 -->
			<div class='content_box'>
				<div class='content_main'>
					<header class='main_title'>
						<h1 class='title'>js学习</h1>
						<div class='time_Box'>
							<span class='time'>2018-08-30 17：04 </span>
							<span class='time'>伊甸园</span>
							<span class='type'>js基础</span>
						</div>
					</header>
					<div class='main_introduction'>
						这个 文章是我好久好久之前写的 现在放上来 测试测试测试测试
					</div>
					<div class='show_all'>
						阅读全文
					</div>
					<footer class='main_footer'>
						
					</footer>
				</div>
			</div> <!-- 内容例子 -->
			<div class='content_box'>
				<div class='content_main'>
					<header class='main_title'>
						<h1 class='title'>js学习</h1>
						<div class='time_Box'>
							<span class='time'>2018-08-30 17：04 </span>
							<span class='time'>伊甸园</span>
							<span class='type'>js基础</span>
						</div>
					</header>
					<div class='main_introduction'>
						这个 文章是我好久好久之前写的 现在放上来 测试测试测试测试
					</div>
					<div class='show_all'>
						阅读全文
					</div>
					<footer class='main_footer'>
						
					</footer>
				</div>
			</div> <!-- 内容例子 -->
		</main>
	</div>
</template>

<script type="text/javascript">
export default {

}
</script>

<style lang="less" scoped>
	.main{
		width:980px;
		padding-top:60px;
		margin:0 auto;

		.content_box{
			padding:0 60px;
			transition:all .3s ease;
		}
		.content_box:hover{
	    	box-shadow: 0 10px 20px 2px #e4e4e4;
		}
		.content_main{
			header{
				padding-bottom:30px;

				.title{
					color:#7a7b7b;
					padding-top:60px;
					padding-bottom:20px;
				}
				.time_Box{
					.time,.type{
						color:#b5b5b5;
					}
					.time:after{
						content:'';
						width:1px;
						height:14px;
						display:inline-block;
						margin:0 10px;
						background-color:#918a8a;
					}

				}
			}
			footer{
				height:40px;
			}
			.show_all{
				padding-top:20px;
				cursor:pointer;
			}
		}
	}
</style>