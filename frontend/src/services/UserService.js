import { API_URL } from "../constants";

export const createUser = user =>
  fetch(`${API_URL}/users`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "content-type": "application/json"
    }
  }).then(response => response.json());

export const findUserByUsername = username =>
  fetch(`${API_URL}/users/${username}`).then(response => response.json());