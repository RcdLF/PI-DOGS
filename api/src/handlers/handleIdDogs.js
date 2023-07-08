const getIdDog = require("../controllers/getIdDog");

const handleIdDog = async (req, res) => {
  try {
    const { id } = req.params;
    const IdDog = await getIdDog(id);

    res.status(200).json({ IdDog });
  } catch (error) {
    res.status(400).json({ e: error.message });
  }
};

module.exports = handleIdDog;
