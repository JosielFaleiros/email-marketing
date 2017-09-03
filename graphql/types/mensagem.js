import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql'

import GraphQLCidade from './cidade'

export default new GraphQLObjectType({
  name: 'Mensagem',
  fields: {
    cidades: {
      type: new GraphQLList(GraphQLCidade)
    },
    mensagem: {
      type: GraphQLString
    }
  }
})
