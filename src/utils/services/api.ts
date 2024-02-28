import axios from 'axios'

import { baseURL } from 'src/utils/enums/endpoints'

export const api = axios.create({
  baseURL,
})
