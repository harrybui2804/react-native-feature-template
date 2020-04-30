import axios from 'axios';
import ApiConstants from './ApiConstants';
import getAuthToken from '../lib/getAuthToken';

axios.defaults.headers = {
  'Cache-Control': 'no-cache, no-store, must-revalidate',
  Pragma: 'no-cache',
  Accept: 'application/json',
};

export default async function api(
  path,
  method,
  dataOrParams = null,
  useIDToken = true,
  headersOverwrite = null,
  optionsOverwrite = null,
  external = false,
) {
  if (!method) {
    method = 'get';
  }
  let headers = {
    'cache-control': 'no-cache',
    'Content-Type': 'application/json',
  };
  if (useIDToken) {
    const token = await getAuthToken();
    headers.Authorization = `JWT ${token}`;
  }
  if (headersOverwrite) {
    headers = {
      ...headers,
      ...headersOverwrite,
    };
  }
  let url = external ? path : ApiConstants.BASE_URL + path;
  let options = {
    headers,
    method,
    url,
  };
  if (optionsOverwrite) {
    options = {
      ...options,
      ...optionsOverwrite,
    };
  }
  if (dataOrParams) {
    if (method === 'get') {
      options.params = dataOrParams;
    } else {
      options.data = dataOrParams;
    }
  }
  return axios(options);
}
