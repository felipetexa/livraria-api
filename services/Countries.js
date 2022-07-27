const axios = require('axios');

const countriesApi = axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
  //timeout não é necessário aqui
  //headers seria outro parametro, caso a api precisasse de um token
})

const methods = {
  getByAlphaCode: async (code) => {
    try{
      const response = await countriesApi.get(`alpha/${code}`);

      if(response.status !== 200) {
        throw new Error('Erro ao buscar país');
      }

     return response.data;

    }catch(error){
      console.log(error);

    }
  }
}

// methods.getByAlphaCode('br');

module.exports = methods;