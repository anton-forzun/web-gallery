import { ref } from "vue";
import {PEXELS_API_URL,PEXELS_API_KEY} from './key'

const photosApi = ref(null);
let page_number = ref(1);


export async function searchPhotos(query, page_number) {
  const data = await fetch(
    `${PEXELS_API_URL}?query=${query}&page=${page_number}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: PEXELS_API_KEY,
      },
    }
  );
  const response = await data.json();
  photosApi.value = await response.photos;
  console.log(photosApi);
}

export { photosApi, page_number };
