import AxiosServices from "./AxiosServices";
import Configuration from "../Configuration/Configuration";

const axiosService = new AxiosServices();

export default class Authentication {
  AdminSignUp(data) {
    var Url = Configuration.AdminSignUp;
    return axiosService.post(Url, data, false);
  }
}
