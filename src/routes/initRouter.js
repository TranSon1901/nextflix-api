import usersRouter from './users.js'

const initRouter= (app) =>{
   app.use('/api/users', usersRouter)
}

export default initRouter