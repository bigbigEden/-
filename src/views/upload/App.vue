<template>
	<div class='con'>
		<form id = 'myForm' method = 'post' action='http://localhost:3000/upload' enctype="multipart/form-data" > 
			<label>文章标题:<input class='myinput' type="text" name="title"></label>
			<label>文章简介:<input class='myinput' type="text" name="introduct"></label>
			<label>文章类型:<input class='myinput' type="text" name="type"></label>
			<label>markDown内容:<input ref = 'file' type="file" name="content"></label>
			<label>上传：<input class='button' type="button" name="upload" value="提交" @click = 'upload'></label>
		</form>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return{
			}
		},
		methods:{
			upload:function(){
				var formData = new FormData(document.querySelector('#myForm'));
				if($('input[name="content"]')[0].value == '' || undefined){
					alert('请选择文件！');
				}
				else{
					$.ajax({
						url:'/api/upload',
						type:'POST',
						data:formData,
						dataType:'text',
						processData: false,  // 告诉jQuery不要去处理发送的数据
					  	contentType: false,  // 告诉jQuery不要去设置Content-Type请求头
						success:function(data){
							alert('success');
						},
					})
				}
			}
		}
	}
</script>

<style lang='less' scoped>
#myForm{
	text-align:left;
	width:600px;
	margin:0 auto;
	padding-top:200px;
	.button{
		width:100px;
		height:30px;
		cursor:pointer;
	}
	label{
		display:block;
		padding:10px;
		.myinput{
			border-bottom:1px solid black;
		}
	}
}
</style>