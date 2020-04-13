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

export const updateUserIngredient = async (id, ingredient, username) => {
  const response = await fetch(`${API_URL}/users/${username}/ingredients/${id}`, {
    method: "PUT",
    body: JSON.stringify(ingredient),
    headers: {
      "content-type": "application/json"
    }
  });
  return await response.json();
};

export const deleteUserIngredient = async (id, username) => {
  const response = await fetch(`${API_URL}/users/${username}/ingredients/${id}`, {
    method: "DELETE"
  });
  return await response.json();
};

export const createUserIngredient = (userIngredient, username) =>
  fetch(`${API_URL}/users/${username}/ingredients`, {
    method: "POST",
    body: JSON.stringify(userIngredient),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());