const axios = require("axios");

async function nutrition(ingredients, header) {
  
  const nutritionInfo = await axios
    .post(
      "https://trackapi.nutritionix.com/v2/natural/nutrients",
      ingredients,
      { headers: header }
    )
    .then((response) => response.data.foods);

  return nutritionInfo
}

module.exports = nutrition;
