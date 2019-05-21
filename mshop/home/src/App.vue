<!--1.页面-->
<template>
	<div class="App" id='app'>
		<router-view></router-view>
		<TabBer />
	</div>
</template>

<!--2.逻辑-->
<script>
	//2.1 引入组件
	import TabBer from './components/TabBer/TabBer'
	// 定义组件
	export default {
		name:'App',
		//2.2 注册组件
		components:{
			TabBer
		}
	}
</script>

<!--3.样式-->
<style lang="less">
	#app{
		.rem(padding-bottom,50)
	}
</style>