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
    icon: 'fas fa-th',
    to: 'inicio',
    separator: true,
  },
  /*User*/
  mensajeria: {
    title: 'Mensajeria',
    icon: 'fas fa-comment-alt',
    to: 'mensajeria',
    patch:'/mensajeria',
    separator: true,
  },
  noticias: {
    title: 'Noticias',
    icon: 'fas fa-newspaper',
    to: 'noticias',
    separator: false,
  },
  /*User*/
  directorio: {
    title: 'Directorio Corporativo',
    icon: 'fas fa-address-card',
    to: 'directorio',
    separator: true,
  },
  calendario: {
    title: 'Calendario eventos',
    icon: 'fas fa-calendar-alt',
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
