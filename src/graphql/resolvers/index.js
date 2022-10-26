const category = require('./category')
const post = require('./post')
const tag=require('./tag')
const postMutation=require('../mutation/post')

const resolvers = {
    Query: {
        ...category,
        ...post,
        ...tag
    },
    Mutation:{
        ...postMutation
    }
}

module.exports = resolvers