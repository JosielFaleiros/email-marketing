import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Cidade',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    nome: {
      type: GraphQLString
    }
  }
});
