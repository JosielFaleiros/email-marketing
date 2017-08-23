import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull
} from 'graphql'

export default new GraphQLInputObjectType({
  name: 'CidadeInput',
  fields: {
    nome: {type: new GraphQLNonNull(GraphQLString)}
  }
})