<script setup>
import routes from '../router/routes.js'

const visibleRoutes = routes.getRoutes()
</script>

<template>
	<el-row id="globalHeader">
		<el-col>
			<el-menu mode="horizontal">
				<el-menu-item v-for="items in visibleRoutes" :key="items.path">
					{{ items.name }}
				</el-menu-item>
			</el-menu>
		</el-col>
	</el-row>
</template>

<style scoped></style>
