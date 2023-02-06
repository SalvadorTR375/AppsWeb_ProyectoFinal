// Como le decimos a 'app.js' que las RUTAS estan definidas en otro lado?
/* Bueno. podemos hacerlo de esta forma : 
    let indexRoutes = require("../routes/routeindex")
*/

// Archivo de rutas
let express = require("express");
let router = express()  // Instancia de express 

// Tengo que importar el Schema de 'Users'
let User = require("../models/User")

router.get("/", function(req, res){
    res.render("signup")
})

// Para enviarle datos al server, es por medio de un POST
// Si el cliente me esta enviando una peticion POST a esta ruta ('/sign_up'), lo primero que tengo
// que hacer es recuperar la info. La info viene en el CUERPO de la peticion.

// Agregamos nuevo usuario a la base de datos
router.post('/sign_up', async function(req, res){ // async sirve para que el codigo se detenga, hasta que se agregue el usuario
    
    let user = new User(req.body)
    await user.save()
    res.redirect("/")
})

module.exports = router // Esto es para que todos los objetos 'app' se puedan importar despues
                        // en otro lugar, el cual seria 'app.js'