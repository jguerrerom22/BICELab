const axios = require("axios");

class IndeconService {
  constructor() {
    const baseURL = "https://indecon.site";
    this.api = axios.create({ baseURL });
  }

  async listAll() {
    return this.api.get("/last");
  }

  async listOne(key) {
    return this.api.get(`/values/${key}`);
  }

  async listByDate(key, date) {
    return this.api.get(`/date/${key}/${date}`);
  }
}

module.exports = IndeconService;
