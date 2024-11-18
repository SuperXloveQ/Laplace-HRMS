import { createMemoryHistory, createRouter } from 'vue-router'
import NzVue from '../components/NzVue.vue'

const routes = [
	{
		path: '/',
		name: '工作台',
		component: NzVue,
	},
	{
		path: '/organization',
		name: '组织管理',
		component: NzVue,
	},
	{
		path: '/recruitment',
		name: '招聘管理',
		component: NzVue,
	},
	{
		path: '/employee',
		name: '员工管理',
		component: NzVue,
	},
	{
		path: '/attendance',
		name: '考勤管理',
		component: NzVue,
	},
	{
		path: '/social-security',
		name: '社保管理',
		component: NzVue,
	},
	{
		path: '/salary',
		name: '薪资管理',
		component: NzVue,
	},
	{
		path: '/performance',
		name: '绩效管理',
		component: NzVue,
	},
]

const router = createRouter({
	history: createMemoryHistory(),
	routes,
})

export default router
