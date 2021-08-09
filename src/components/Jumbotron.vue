<template>
  <div class="feature-card">
    <div class="container">
      <a href="">
        <img class="feature__img" src="/img-sushi.jpeg" alt="Sushi Poster" />
        <div class="feature__detail">
          <h3>Sushi</h3>
          <p>
            Give them your love, not your ideas!
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.feature-card {
  width: 100%;
  margin-bottom: 40px;

  .container {
    position: relative;

    .feature__img {
      display: block;
      width: 100%;
      height: 500px;
      object-fit: cover;
      position: relative;
      z-index: 0;
      border-radius: 8px;
    }

    .feature__detail {
      margin-right: 129px;
      margin-left: 129px;
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 16px;
      z-index: 1;
      border-radius: 0 0 8px 8px;
      color: #ffffff;
      background-color: #00000099;
    }
  }
}
</style>
