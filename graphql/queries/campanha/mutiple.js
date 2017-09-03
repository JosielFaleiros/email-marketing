import {
  GraphQLList,
  GraphQLNonNull
} from 'graphql'
import GraphQLDate from 'graphql-date'

import cidadeType from '../../types/cidade'
import getProjection from '../../get-projection'
import CidadeModel from '../../../models/cidade'
import campanhaType from '../../types/campanha'
import CampanhaModel from '../../../models/campanha'

export default {
  type: new GraphQLList(campanhaType),
  args: {
    dataInicio: {
      name: 'dataInicio',
      type: new GraphQLNonNull(GraphQLDate)
    },
    dataFim: {
      name: 'dataFim',
      type: new GraphQLNonNull(GraphQLDate)
    }
  },
  resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0])

    return CampanhaModel
      .find({$and: [
        {data: {$gte: params.dataInicio}},
        {data: {$lte: params.dataFim}}
      ]})
      .populate({
        path: 'mensagem',
        populate: {path: 'cidades'}})
      .sort('data')
      .select(projection)
      .exec()
  }
}