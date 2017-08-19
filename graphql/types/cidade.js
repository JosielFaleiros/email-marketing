import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Cidade',
  fields: {
    _id: {
      type: GraphQLID
    },
    nome: {
      type: GraphQLString
    }
  }
});
