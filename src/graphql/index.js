const {ApolloServer}=require('apollo-server-koa')
const {loadSchema}=require('@graphql-tools/load')
const {GraphQLFileLoader}=require('@graphql-tools/graphql-file-loader')
const path=require('path')

module.exports=async (app)=>{
    //스키마
    const typeDefs=await loadSchema(path.join(__dirname,'../**/*.graphql'),{
        loaders:[new GraphQLFileLoader()]
    })

    const resolvers=require('../graphql/resolvers/index')
    const server=new ApolloServer({
        typeDefs,
        resolvers,
        context:({ctx})=>{
            return ctx
        },
})
    await server.start()
    server.applyMiddleware({app,cors:{origin:'https://pizza7311.me',credentials:true}})
}