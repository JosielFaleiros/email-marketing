import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import {Types} from 'mongoose';

import cidadeType from '../../types/cidade';
import getProjection from '../../get-projection';
import CidadeModel from '../../../models/cidade';

export default {
  type: cidadeType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return CidadeModel
      .findById(params.id)
      .select(projection)
      .exec();
  }
};
