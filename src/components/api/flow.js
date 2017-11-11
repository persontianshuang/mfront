import {root_url} from './config'
import axios from 'axios'


export function getFlow() {
  const url = root_url + 'videos'
  return axios.get(url)
}



