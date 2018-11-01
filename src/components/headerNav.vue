<template>
	<div class='con'>
		<header class='myheader'>
			<nav class='myNav  clearfix'>
				<ul class="myNavBox">
					<router-link class='headerList' v-for = '(item,index) in routerLink' :key = 'index' :to = 'item.link' >{{item.name}}</router-link>
				</ul>
			</nav>
		</header>
		<div class='bg'>
			<div class='caption'>
				Welcome
				<i class="fa fa-location-arrow" aria-hidden="true"></i>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		props:['routerLink']
	}
</script>

<style lang='less' scoped>
	.bg{
		height:420px;
		width:100%;
		position:relative;
		background-size:cover;
		background-position:center 82%;
		background-repeat: no-repeat;
		background-image:url('../../static/img/bg3.jpg');
		.caption{
			width:100px;
			height:100px;
			border-radius:50%;
			background-color:#cac8bb;
			color:#615d5d;
			line-height:100px;
			position:absolute;
			bottom:60px;
			left:50%;
			transform:translateX(-50%);
			animation:fadeIn 1s ease infinite alternate;
			text-align:center;
			i{
				position:absolute;
				bottom:15px;
				cursor:pointer;
				left:50%;
				transform:translateX(-50%) scale(1.5);
			}
		}
	}
	@keyframes fadeIn{
		0%{
			opacity:0;
		}
		100%{
			opacity:1;
		}
	}
	.myheader{
		width:100%;
		position:fixed;
		z-index:10;
		background-color:rgba(0,0,0,0.3);
		.myNav{
			width:100%;
			min-width:1280px;
			padding:0 300px;
		}
		.myNavBox{
			height:60px;
			line-height:60px;
			float:right;
		}
		.headerList{
			display:inline-block;
			position:relative;
			color:#f1f1f1;
			padding:0 15px;
			height:30px;
			line-height:30px;
		}
		.headerList:hover::after{
			width:20px;
		}	
		.headerList:after{
			content:'';
			display:block;
			margin:0 auto;
			width:0px;
			height:2px;
			background-color:#f1f1f1;
			transition: all .3s ease;
		}
	}
</style>