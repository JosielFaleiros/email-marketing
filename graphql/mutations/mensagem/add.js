import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql'
import getProjection from '../../get-projection'
import mensagemInputType from '../../types/mensagem-input'
import mensagemType from '../../types/mensagem'
import MensagemModel from '../../../models/mensagem'
import PessoaModel from '../../../models/pessoa'
export default {
  type: mensagemType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(mensagemInputType)
    }
  },
  async resolve (root, params, options) {
    // params.data.pessoas = await PessoaModel
    //     .find({
    //       cidade: params.data.cidades
    //     })
    //     .populate('cidade')
    //     .exec();
        
    return new MensagemModel(params.data);
    // const mensagemModel = new MensagemModel(params.data);
    // const newMensagem = await mensagemModel.save();

    // if (!newMensagem) {
    //   throw new Error('Error adding new comment');
    // }
    // return newMensagem;
  }
}
