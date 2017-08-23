import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} from 'graphql'

export default new GraphQLInputObjectType({
  name: 'PessoaInput',
  fields: {
    cidade: {type: new GraphQLNonNull(GraphQLID)},
    email: {type: new GraphQLNonNull(GraphQLString)}
  }
})