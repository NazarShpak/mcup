<template>
  <div class="plus-card">

    <img alt
         class="plus-card__img"
         :src='require(`@/assets/icons/${info.src}.png`)'
    >

    <h6 class="plus-card__title">
      {{ info.title }}
    </h6>

    <p class="plus-card__subtitle">
      {{ info.subtitle }}
    </p>

  </div>
</template>

<script>
export default {
  name: "PlusCard",
  props: {
    info: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.plus-card {
  height: 187px;
  width: 175px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &__img {
    height: 96px;
    width: 97px;
    margin-bottom: 16px;
  }

  &__title {
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.1px;
    color: #252B42;
    margin-bottom: 7px;
  }

  &__subtitle {
    font-weight: bold;
    font-size: 28px;
    line-height: 27px;
    letter-spacing: 0.2px;
    color: #374754;
  }
}

@media (max-width: 428px) {
  .plus-card {
    width: 96px;
    height: 110px;

    &__img {
      height: 67px;
      width: 67px;
      margin-bottom: 10px;
    }

    &__title {
      font-size: 12px;
      line-height: 14px;
      margin-bottom: 5px;
    }

    &__subtitle {
      font-size: 12px;
      line-height: 12px;
    }
  }
}
</style>