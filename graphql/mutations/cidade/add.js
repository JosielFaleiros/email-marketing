import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import cidadeInputType from '../../types/cidade-input';
import cidadeType from '../../types/cidade';
import CidadeModel from '../../../models/cidade';

export default {
  type: cidadeType,
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
    return newCidade;
  }
};
