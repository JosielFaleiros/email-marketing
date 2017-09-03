import pessoa from './pessoa'
import cidade from './cidade'
import mensagem from './mensagem'
import campanha from './campanha'

export default {
  ...pessoa,
  ...cidade,
  ...mensagem,
  ...campanha
}
