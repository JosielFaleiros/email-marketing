import pessoa from './pessoa'
import cidade from './cidade'
import campanha from './campanha'

export default {
  ...pessoa,
  ...cidade,
  ...campanha
}

