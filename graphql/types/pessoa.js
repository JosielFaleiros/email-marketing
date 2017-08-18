import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Pessoa',
  fields: {
    _id: {
      type: GraphQLID
    },
    cidade: {
      type: GraphQLID
    },
    email: {
      type: GraphQLString
    }
  }
});
