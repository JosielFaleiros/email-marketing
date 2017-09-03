//codigo antigo, não pertence a baseline

import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import campanhaType from '../../types/campanha';
import getProjection from '../../get-projection';
import CampanhaModel from '../../../models/campanha';

export default {
  type: campanhaType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  async resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);
    const removedCampanha = await CampanhaModel
      .findByIdAndRemove(params._id, {
        select: projection
      })
      .exec();

    if (!removedCampanha) {
      throw new Error('Error removing campanha');
    }

    return removedCampanha;
  }
};
