import Constants from "expo-constants";
const { manifest } = Constants;
const api = `http://${manifest.debuggerHost
  .split(":")
  .shift()}/BEFSRN`;
  console.log(api);
export default {
  api,
};
// http://192.168.1.7/codehero/api
// http://192.168.1.2/BEFSRN/index_tmp.php