const { Dog, Temperament } = require("../db");

const getIdDog = async (id) => {
  try {
    const consulta = await Dog.findByPk(id, {
      include : {
        model : Temperament
      }
    });
    return consulta;
  } catch (e) {
    return res.status(404).json({ e });
  }
};

module.exports = getIdDog;
