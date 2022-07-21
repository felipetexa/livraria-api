const { Livro } = require('../models');

const livrosV1Controller = {
  showAllBooks: async (req, res) => {
    const books = await Livro.findAll();

    return res.status(200).json(books);
  },
  showOneBook: async (req, res) => {
    try{
      const book = await Livro.findByPk(req.params.id);   

      if(!book) {
        return res.status(404).json({
          error: true, message: 'Livro não encontrado'
        });
      }
      return res.status(200).json(book);
    }
    catch(error){
      return res.status(500).json({error: true, message: 'Sistema indisponível, tente novamente mais tarde'});
    }
  },
  store: async (req, res) => {
    const data = req.body;

    //criar logica

    return res.status(201).json(data);
  }
}

module.exports = livrosV1Controller;