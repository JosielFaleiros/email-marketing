import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID
} from 'graphql'

import GraphQLDate from 'graphql-date' 
import GraphQLMensagem from './mensagem'

export default new GraphQLObjectType({
  name: 'Campanha',
  fields: {
    _id: {type: GraphQLID},
    nome: {type: GraphQLString},
    data: {type: GraphQLDate},
    mensagens: {type: new GraphQLList(GraphQLMensagem)}
  }
})
