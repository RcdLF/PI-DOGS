const { Temperament } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?${API_KEY}`;

const getAllTemperament = async () => {
  const consulta = Temperament.findAll();

  if (!consulta.length) {
    const apiT = await axios.get(
      URL
    );
    const arr = apiT.data.map((i) => i.temperament);
    const arrT = arr.toString().trim().split(", ");
    const myArrClean = arrT.toString().split(',').filter(Boolean)

    myArrClean.forEach((i) => {
      Temperament.findOrCreate({
        where: { name: i },
      });
    });
    const allTemperaments = await Temperament.findAll();
    return allTemperaments;
  } else {
    return consulta;
  }
};

module.exports = getAllTemperament;
