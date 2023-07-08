const getAllTemperament = require("../controllers/getAllTemperament");

const handleTemperament = async (req, res) => {
  try {
    const allTemps = await getAllTemperament();

    res.status(200).json(allTemps);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handleTemperament;
