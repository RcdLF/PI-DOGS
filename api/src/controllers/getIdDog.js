const { Dog } = require("../db");

const getIdDog = async (id) => {
  try {
    const consulta = await Dog.findByPk(id);
    return consulta;
  } catch (e) {
    return res.status(404).json({ e });
  }
};

module.exports = getIdDog;
