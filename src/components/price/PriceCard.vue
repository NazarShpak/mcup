<template>
  <div
      class="price-card"
      :class="info.action ? 'card-action' : ''"
  >

    <h6 class="price-card__title">
      {{ info.title }}
    </h6>

    <p class="price-card__subtitle">
      {{ info.subtitle }}
    </p>

    <p class="price-card__info">
      {{ info.price }}
      <span class="info-span"> грн</span>
    </p>

    <button
        class="price-card__btn"
        :class="info.action ? 'btn-action' : ''"
    >
      Замовити
    </button>

  </div>
</template>

<script>
export default {
  name: "PriceCard",
  props: {
    info: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.price-card {
  width: 335px;
  height: 310px;
  padding: 43px 40px 40px;
  color: #252B42;
  background: #FFFFFF;
  border: 1px solid #DEDEDE;
  box-sizing: border-box;
  box-shadow: 0 13px 19px rgba(0, 0, 0, 0.07);
  border-radius: 10px;

  &__title {
    font-weight: bold;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.1px;
    margin-bottom: 3px;
  }

  &__subtitle {
    font-weight: bold;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.1px;
    margin-bottom: 27px;
  }

  &__info {
    font-weight: 900;
    font-size: 55px;
    line-height: 65px;
    letter-spacing: 0.2px;
    margin-bottom: 27px;
    display: flex;
    align-items: self-start;

    .info-span {
      font-weight: bold;
      font-size: 22px;
      line-height: 33px;
      letter-spacing: 0.1px;
      padding-left: 10px;
    }
  }

  &__btn {
    width: 255px;
    height: 52px;
    background: #38A3F1;
    border-radius: 30px;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.2px;
    color: #FFFFFF;
  }
}

.card-action {
  background: linear-gradient(39.97deg, #EF2779 0.79%, #7834BE 79.29%);
  border: 1px solid #DEDEDE;
  box-sizing: border-box;
  box-shadow: 0 13px 19px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  color: #FFFFFF;
}

.btn-action {
  background: #FFFFFF;
  color: #EF2779;
}

@media (max-width: 428px) {
  .price-card {
    width: 315px;
    height: 285px;
    padding: 40px 37px 30px;

    &__title {
      font-size: 20px;
      line-height: 31px;
    }

    &__subtitle {
      font-size: 11px;
      line-height: 17px;
      margin-bottom: 26px;
    }

    &__info {
      font-weight: 900;
      font-size: 51px;
      line-height: 62px;
      margin-bottom: 24px;

      .info-span {
        font-size: 20px;
        line-height: 31px;
        padding-left: 10px;
      }
    }

    &__btn {
      width: 240px;
      height: 52px;
      border-radius: 35px;
    }
  }
}
</style>