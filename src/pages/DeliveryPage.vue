<template>
  <div class="delivery-page">
    <div class="container">

      <h2 class="delivery-page__title">
        Для зручності клієнтів компанія PCREXPRESS пропонує наступні варіанти доставки:
      </h2>

      <p class="delivery-page__info">
        Компанія PCREXPRESS здійснює доставку товарів по Україні за допомогою поштового оператора Нова пошта. <br> Також є
        доставка кур’єром, після того як Ви обрали доставку кур’єром, наш оператор звя’жеться з Вами для уточнення
        деталей.
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: "DeliveryPage"
}
</script>

<style lang="scss" scoped>
.delivery-page {
  height: 327px;
  padding-top: 28px;
  color: #000000;

  &__title {
    width: 1116px;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    margin-bottom: 65px;
  }

  &__info {
    font-size: 18px;
    line-height: 35px;
  }
}

@media (max-width: 428px) {
  .delivery-page {
    height: 264px;
    padding-top: 2px;

    &__title {
      width: 268px;
      font-size: 16px;
      line-height: 22px;
      margin: 0 auto 22px;
    }

    &__info {
      font-weight: 300;
      font-size: 15px;
      line-height: 22px;
      width: 319px;
    }
  }
}

@media (max-width: 390px) {
  .delivery-page {
    height: 242px;

    &__title {
      width: 245px;
      font-size: 15px;
      line-height: 20px;
      margin-bottom: 20px;
    }

    &__info {
      font-size: 14px;
      line-height: 20px;
      width: 291px;
    }
  }
}
</style>