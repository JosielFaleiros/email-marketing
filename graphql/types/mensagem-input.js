import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'MensagemInput',
  fields: {
    _id: {type: GraphQLID},
    cidades: {type: new GraphQLNonNull(new GraphQLList(GraphQLID))},
    mensagem: {type: new GraphQLNonNull(GraphQLString)}
  }
});
