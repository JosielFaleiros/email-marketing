import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import cidadeInputType from '../../types/cidade-input';
import CidadeModel from '../../../models/cidade';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(cidadeInputType)
    }
  },
  async resolve (root, params, options) {
    const cidadeModel = new CidadeModel(params.data);
    const newCidade = await cidadeModel.save();

    if (!newCidade) {
      throw new Error('Error adding new blog post');
    }
    return true;
  }
};
