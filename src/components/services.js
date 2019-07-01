const API_URL = 'https://mate-academy.github.io/phone-catalogue-static/api';

const PhonesService = {
  async getAll() {
    try {
      const response = await window.fetch(API_URL + '/phones.json');
      return await response.json();
    } catch (error) {
      return [];
    }
  },
  async getById(id) {
    return await window.fetch(API_URL + '/phones/' + id + '.json')
      .then((response) => response.json())
  }
}

export default PhonesService;