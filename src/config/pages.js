import corePages from '@imagina/qsite/_config/master/pages'//Core pages [Do not remove]

let responsePages = {
  ...corePages,
  //Add here more pages...#example
  /*groupName : {
    routeName: {//Page home
      permission: null,
      activated: true,
      path: '/home',
      name: 'route.name',
      layout: () => import('path'),
      page: () => import('path'),
      title: 'route.title',
      icon: 'icon name',
      authenticated: Boolean
    }
  }*/
}

//======= Add or update pages
//#example: responsePages.<title-page> = <'title'>

responsePages.app.home.page = () => import('@imagina/qintranet/_pages/admin/dashboard')
export default responsePages
