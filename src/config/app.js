import coreApp from '@imagina/qsite/_config/master/app'

export default {
  ...coreApp,
  //isBackend : false, //Define if project is to admin
  //forceRoleAndDepartment : false,//Force to select role and department
  //UI Languages
  /*languages : {
    default : 'es',
    availables : ['en-us','es']
  },*/
  //Modules
  modules : [
    'qcrud',
    'quser',
    'qblog',
    'qcommerce',
    'qplace',
    'qform',
    'qmenu',
    'qmedia',
    'qslider',
    'qbanner',
    'qsite',
    'app'
  ],
  //Cache
  /*saveCache : {
    refresh : [
      'sessionData',
      'auth.department.id',
      'auth.role.id',
      'site.default.locale',
      'impersonatorData',
      'app.state.extra',
      'app.state.filters'
    ],
    logout : [
      'offlineRequests',
      'site.default.locale',
    ]
  },*/
  //Reset Store
  /*resetStores : [
    'quserAuth/RESET'
  ]*/
}
