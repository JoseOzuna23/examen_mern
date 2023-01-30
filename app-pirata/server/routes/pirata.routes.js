const ControladorPiratas = require('../controllers/pirata.controllers')

module.exports = (app) =>{
    app.get('/api/obtenerpiratas', ControladorPiratas.obtenerPiratas)
    app.post('/api/crearpirata', ControladorPiratas.crearPirata)
    app.get('/api/unapirata/:id', ControladorPiratas.obtenerUnaPirata)
    app.delete('/api/borrarpirata/:id', ControladorPiratas.eliminarPirata)
    // app.put('/api/editarpirata/:id', authenticate,ControladorPiratas.editarPirata)
    
}