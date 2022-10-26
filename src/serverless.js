const dbConnection=require('./database/db')
const app=require('./app')
const serverless=require('serverless-http')
const res=serverless(app)

module.exports.handler=async (event,context)=>{
    context.callbackWaitsForEmptyEventLoop=true
    await dbConnection()

    return res(event,context)
}