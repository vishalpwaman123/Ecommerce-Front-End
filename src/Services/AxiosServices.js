const axios = require("axios").default;

export default class AxiosServices {
  post(Url, Data, IsRequiredHeader = false, Header) {
    console.log("Url :", Url);
    console.log("Data :", Data);
    return axios.post(Url, Data, IsRequiredHeader && Header);
  }

  get(Url, IsRequiredHeader = false, Header) {
    console.log("Url :", Url);
    return axios.get(Url, IsRequiredHeader && Header);
  }
}
