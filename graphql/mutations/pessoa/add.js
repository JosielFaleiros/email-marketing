import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql'

import pessoaInputType from '../../types/pessoa-input'
import pessoaType from '../../types/pessoa'
import PessoaModel from '../../../models/pessoa'

export default {
  type: pessoaType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(pessoaInputType)
    }
  },
  async resolve (root, params, options) {
    const pessoaModel = new PessoaModel(params.data);
    const newPessoa = await pessoaModel.save();

    if (!newPessoa) {
      throw new Error('Error adding new comment')
    }
    return PessoaModel.findOne(newPessoa).populate('cidade').exec()
  }
}
