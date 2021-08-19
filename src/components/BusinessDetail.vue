<template>
  <div class="container">
    <div class="business-items">
      <a href="#" class="business">
        <figure class="business__image">
          <img src="/photo.jpg" alt="Item Photo" />
        </figure>
        <div class="business__information">
          <p class="business__header">Eta Bal</p>
          <div class="business__review">
            <star-rating>star</star-rating>&emsp;
            <p class="business__review-vote">Vote</p>
          </div>
          <p class="business__category">Bal</p>
          <div class="business__address">
            <p>Cafer Ağa Mahallesi</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BusinessDetail",
};
</script>

<style scoped lang="scss">
.container {
  margin-top: 160px;
  margin-bottom: 50px;
}

.business {
  &__image {
    position: relative;
    margin-bottom: 20px;
    display: block;
    box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.1);

    img {
      display: block;
      width: 100%;
      height: auto;
      max-height: 400px;
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
    font-size: 20px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 8px;
    font-weight: bold;
    color: #ffffff;

    @media (max-width: 1024px) {
      font-size: 18px;
    }

    @media (max-width: 767px) {
      font-size: 15px;
    }
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
    font-size: 15px;
    text-align: center;
    margin-bottom: 8px;
    color: #ffffff;

    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
}
</style>
