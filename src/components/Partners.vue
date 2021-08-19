<template>
  <div class="partnerswrapper">
    <div class="container">
      <figure>
        <img src="/bgc-sushi.jpg" alt="Sushi Background" />
      </figure>
      <div class="partnerswrapper-slogan">
        <div class="partnerswrapper__text">
          <h3>Own a restaurant?</h3>
          <p>
            Become a FOODY business partner, grow your business at smaller
            costs, increase customer happiness.
          </p>
        </div>

        <div class="partnerswrapper__link">
          <a href="#" target="_blank">
            <button>Apply Now</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Partners",
};
</script>

<style scoped lang="scss">
.container {
  position: relative;
  margin-bottom: 40px;

  figure {
    img {
      display: block;
      width: 100%;
      height: 350px;
      object-fit: cover;
      position: relative;
      z-index: 0;
      border-radius: 8px;
    }
  }

  .partnerswrapper-slogan {
    margin-right: 129px;
    margin-left: 129px;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 16px;
    z-index: 1;
    border-radius: 0 0 8px 8px;
    display: flex;
    justify-content: space-between;
    color: #ffffff;
    background-color: #00000099;

    @media (max-width: 1024px) {
      margin-right: 65px;
      margin-left: 65px;
      font-size: 15px;
    }

    @media (max-width: 767px) {
      margin-right: 32px;
      margin-left: 32px;
      font-size: 12px;
    }

    .partnerswrapper__link {
      margin-right: 20px;

      @media (max-width: 1024px) {
        margin-right: 25px;
      }

      @media (max-width: 767px) {
        margin-right: 10px;
      }

      button {
        width: 100%;
        max-width: 150px;
        padding: 10px 16px;
        font-size: 18px;
        border-radius: 5px;
        cursor: pointer;
        color: #ffffff;
        background-color: black;

        @media (max-width: 1024px) {
          font-size: 15px;
        }

        @media (max-width: 767px) {
          font-size: 13px;
        }
      }
    }
  }
}
</style>
