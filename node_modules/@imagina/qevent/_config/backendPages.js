//Layout container
import master from '@imagina/qsite/_layouts/master'

export default {
  // Category List
	categories: {
		permission: null,
		activated: true,
		path: '/event/categories',
		name: 'qevent.admin.categories.index',
		page: ()=>import('@imagina/qevent/_layouts/admin/categories/index'),
        layout: () => import('@imagina/qsite/_layouts/master.vue'),
		title: 'qevent.sidebar.adminCategories',
		icon: 'fas fa-stream',
	},
  // Events List
  events: {
    permission: null,
    activated: true,
    path: '/event/events',
    name: 'qevent.admin.events.index',
    page: ()=> import('@imagina/qevent/_layouts/admin/events/index'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qevent.sidebar.adminEvents',
    icon: 'fas fa-calendar-check',
  },
  // Organizers List
  organizers: {
    permission: null,
    activated: true,
    path: '/event/organizers',
    name: 'qevent.admin.organizers.index',
    page: ()=> import('@imagina/qevent/_layouts/admin/organizers/index'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qevent.sidebar.adminOrganizers',
    icon: 'fas fa-user-tie',
  },
}
