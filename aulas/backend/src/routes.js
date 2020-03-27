const expres = require('express');

const OngController = require('./controller/OngController')
const IncidentsController = require('./controller/IncidentsController')
const ProfilleController = require('./controller/ProfileController')
const SessionController = require('./controller/SessionController')

const routes = expres.Router();

routes.get('/ong', OngController.index);
routes.post('/ong', OngController.create);

routes.post('/sessions', SessionController.create);


routes.get('/profiles', ProfilleController.index)
    
routes.get('/incidents', IncidentsController.index)
routes.post('/incidents', IncidentsController.create)
routes.delete('/incidents/:id', IncidentsController.delete)

module.exports = routes; // deixar as rotas disponivel



    