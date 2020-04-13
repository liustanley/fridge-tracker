import { API_URL } from "../constants";

export const createIngredient = (ingredient) =>
  fetch(`${API_URL}/ingredients`, {
    method: "POST",
    body: JSON.stringify(ingredient),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());

export const findAllIngredients = async () => {
  const response = await fetch(`${API_URL}/ingredients`);
  return await response.json();
};

export const findAllUserIngredients = async (username) => {
  const response = await fetch(`${API_URL}/users/${username}/ingredients`);
  return await response.json();
}
