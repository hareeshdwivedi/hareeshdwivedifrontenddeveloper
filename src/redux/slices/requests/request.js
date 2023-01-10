import {BASE_URL} from "../../../constants/endpoints.js";

export const request = (path) => fetch(`${BASE_URL}${path}.php`, {redirect: 'follow'})
  .then(async (response) => {
    return await response.json()
  });