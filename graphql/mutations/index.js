import pessoa from './pessoa'
import cidade from './cidade'
import mensagem from './mensagem'

export default {
  ...pessoa,
  ...cidade,
  ...mensagem
}
