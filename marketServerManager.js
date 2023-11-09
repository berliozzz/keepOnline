import axios from 'axios'
import {market} from './config.js'
axios.defaults.baseURL = market.baseUrl
axios.defaults.params = {key: market.apiKey}

export const ping = () => {
  const options = {
    method: 'GET',
    url: 'ping'
  }
  return new Promise((resolve, reject) => {
    axios(options)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}