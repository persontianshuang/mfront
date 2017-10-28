import {root_url} from './config'
import axios from 'axios'

export function getSentence(id) {
  const url = root_url + 'fs/?flow=' + id
  return axios.get(url)
}



