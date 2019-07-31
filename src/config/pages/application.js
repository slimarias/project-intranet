//Layout container
import master from 'src/layouts/master'
import config from 'src/layouts/config'
import notFound from 'src/layouts/404'

//Middleware
import auth from '@imagina/quser/_router/middlewares/auth'
import access from '@imagina/quser/_router/middlewares/access'

export default {
	//Home Page
	home: {
		permission: null,
		activated: true,
		path: '/home',
		name: 'app.home',
		layout: require('src/layouts/index').default,
		containerLayout: master,
		title: 'sidebar.pageHome',
		icon: 'fa fa-th',
		middleware: [auth]
	},
	//Config Page
	config: {
		permission: null,
		activated: true,
		path: '/config',
		name: 'app.config',
		layout: require('src/layouts/app/config').default,
		containerLayout: config,
		title: 'sidebar.pageConfig',
		icon: 'fas fa-home',
	},
  // Custom pages
  calendary: {
    permission: null,
    activated: true,
    path: '/calendary',
    name: 'app.calendary',
    layout: require('src/layouts/pages/calendary').default,
    containerLayout: master,
    title: 'sidebar.calendary',
    icon: 'fa fa-calendar-alt',
    middleware: [auth]
  },
  directory: {
    permission: null,
    activated: true,
    path: '/directory',
    name: 'app.directory',
    layout: require('src/layouts/pages/directory').default,
    containerLayout: master,
    title: 'sidebar.directory',
    icon: 'fa fa-address-card',
    middleware: [auth]
  },
  messenger: {
    permission: null,
    activated: true,
    path: '/messenger',
    name: 'app.messenger',
    layout: require('src/layouts/pages/messenger').default,
    containerLayout: master,
    title: 'sidebar.messenger',
    icon: 'fa fa-comment-alt',
    middleware: [auth]
  },
  news:{
    permission: null,
    activated: true,
    path: '/news',
    name: 'app.news',
    layout: require('src/layouts/pages/news').default,
    containerLayout: master,
    title: 'sidebar.news',
    icon: 'fa fa-newspaper',
    middleware: [auth]
  },
  new:{
    permission: null,
    activated: true,
    path: '/news/:categoryId',
    name: 'app.new',
    layout: require('src/layouts/pages/new').default,
    containerLayout: master,
    title: 'sidebar.news',
    icon: 'fa fa-newspaper',
    middleware: [auth]
  },
	//Not found Page
	notFound: {
		permission: null,
		activated: true,
		path: '*',
		name: 'app.not.found',
		layout: null,
		containerLayout: notFound,
		title: 'sidebar.pageNotFound',
		icon: 'fas fa-chart-bar'
	},
}
