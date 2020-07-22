import coreSidebar from '@imagina/qsite/_config/master/sidebar'//Core sidebar [Do not remove]
import pages from 'src/config/pages' // Get Pages from config
//Add items tu sidebar
console.log(pages)
let responseSidebar = [
  //...coreSidebar,
  //Add here more sidebar elements. #Example
  /*{
  title: "title",
  icon: "fas fa-icon",
  children: [
    pages.groupPage.pageName, //Single Item in group items
    {//Sub group into group pages
      title: 'title',
      icon: 'fas fa-icon',
      children: [
        pages.groupPage.pageName, //Single Item in group items
      ]
    },*/
  pages.qintranet.dashboard,
  pages.qintranet.messenger,
  pages.qintranet.news,
  pages.qintranet.directory,
  pages.qintranet.events,
]

//Export sidebar
export default responseSidebar
