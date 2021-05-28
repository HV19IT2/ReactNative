import axios from "axios";

import Constants from "expo-constants";
const { manifest } = Constants;
const api = `http://${manifest.debuggerHost
  .split(":")
  .shift()}/BEFSRN`;
const callApi = axios.create({
    baseURL: api
  });
  
// Alter defaults after instance has been created
//   instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
callApi.defaults.withCredentials = true;
  export default callApi;