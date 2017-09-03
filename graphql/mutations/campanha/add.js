import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql'
import getProjection from '../../get-projection'
import campanhaInputType from '../../types/campanha-input'
import campanhaType from '../../types/campanha'
import CampanhaModel from '../../../models/campanha'
import PessoaModel from '../../../models/pessoa'
import MensagemModel from '../../../models/mensagem'
export default {
  type: campanhaType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(campanhaInputType)
    }
  },
  async resolve (root, params, options) {

    params.data.mensagens = await params.data.mensagens.map( (mensagem) => {
      const mensagemModel = new MensagemModel(mensagem)
      return mensagemModel.save().then((res)=>{
        return res
      })
    })

    params.data.mensagens = await Promise.all(params.data.mensagens)
    const campanhaModel = new CampanhaModel(params.data)
    const newCampanha = await campanhaModel.save()
    if (!newCampanha) {
      throw new Error('Error adding new comment')
    }
    return newCampanha;
    
    
  }
}
