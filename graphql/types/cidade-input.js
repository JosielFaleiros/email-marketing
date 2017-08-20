import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'CidadeInput',
  fields: {
    nome: {type: new GraphQLNonNull(GraphQLString)}
  }
});
