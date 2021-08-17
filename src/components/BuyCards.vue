<template>
  <section class="container">
    <div class="cardswrapper">
      <div class="cards">
        <figure class="cards__image">
          <img src="/icon-menu.svg" alt="Menu Icon" />
        </figure>
        <div class="cards__text">
          <p>Select your food by pictures from thousands of restaurants!</p>
        </div>
      </div>
      <div class="cards">
        <figure class="cards__image">
          <img src="/icon-offer.svg" alt="Offer Icon" />
        </figure>
        <div class="cards__text">
          <p>Benefit from one of hundreds of promotions each week!</p>
        </div>
      </div>
      <div class="cards">
        <figure class="cards__image">
          <img src="/icon-peyment.svg" alt="Peyment Icon" />
        </figure>
        <div class="cards__text">
          <p>Pay by credit card, at the door, and with meal vouchers!</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BuyCards",
};
</script>

<style scoped lang="scss">
.cardswrapper {
  height: 300px;
  border-radius: 8px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .cards {
    width: 350px;
    height: 250px;
    border: 2px solid black;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;

    @media (max-width: 1024px) {
      width: 250px;
      height: 250px;
    }

    @media (max-width: 767px) {
      width: 150px;
      height: 200px;
    }

    &__image {
      margin-bottom: 15px;
      text-align: center;

      img {
        width: 100px;

        @media (max-width: 1024px) {
          width: 80px;
        }

        @media (max-width: 767px) {
          width: 50px;
        }
      }
    }

    &__text {
      width: 220px;
      font-size: 17px;
      font-weight: bold;
      text-align: center;

      @media (max-width: 1024px) {
        font-size: 15px;
      }

      @media (max-width: 767px) {
        width: 120px;
        font-size: 12px;
      }
    }
  }
}
</style>
