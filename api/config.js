import Constants from "expo-constants";
const { manifest } = Constants;
const api = `http://${manifest.debuggerHost
  .split(":")
  .shift()}/FlowerShop`;
  console.log(api);
export default {
  api,
};
// http://192.168.1.7/codehero/api
// http://192.168.1.2/FlowerShop/index_tmp.php