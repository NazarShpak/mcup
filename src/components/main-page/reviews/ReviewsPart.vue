<template>
  <div class="reviews-part">
    <div class="container">

      <h2 class="reviews-part__title">
        Відгуки
      </h2>

      <img alt
           class="reviews-part__img"
           :src='require(`@/assets/images/reviews.png`)'
      >

    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewsPart"
}
</script>

<style lang="scss" scoped>
.reviews-part {
  margin-bottom: 167px;

  &__title {
    font-weight: 500;
    font-size: 46px;
    line-height: 61px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #252B42;
    margin-bottom: 50px;
  }

  &__img {
    display: block;
    margin: 0 auto;
  }
}

@media (max-width: 428px) {
  .reviews-part {
    margin-bottom: 100px;

    .container {
      padding: 0 11px;
    }

    &__title {
      font-size: 26px;
      line-height: 26px;
      letter-spacing: 0.09px;
      margin-bottom: 15px;
    }

    &__img {
      width: 400px;
      height: auto;
    }
  }
}

@media (max-width: 415px) {
  .reviews-part {
    &__img {
      width: 370px;
    }
  }
}
</style>