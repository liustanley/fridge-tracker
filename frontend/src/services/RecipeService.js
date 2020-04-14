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

export const updateRecipe = async (id, recipe, username) => {
  const response = await fetch(`${API_URL}/users/${username}/recipes/${id}`, {
    method: "PUT",
    body: JSON.stringify(recipe),
    headers: {
      "content-type": "application/json"
    }
  });
  return await response.json();
};

export const deleteRecipe = async (id, username) => {
  const response = await fetch(`${API_URL}/users/${username}/recipes/${id}`, {
    method: "DELETE"
  });
  return await response.json();
};