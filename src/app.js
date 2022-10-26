require('dotenv').config()
const koa = require('koa')
const logger = require('koa-logger')
const app = new koa()
const ApolloServer=require('./graphql')
const route=require('./route/index')
const cors=require('@koa/cors')
const { authenticateToken } = require('./lib/utils')
const dbConnection=require('./database/db')


dbConnection()
app.use(logger())
app.use(cors({
    origin:'https://pizza7311.me',
    credentials:true
}))
app.use(authenticateToken())
app.use(route.routes())

ApolloServer(app)
//app.listen(5000,()=>console.log('server stated'))

module.exports=app
