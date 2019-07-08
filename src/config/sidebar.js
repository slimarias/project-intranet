/**
 * Config for items in Menu
 */

/*
*{
  title: 'Assignment',
  icon: 'fas fa-users-cog',
  to: 'user.users.assignment',
  can:'user.users.index'
},*/

export default {
  /*home*/
  panel: {
    title: 'Panel de Control',
    icon: 'fa fa-th',
    to: 'inicio',
    separator: true,
  },
  /*User*/
  mensajeria: {
    title: 'Mensajeria',
    icon: 'fa fa-comment-alt',
    to: 'mensajeria',
    patch:'/mensajeria',
    separator: true,
  },
  noticias: {
    title: 'Noticias',
    icon: 'fa fa-newspaper',
    to: 'noticias',
    separator: false,
  },
  /*User*/
  directorio: {
    title: 'Directorio Corporativo',
    icon: 'fa fa-address-card',
    to: 'directorio',
    separator: true,
  },
  calendario: {
    title: 'Calendario eventos',
    icon: 'fa fa-calendar-alt',
    to: 'calendario',
    separator: true,
  },
  /*logout*/
  logout: {
    title: 'Cerrar Sesion',
    icon: 'fas fa-sign-out-alt',
    to: 'auth.logout'
  }



}
