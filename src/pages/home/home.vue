<template>
	<div class='con'>
		<header-nav :routerLink = 'routerLink'></header-nav>
		<live2d></live2d>
		<main class='main'>
			<div class='content_box' v-for= '(item,index) in pageList'>
				<div class='content_main'>
					<header class="main_title">
						<h1 class='title'>
							{{item.title}}
						</h1>
						<div class='time_Box'>
							<span class='time'>{{item.time}}</span>
							<span class='time'>伊甸园</span>
							<span class='type'>{{item.type}}</span>
						</div>
					</header>
					<div class='main_introduction'>
						{{item.introduct}}
					</div>
					<router-link class='show_all' tag='div' :to="{path:'/page',query:{id:item.id}}">
						阅读全文
					</router-link>

					<footer class='main_footer'>
						
					</footer>
				</div>
			</div>
		</main>
	</div>
</template>

<script type="text/javascript">
import headerNav from '@/components/headerNav'
import live2d from '@/components/live2d'	
export default {
	data(){
		return{
			pageList:'',
		}
	},
	created(){
		this.$axios.get('/api/getPage')
		.then((res)=>{
			this.pageList = res.data.reverse();
		})	
	},
 	props:['routerLink'],
	components:{
		'header-nav':headerNav,
		'live2d':live2d,
  	}
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