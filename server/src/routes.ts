import { Router } from 'express'
import { CarController } from './controllers/car-controller'

const routes = Router()

routes.post('/cars', new CarController().create)
routes.get('/cars/:id', new CarController().findById)
routes.delete('/cars/:id', new CarController().deleteById)
routes.get('/cars', new CarController().findAll)
routes.put('/cars/:id', new CarController().update)

export default routes