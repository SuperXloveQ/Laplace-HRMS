<script setup>
import routes from '../router/routes.js'
import { useRouter } from 'vue-router'

const visibleRoutes = routes.getRoutes()
const router = useRouter()
const handleSelect = key => {
	router.push(key)
	console.log(key)
}
</script>

<template>
	<el-row id="globalHeader">
		<el-col>
			<el-menu mode="horizontal" @select="handleSelect">
				<el-menu-item v-for="items in visibleRoutes" :key="items.path" :index="items.path">
					{{ items.name }}
				</el-menu-item>
			</el-menu>
		</el-col>
	</el-row>
</template>

<style scoped></style>
