import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'CidadeInput',
  fields: {
    _id: {type: GraphQLID},
    nome: {type: new GraphQLNonNull(GraphQLString)}
  }
});
