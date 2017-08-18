import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Pessoa',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    cidade: {
      type: new GraphQLNonNull(GraphQLID)
    },
    email: {
      type: GraphQLString
    }
  }
});
