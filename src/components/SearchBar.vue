<template>
  <div class="container">
    <router-link to="/search" class="search-box">
      <input type="text" placeholder="What do you want to eat?" />
      <input type="text" placeholder="Where?" />
      <input type="submit" value="Search" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
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
}
.search-box input:active {
  background-color: #272727;
}
</style>
