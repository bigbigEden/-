<template>
	<div class='con'>
		<header-nav :routerLink = 'routerLink'></header-nav>
		<main class='main clearfix'>
			<div class='typeBox'>
				<span class='type'>{{type}}</span>
			</div>
			<div class='contentBox'>
				<content-box :pageList = 'pageList'></content-box>
			</div>
			<div class='searchBox'>
				<div class='searchWarpper clearfix'>
					<div class='mySearch' @mouseleave = 'changeInput(2)'>
						<input :class="{select : isSelect}" type="text" name="type"/>
						<i @mouseenter = 'changeInput(1)' class="searchIcon fa fa-search" aria-hidden="true"></i>
					</div>
				</div>
				<div class='searchType'>
					<span class='type'>常见标签</span>
					<nav class="labelBox ">
						<ul class="clearfix">
							<li class='labelList' @click='findPage(item)' v-for= '(item,index) in labelList'>
								{{item}}
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</main>
	</div>	
</template>

<script type="text/javascript">
import headerNav from '../common/headerNav'
import contentBox from '../common/contentBox'
export default {
 	props:['routerLink'],
	data(){
		return{
			isSelect:false,
			labelList:'',
			type:'',
			pageList:'',
		}
	},
 	methods:{
 		changeInput(type){
 			if(type ==1){
				this.isSelect = true;
 			}
 			else{
 				this.isSelect = false;
 			}
 		},
 		findPage(name){
 			this.type = name;
 			this.$api.getData('/api/typePage?type=' + this.type)
 			.then((res)=>{
	 				this.pageList = res;
 			})
 		}
 	},
 	created(){
 		this.$api.getData('/api/getType')
 		.then((res)=>{
 			this.labelList = res;
 			this.type = res[0];
 		})
 		.then(()=>{
 			return this.$api.getData('/api/typePage?type=' + this.type)
 		})
 		.then((res)=>{
 			this.pageList = res;
 		})
 	},
	components:{
		'header-nav':headerNav,
		'content-box':contentBox
  	}
}
</script>

<style lang='less' scoped>
	.main{
		padding-top:50px;
		width:1200px;
		text-align:left;
		margin:0 auto;
		.typeBox{
			margin-bottom:5px;
		}
		.type{
			text-align:center;
			display:inline-block;
			height:45px;
			min-width:150px;
			line-height:45px;
			background-color:#66CCCC;
			color:white;
		}
		.contentBox{
			text-align:center;
			width:875px;
			height:300px;
			margin-right:25px;
			float:left;
		}
		.searchBox{
			width:300px;
			height:600px;
			padding:10px;
			border:1px solid black;
			float:left;
			.mySearch{
				float:right;
				padding-right:5px;
				input{
					width:0;
					border-radius:5px;
					border:1px solid black;
					transition: all .5s ease;
				}
				input.select{
					width:150px;
				}			
			}
			.searchType{
				margin-left:-10px;
				.type{
					min-width:120px;
					margin-top:10px;
				}
				.labelBox{
					.labelList{
						float:left;
						padding:10px;
						border-radius:10px;
						margin:5px;
						cursor:pointer;
						background:#d6d6d6;
					}
				}
			}
		}
	}	

</style>