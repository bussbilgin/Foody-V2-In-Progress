<template>
  <section class="container">
    <div class="business-cards">
      <h2>businesses near you</h2>
      <div class="business-card">
        <router-link to="/detail" href="#" class="business">
          <figure class="business__image">
            <img src="/photo.jpg" alt="Item Photo" />
          </figure>
          <div class="business__information">
            <p class="business__header">Eta Bal</p>
            <div class="business__review">
              <star-rating>star</star-rating>&emsp;
              <p class="business__review-count">Review Count</p>
            </div>
            <p class="business__category">Bal</p>
            <div class="business__address">
              <p>Cafer Ağa Mahallesi</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Business",
};
</script>

<style scoped lang="scss">
.container {
  margin-bottom: 40px;
}

.business-cards {
  h2 {
    text-align: center;
    text-transform: uppercase;
    padding: 10px;
    margin-bottom: 20px;
    border-bottom: 2px solid #ff944d;
  }
}

.business-card {
  display: flex;
  flex-wrap: wrap;
}

.business {
  max-width: 25%;
  flex: 1 1 25%;
  padding: 20px 15px;

  @media (max-width: 1024px) {
    max-width: 33%;
    flex: 1 1 33%;
  }

  @media (max-width: 767px) {
    max-width: 50%;
    flex: 1 1 50%;
  }

  &__image {
    position: relative;
    margin-bottom: 8px;
    display: block;
    box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.1);

    img {
      display: block;
      width: 100%;
      height: auto;
      max-height: 200px;
      object-fit: cover;
      border-radius: 8px 8px 0px 0px;
    }
  }

  &__information {
    max-height: 120px;
    border-radius: 0px 0px 8px 8px;
    background-color: #212121;
    box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.3);
  }

  &__header {
    font-size: 18px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 8px;
    font-weight: bold;
    color: #ffffff;
  }

  &__review {
    font-size: 14px;
    display: flex;
    justify-content: center;
    color: #ffffff;
  }

  &__category {
    font-size: 14px;
    text-align: center;
    margin-bottom: 8px;
    color: #ffffff;
  }

  &__address {
    font-size: 14px;
    text-align: center;
    margin-bottom: 8px;
    color: #ffffff;
  }
}
</style>
