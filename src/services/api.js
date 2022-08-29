import {BASE_URL} from './constants';

class API {
  #baseUrl = '';

  constructor(baseUrl) {
    this.#baseUrl = baseUrl;
  }

  async get(url) {
    return await fetch(`${this.#baseUrl}${url}`);
  }
}

const api = new API(BASE_URL);

export default api;
