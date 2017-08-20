// funcionando, porem nao pertence a baseline

import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import pessoaType from '../../types/pessoa';
import getProjection from '../../get-projection';
import PessoaModel from '../../../models/pessoa';

export default {
  type: new GraphQLList(pessoaType),
  args: {
    cidade: {
      name: 'cidade',
      type: new GraphQLList(GraphQLID)
    }
  },
  resolve(root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    if (params.cidade)
      return PessoaModel
        .find({
          cidade: params.cidade
        })
        .populate('cidade')
        .select(projection)
        .exec();
    else
      return PessoaModel
        .find()
        .populate('cidade')
        .select(projection)
        .exec();
  }
};
