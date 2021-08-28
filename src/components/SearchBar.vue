<template>
  <div class="container">
    <form @submit.prevent="Search()" class="search-box">
      <input
        type="text"
        placeholder="What do you want to eat?"
        v-model="term"
      />
      <input type="text" placeholder="Where?" v-model="location" />
      <input type="submit" value="Search" />
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import env from "@/env.js";

export default {
  name: "SearchBar",

  setup() {
    const term = ref("");
    const location = ref("");
    const searchResults = ref({});

    const Search = () => {
      if (term.value != "" && location.value != "") {
        fetch(
          `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term.value}&location=${location.value}&sort_by=best_match&locale=tr_TR`,
          {
            headers: {
              Authorization: `Bearer ${env.apiKey}`,
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            searchResults.value = data;
            console.log(searchResults.value);
          });
      } else {
        alert("Arama yapmadan önce gerekli alanları doldurunuz.");
      }
    };

    return {
      term,
      location,
      Search,
      searchResults,
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  margin-bottom: 20px;
}
.search-box {
  padding-top: 10px;
  padding-right: 30px;
  padding-bottom: 20px;
  padding-left: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.search-box input {
  margin-right: 15px;
  display: block;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.search-box input[type="text"] {
  width: 100%;
  max-width: 1000px;
  font-size: 18px;
  text-overflow: ellipsis;
  padding: 10px 16px;
  border-radius: 8px;
  transition: 0.4s;
  color: #fff;
  background-color: #212121;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 767px) {
    font-size: 15px;
  }
}

.search-box input::placeholder {
  color: #e7e7e7;
}

.search-box input:focus {
  box-shadow: 8px 3px 6px #00000033;
}

.search-box input[type="submit"] {
  width: 100%;
  max-width: 100px;
  padding: 10px 16px;
  font-size: 18px;
  text-overflow: ellipsis;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.4s;
  color: #e7e7e7;
  background-color: #212121;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 767px) {
    font-size: 15px;
  }
}
.search-box input:active {
  background-color: #272727;
}
</style>
