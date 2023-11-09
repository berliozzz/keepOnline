import {ping} from './marketServerManager.js'
import {market} from './config.js'

const pingPong = () => {
  ping()
    .then()
    .catch(err => {
      if (market.showLog) console.log('pingPong error: ' + err.message)
    })
}

pingPong()
setInterval(() => pingPong(), 60 * 1000)