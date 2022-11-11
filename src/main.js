const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

const url = "http://localhost:5000/constellations";

function getAllNames() {
  axios
  .get(url)
  .then((response) => {
    const result = response.data.map((e) => e.name);
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  })
  
}

function getConstellationsByQuadrant(quadrant) {
  axios
  .get(url)
  .then((response) => {
    const result = response.data.filter((e) => e.quadrant === quadrant);
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  })
}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};
