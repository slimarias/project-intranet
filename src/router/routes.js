import Route from 'vue-routisan'
import user from '@imagina/quser/_router/routes' //Routes module QUser
import auth from '@imagina/quser/_router/middlewares/auth' //Middleware auth

/*VIEWS*/
import master from 'app/src/layouts/master'
import blank from 'app/src/layouts/blank'


/*=============== Route Redirects ===========================*/
Route.redirect('/', '/inicio');

/*===================== Routes ============================*/
/*Pages*/
Route.view('/', master)
  .children(() => {
      Route.view('/inicio', require('../layouts/pages/inicio').default).options({
        name: 'inicio'
      }),
      Route.view('/mensajeria', require('../layouts/pages/mensajeria').default).options({
        name: 'mensajeria'
      }),
	
		Route.view('/mensajeria', require('../layouts/pages/mensajeria').default).options({
        name: 'mensajeria'
      }),

		Route.view('/calendario', require('../layouts/pages/calendario').default).options({
        name: 'calendario'
      }),      
       Route.view('/directorio', require('../layouts/pages/directorio').default).options({
        name: 'directorio'
      })
    

    }
  )

export default Route.all()
