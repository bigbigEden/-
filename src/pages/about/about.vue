<template>
	<div id='aboutMe'>
		<header-nav :routerLink = 'routerLink'></header-nav>
		
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
	
</style>