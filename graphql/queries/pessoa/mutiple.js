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
  //o que vai ser retornado na query
  type: new GraphQLList(pessoaType),

  //argumentos da query
  args: {
    cidades: {
      name: 'cidades',
      type: new GraphQLNonNull(new GraphQLList(GraphQLID))
    }
  },

  //query
  resolve(root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return PessoaModel //mongoose model
      .find({cidade: params.cidades}) //filtra pelas cidades recebidas nos parametros
      .populate('cidade') //para a cidade poder ser acessada na query
      .select(projection)
      .exec();

  }
};
