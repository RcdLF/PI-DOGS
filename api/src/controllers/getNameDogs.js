const { Dog, Temperament } = require("../db");
const { Op } = require("sequelize");

const getNameDogs = async (name) => {
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  console.log(name);

  const allDogs = await Dog.findAll({
    where: {
      name: {
        [Op.startsWith]: name,
      },
    },
    include: [Temperament],
  });

  return allDogs;
};

module.exports = getNameDogs;
