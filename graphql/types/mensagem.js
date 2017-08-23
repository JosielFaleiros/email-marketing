import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql'

import GraphQLPessoa from './pessoa'

export default new GraphQLObjectType({
  name: 'Mensagem',
  fields: {
    pessoas: {
      type: new GraphQLList(GraphQLPessoa)
    },
    mensagem: {
      type: GraphQLString
    }
  }
})
