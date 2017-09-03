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
    name: 'CampanhaInput',
    fields: {
        _id: {type: GraphQLID},
        nome: {type: new GraphQLNonNull(GraphQLString)},
        data: {type: new GraphQLNonNull(GraphQLDate)},
        mensagens: {type: new GraphQLNonNull(new GraphQLList(GraphQLMensagem))}
    }
})