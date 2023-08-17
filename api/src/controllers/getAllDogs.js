const { Dog, Temperament } = require("../db");
const axios = require("axios");
const API_KEY = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?key=${API_KEY}`;

const getAllDogs = async () => {
  try {
    const consult = await Dog.findAll();

    if (!consult.length) {
      const allDogs = await axios.get(URL);

      await allDogs.data.map(async (e) => {
        const newDog = await Dog.create({
          name: e.name,
          image: e.reference_image_id,
          height: e.height.imperial,
          weight: e.weight.imperial,
          life_span: e.life_span,
          createdByDB: false,
        });

        if (e.temperament) {
          const split = e.temperament?.split(",");
          for (const temp of split) {
            const dbData = await Temperament.findOne({
              where: { name: temp.trim() },
            });
            await newDog.addTemperament(dbData);
          }
        }
      });

      return Dog.findAll({ include: [Temperament] });
    } else {
      return Dog.findAll({ include: [Temperament] });
    }
  } catch (error) {
    return error;
  }
};

module.exports = getAllDogs;
