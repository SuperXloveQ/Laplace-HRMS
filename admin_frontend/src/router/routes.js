import { createMemoryHistory, createRouter } from 'vue-router'
import NzVue from '../components/NzVue.vue'
import EmployeeManageView from '../view/EmployeeManageView.vue'
import OrganizationManageView from '../view/OrganizationManageView.vue'
import RecruitmentManageView from '../view/RecruitmentManageView.vue'
import AttendanceManageView from '../view/AttendanceManageView.vue'
import SocialSecurityManageView from '../view/SocialSecurityManageView.vue'
import SalaryManageView from '../view/SalaryManageView.vue'
import PerformanceManageView from '../view/PerformanceManageView.vue'

const routes = [
	{
		path: '/',
		name: '工作台',
		component: NzVue,
	},
	{
		path: '/organization',
		name: '组织管理',
		component: OrganizationManageView,
	},
	{
		path: '/recruitment',
		name: '招聘管理',
		component: RecruitmentManageView,
	},
	{
		path: '/employee',
		name: '员工管理',
		component: EmployeeManageView,
	},
	{
		path: '/attendance',
		name: '考勤管理',
		component: AttendanceManageView,
	},
	{
		path: '/social-security',
		name: '社保管理',
		component: SocialSecurityManageView,
	},
	{
		path: '/salary',
		name: '薪资管理',
		component: SalaryManageView,
	},
	{
		path: '/performance',
		name: '绩效管理',
		component: PerformanceManageView,
	},
]

const router = createRouter({
	history: createMemoryHistory(),
	routes,
})

export default router
