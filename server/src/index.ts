import express from 'express'
import { AppDataSource } from './data-source'
import routes from './routes'

AppDataSource.initialize().then(() => {
    const app = express()
    var cors = require('cors')
    app.use(cors())

    app.use(express.json())

    app.use(routes)

    return app.listen(process.env.PORT)
})