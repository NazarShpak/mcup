<template>
  <div class="delivery-part">
    <div class="container">

      <h2 class="delivery-part__title">
        Способи доставки
      </h2>

      <h5 class="delivery-part__subtitle">
        Нова Пошта або кур’єром
      </h5>

      <div class="delivery-part__images">

        <img alt
             class="delivery-part__img-1"
             :src='require(`@/assets/icons/nova-poshta.png`)'
        >

        <img alt
             class="delivery-part__img-2"
             :src='require(`@/assets/icons/courier.png`)'
        >

      </div>

      <button class="delivery-part__btn">
        Замовити
      </button>

    </div>
  </div>
</template>

<script>
export default {
  name: "DeliveryPart"
}
</script>

<style lang="scss" scoped>
.delivery-part {
  margin-bottom: 67px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #252B42;

  &__title {
    font-weight: 500;
    font-size: 46px;
    line-height: 60px;
    margin-bottom: 31px;
  }

  &__subtitle {
    font-size: 26px;
    line-height: 60px;
    margin-bottom: 30px;
  }

  &__images {
    width: 697px;
    margin: 0 auto 73px;
    display: flex;
    justify-content: space-between;
  }

  &__btn {
    width: 570px;
    height: 65px;
    background: #38A3F1;
    border-radius: 20px;
    font-weight: bold;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.1px;
    color: #FFFFFF;
  }
}

@media (max-width: 428px) {
  .delivery-part {
    margin-bottom: 120px;

    .container {
      padding: 0 31px;
    }

    &__title {
      font-size: 20px;
      line-height: 26px;
      margin-bottom: 25px;
    }

    &__subtitle {
      font-size: 12px;
      line-height: 9px;
      margin-bottom: 20px;
    }

    &__images {
      width: 336px;
      margin: 0 auto 40px;
    }

    &__img-1 {
      width: 150px;
      height: 112px;
    }

    &__img-2 {
      width: 112px;
      height: 112px;
    }

    &__btn {
      width: 100%;
      height: 50px;
      border-radius: 10px;
      font-size: 16px;
      line-height: 21px;
      letter-spacing: 0.06px;
    }
  }
}

@media (max-width: 390px) {
  .delivery-part {

    .container {
      padding: 0 12px;
    }

    &__images {
      width: 330px;
      margin: 0 auto 30px;
    }

  }
}
</style>