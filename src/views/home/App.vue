<template>
	<div class='con'>
		<header-nav :routerLink = 'routerLink'></header-nav>
		<main class='main'>
			<content-box :pageList = 'pageList'></content-box>
		</main>
	</div>
</template>

<script type="text/javascript">
import headerNav from '../common/headerNav'
import contentBox from '../common/contentBox'
export default {
	data(){
		return{
			pageList:'',
		}
	},
	created(){
		this.$api.getData('/api/getPage')
		.then((res)=>{
			console.log(res);
			this.pageList = res.reverse();
		})	
	},
 	props:['routerLink'],
	components:{
		'header-nav':headerNav,
		'content-box':contentBox,
  	}
}
</script>

<style lang="less" scoped>
	.main{
		width:980px;
		padding-top:60px;
		margin:0 auto;
	}
</style>