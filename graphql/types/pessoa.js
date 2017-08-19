import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';
import GraphQLCidade from './cidade';

export default new GraphQLObjectType({
  name: 'Pessoa',
  fields: {
    _id: {
      type: GraphQLID
    },
    cidade: {
      type: GraphQLCidade
    },
    email: {
      type: GraphQLString
    }
  }
});
