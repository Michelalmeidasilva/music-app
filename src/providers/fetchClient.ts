import axios from "axios";
import Config from "react-native-config";

const provider = axios.create({
  baseURL: Config.API_URL_MUSIXMATCH,
});

provider.interceptors.request.use(async ({ headers, params, ...config }) => {
  return {
    ...config,
    params: {
      apikey: Config.API_KEY_CREDENTIALS,
    },
  };
});

provider.interceptors.response.use(
  (response) => response?.data,
  (err) => Promise.reject(err?.response?.data)
);

export default provider;
