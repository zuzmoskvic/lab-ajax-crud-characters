class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList (characters) {
    const allCharacters = await axios(`${this.BASE_URL}/${characters}`);
    return allCharacters.data;
  }

  async getOneRegister (characters,id) {
    const getCharacter = await axios(`${this.BASE_URL}/${characters}/${id}`);
    return getCharacter;
  }

  async createOneRegister (characters) {
    const createdCharacter = await axios.post(`${this.BASE_URL}/${characters}`);
    return createdCharacter;
  }

  async updateOneRegister (characters,id,edit) {
    const updatedCharacter = await axios.put(`${this.BASE_URL}/${characters}/${id}`,edit);
    return updatedCharacter;
  }

  async deleteOneRegister (characters,id) {
    const deletedCharacter = await axios.delete(`${this.BASE_URL}/${characters}/${id}`);
    return deletedCharacter;
  }
}
