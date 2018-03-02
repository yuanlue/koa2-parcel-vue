<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>
// parcel-plugin-vue 暂未解决 style 引入样式 HMR 无效的问题，故先在此加载（此处有效）
export default {
	name: 'App'
}
</script>
<style>
	h1{
		font-size:30px;
		color:red
	}
</style>
