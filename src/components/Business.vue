<template>
  <section class="container">
    <div class="business-card">
      <h2>businesses</h2>
      <div class="business-items">
        <div class="business">
          <figure class="business__image">
            <img src="/photo.jpg" alt="Item Photo" />
          </figure>
          <div class="business__information">
            <p class="business__header">Eta Bal</p>
            <div class="business__review">
              star
              <p class="business__review-vote">Vote</p>
            </div>
            <p class="business__category">Bal</p>
            <div class="business__address">
              <p>Cafer Ağa Mahallesi</p>
            </div>
          </div>
        </div>

        <div class="business">
          <figure class="business__image">
            <img src="/photo.jpg" alt="Item Photo" />
          </figure>
          <div class="business__information">
            <p class="business__header">Eta Bal</p>
            <div class="business__review">
              star
              <p class="business__review-vote">Vote</p>
            </div>
            <p class="business__category">Bal</p>
            <div class="business__address">
              <p>Cafer Ağa Mahallesi</p>
            </div>
          </div>
        </div>

        <div class="business">
          <figure class="business__image">
            <img src="/photo.jpg" alt="Item Photo" />
          </figure>
          <div class="business__information">
            <p class="business__header">Eta Bal</p>
            <div class="business__review">
              star
              <p class="business__review-vote">Vote</p>
            </div>
            <p class="business__category">Bal</p>
            <div class="business__address">
              <p>Cafer Ağa Mahallesi</p>
            </div>
          </div>
        </div>
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
.business-card {
  h2 {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
}

.business-items {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.business {
  width: 300px;

  &__image {
    width: 100%;

    img {
      width: 300px;
      border-radius: 8px;
    }
  }

  &__information {
    border-radius: 8px;
    background-color: #212121;
  }

  &__header {
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 10px;
    color: #ffffff;
  }

  &__review {
    width: 150px;
    font-size: 17px;
    margin-bottom: 10px;
    margin-right: 100px;
    display: flex;
    justify-content: space-between;
    color: #ffffff;
  }

  &__category {
    font-size: 17px;
    margin-bottom: 10px;
    color: #ffffff;
  }

  &__address {
    font-size: 17px;
    color: #ffffff;
  }
}
</style>
