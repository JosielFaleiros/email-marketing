import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import {Types} from 'mongoose';

import pessoaType from '../../types/pessoa';
import getProjection from '../../get-projection';
import PessoaModel from '../../../models/pessoa';

export default {
  type: pessoaType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return PessoaModel
      .findById(params.id)
      .select(projection)
      .exec();
  }
};
