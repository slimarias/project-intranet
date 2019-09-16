export default {
  version: '1.0.0',
  isBackend : true, //Define if project is to admin
  //UI Languages
  languages : {
    default : 'es',
    availables : ['en-us', 'es']
  },
  //Modules
  modules : [
    'qhelper',
    'qcrud',
    'qchat',
    'quser',
    'qblog',
    'qevent',
    'qnotification',
    'qcommerce',
    //'qplace',
    'qmenu',
    'qmedia',
    'qslider',
    'qsite',
    'qnote',
  ],
  //Storage
  saveStorage : {
    refresh : [
      'sessionData',
      'offlineRequests',
      'notifications',
      'auth.department.id',
      'auth.role.id',
      'redirect.to.from.login',
      'site.default.locale',
      'dataAddress',
      'impersonatorData'
    ],
    logout : [
      'offlineRequests',
      'site.default.locale',
    ]
  }
}
