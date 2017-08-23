import {
  GraphQLList
} from 'graphql'

import cidadeType from '../../types/cidade'
import getProjection from '../../get-projection'
import CidadeModel from '../../../models/cidade'

export default {
  type: new GraphQLList(cidadeType),
  args: {},
  resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0])

    return CidadeModel
      .find()
      .sort('nome')
      .select(projection)
      .exec()
      
  }
}