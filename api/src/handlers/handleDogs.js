const getAllDogs = require("../controllers/getAllDogs");
const getNameDogs = require("../controllers/getNameDogs");
const getTemperamentById = require('../controllers/getTemperamentById')

const handleDogs = async (req, res) => {
  try {
    const { name, temperament } = req.query;
    const allDogs = await getAllDogs();

    if (name) {
      const result = await getNameDogs(name);
      return res.status(200).send(result);
    }

    if (temperament) {
      const result = await getTemperamentById(temperament);
      return res.status(200).send(result);
    }

    res.status(200).send(allDogs);
  } catch (e) {
    res.status(400).json({ e: e.message });
  }
};

module.exports = handleDogs;
