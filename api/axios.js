import axios from "axios";


const callApi = axios.create({
    baseURL: 'https://api.example.com'
  });
  
  // Alter defaults after instance has been created
//   instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
callApi.defaults.withCredentials = true;
  export default callApi;