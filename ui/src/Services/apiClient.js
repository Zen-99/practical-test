import axios from "axios";

class ApiClient {
  async request({ endpoint, method = `GET`, data = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`;

    const headers = {
      "Content-Type": "application/json",
      // Authorization: this.token ? `Bearer ${this.token}` : "",
    };
    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }
    console.log("hello", headers, data, url, method);
    try {
      const res = await axios({ url, method, data, headers });
      // console.log(res)
      return { data: res.data, error: null };
    } catch (error) {
      console.error("APIclient.makeRequest.error:");
      console.error({ errorResponse: error.response });
      const message = error?.response?.data?.error?.message;
      return { data: null, error: message || String(error) };
    }
  }
  async login(credentials) {
    return await this.request({
      endpoint: `Practice/bizlogic/user/login`,
      method: `POST`,
      data: credentials,
    });
  }
}
const API = new ApiClient(
  process.env.REACT_APP_REMOTE_HOST_URL || "http://192.168.1.11"
);

export default API;
