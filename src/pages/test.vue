<template>
	<div class='con'>
		<button @click = "send('/api/test')"></button>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return{

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
			}
		}
	}
</script>

<style lang='less' scoped>
	button{
		display:block;
		width:50px;
		height:50px;
		margin:0 auto;
		margin-top:200px;
	}
</style>