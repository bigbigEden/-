<template>
	<div class='con'>
		<button @click = "send('/api/test')"></button>
		<h3>测试{{isSelect ?'是' :'不是'}}</h3>
		<button class='test' @click = 'commits'></button>
		<button class = 'test' @click = 'cancel'></button>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return{
				isSelect:false,
			}
		},
		methods:{
			send(url){
				function* getJson(url){
					var result = yield ajax(url,function(res){
						it.next(res); //请求成功后的回调
					}); //请求
					var data = JSON.parse(result);
					// something code
				}
				function ajax(url,callback){
					const handler = function(){
						if(this.readyState !==4){
							return
						}
						if(this.status === 200){
							callback(this.responseText);
							// resolve(this.response)
						}
						else{
							//some code;
							// reject(new Error(this.statusText))
						}
					}
					const client = new XMLHttpRequest();
					client.open('GET',url);
					client.onreadystatechange = handler;
					// client.responseType = 'json';
					// client.setRequestHeader('Accept','application/json');
					client.send();
				}
				var it = getJson(url);
				it.next();
			},
			commits(){
				this.$store.dispatch('check_select',true)
				.then((res)=>{
					
					this.isSelect = this.$store.state.is_select;
				})
			},
			cancel(){
				this.$store.dispatch('check_select',false)
				.then((res)=>{
					this.isSelect = this.$store.state.is_select;
				})
			}
		}
	}
</script>

<style lang='less' scoped>
	.test{
		width:200px;
		height:30px;
		border:1px solid black;
		display:inline-block;
	}
	button{
		display:block;
		width:50px;
		height:50px;
		margin:0 auto;
		margin-top:200px;
	}
</style>