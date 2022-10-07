<script setup>
import { ref, reactive, watch, onMounted } from "vue";
import { photosApi, page_number, searchPhotos } from "./photosApi";

const favorite = ref([]);
let photos = photosApi;
let page_num = page_number;
let search_text = ref("");
const search = ref(null);
const zoomImg = ref(false);
const favoritePopUp = ref(false);
let state = reactive({
  showButton: false,
});

const searchImages = () => {
  if (search.value === "") {
    alert("Please enter the some text");
    return;
  }
  setTimeout(() => {
    state.showButton = true;
  }, 2000);
  searchPhotos(search.value, page_num);
  clearGallery();
};

const addToFavorite = (photo) => {
  favorite.value.push(photo);
  console.log(favorite);
};

watch(
  favorite,
  (newVal) => {
    localStorage.setItem("favorite", JSON.stringify(newVal));
  },
  {
    deep: true,
  }
);

onMounted(() => {
  favorite.value = JSON.parse(localStorage.getItem("favorite")) || [];
});

const clearGallery = () => {
  search_text = "";
  page_num = 1;
};

const removePhoto = (photo) => {
  favorite.value = favorite.value.filter((t) => t !== photo);
};

const showMoreButton = () => {
  if (!state.showButton) {
    page_num++;
  } else {
    if (search.value === "") return;
    page_num++;
    searchPhotos(search.value, page_num);
  }
};
</script>

<template>
  <div class="body">
    <div class="navi-bar">
      <div class="navi-bar_items">
        <button @click="favoritePopUp = true" class="nav-btn count">
          Favorite
          <img src="" alt="" />
          <p v-if="favorite.length > 0" class="favorite_count">
            {{ favorite.length }}
          </p>
        </button>
      </div>
      <div class="navi-bar_items">
        <button class="nav-btn">
          Popular
          <img src="" alt="" />
        </button>
      </div>
      <div class="navi-bar_items">
        <button class="nav-btn">
          New
          <img src="" alt="" />
        </button>
      </div>
      <div class="navi-bar_items">
        <a class="link" href="">
          <img src="" alt="" />
        </a>
      </div>
    </div>
    <input
      class="searchImg"
      v-model="search"
      @keyup="searchImages"
      placeholder="Search your image"
    />
    <div class="container">
      <div class="photos" v-for="photo in photos" :key="photo.id">
        <div class="images-conatiner">
          <img class="images add" :src="photo.src.large" :alt="photo.alt" />
        </div>
        <div class="add-btn" @click="addToFavorite(photo.src)">ADD</div>
      </div>
    </div>
    <div class="btn-container">
      <button class="btn" @click="showMoreButton" v-show="state.showButton">
        More
      </button>
    </div>
    <div v-if="favoritePopUp" class="popup-container">
      <div class="popup-container_baground"></div>

      <div class="popup-container_card">
        <p class="popup-collections-length">
          In your collections {{ favorite.length }} photo
        </p>
        <button @click="favoritePopUp = false" class="card-btn">X</button>
        <ul class="favorite-list">
          <li class="list_items" v-for="fav in favorite" :key="fav.id">
            <div>
              <img class="favorite_img" :src="fav.small" alt="" />
            </div>
            <div @click="removePhoto(fav)" class="trash">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 trash_icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
</style>