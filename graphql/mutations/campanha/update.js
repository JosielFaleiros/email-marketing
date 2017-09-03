//codigo antigo, não pertence a baseline

import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';
import campanhaInputType from '../../types/campanha-update-input'
import campanhaType from '../../types/campanha';
import getProjection from '../../get-projection';
import CampanhaModel from '../../../models/campanha';

export default {
  type: campanhaType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(campanhaInputType)
    }
  },
  async resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);
    const updatedCampanha = await CampanhaModel
      .findByIdAndUpdate(params.data._id, params.data, {
        select: projection
      })
      .populate('mensagem')
      .exec();

    if (!updatedCampanha) {
      throw new Error('Error removing campanha');
    }

    return updatedCampanha;
  }
};
