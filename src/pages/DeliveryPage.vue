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
</style>