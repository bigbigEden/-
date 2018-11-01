<template>
	<div id='live2dBox'>
		<canvas ref='live2d' id='live2d' width='300' height='250'>
			
		</canvas>
	</div>
</template>

<script type="text/javascript">
import '../../static/js/live2d.js'  //引入live2djs
export default {
	data(){
		return{

		}
	},
	mounted(){
		loadlive2d('live2d','http://localhost:3000/live2d',console.log('加载完成'));
	}
}
</script>

<style lang='less' scoped>
	#live2d{
		position:fixed;
		left:0;
		bottom:0;
	}
</style>