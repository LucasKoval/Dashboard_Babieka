import Axios from 'axios';

export default async function apiCall(BASE_API_URL) {
  return await Axios(BASE_API_URL)
}