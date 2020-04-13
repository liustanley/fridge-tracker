import { API_URL } from "../constants";

export const createRecipeForUser = (recipe, username) =>
  fetch(`${API_URL}/users/${username}/recipes`, {
    method: "POST",
    body: JSON.stringify(recipe),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());

export const findAllRecipesForUser = async (username) => {
  const response = await fetch(`${API_URL}/users/${username}/recipes`);
  return await response.json();
};