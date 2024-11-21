// 서버 API 호출용 유틸 함수
import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_SERVER_URL;

const requestApi = async (url, method, options) => {
  try {
    const data = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: method,
      url:  BASE_URL + url,
      ...options,
    }

    const response = await axios(data);
    return response.data;
  } catch (error) {

  }
}

export default requestApi;