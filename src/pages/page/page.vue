<template>
	<div id='markDown'>
		<header-nav :routerLink = 'routerLink'></header-nav>
		<div class='mainBox'></div>
	</div>
</template>

<script type="text/javascript">
import headerNav from '@/components/headerNav'
	export default {
		data(){
			return{

			}
		},
		created(){
			this.$axios.get('/api/page?id=' + this.$route.query.id)
			.then((res)=>{
				$('.mainBox').append(res.data);
			})	
		},
	 	props:['routerLink'],
		components:{
			'header-nav':headerNav,
	  	}
	}
</script>
<style lang="less" >

.mainBox{
	width:800px;
	margin:0 auto;
	text-align:left;
	a{
		color:#1a83d7;
	}
	code{
		background-color: #f6f6f6;
		padding:5px;
	}
	pre{
		background-color:#f6f6f6;
		padding:10px;
		code{
			word-break:break-all;
			white-space: pre-wrap;
			word-wrap:break-word; 
			font-family:'OpenSans';
			padding:0;
			
		}
	}
	p{
		padding:10px 0;
	}
	img{
		width:800px;
	}
	li{

		min-height:25px;
		position:relative;
	}
	li:before{
		content:'';
		display:inline-block;
		width:8px;
		height:8px;
		line-height:25px;
		margin-right:5px;
		border-radius:50%;
		background-color:black;
	}
}
@font-face{
     font-family: 'OpenSans'; 
     src:url('../../../static/font/OpenSans.ttf') format('truetype'),
}
</style>