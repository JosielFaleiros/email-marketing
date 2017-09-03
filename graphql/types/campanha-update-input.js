import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID
  } from 'graphql'

  import GraphQLDate from 'graphql-date' 
  import GraphQLMensagem from './mensagem-input.js'
  
export default new GraphQLInputObjectType({
    name: 'CampanhaUpdateInput',
    fields: {
        _id: {type: GraphQLID},
        nome: {type: GraphQLString},
        data: {type: GraphQLDate},
        mensagem: {type: new GraphQLList(GraphQLMensagem)}
    }
})