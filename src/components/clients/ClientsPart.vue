<template>
  <div class="clients-part">

    <h2 class="clients-part__title">
      Наші кліенти
    </h2>

  </div>
</template>

<script>
export default {
  name: "ClientsPart"
}
</script>

<style lang="scss" scoped>
.clients-part {
  height: 661px;
  background-image: url("../../assets/images/clients-bg.png");
  background-size: 100% 530px;
  background-repeat: no-repeat;
  background-position: center bottom;
  margin-bottom: 117px;

  &__title {
    font-weight: 500;
    font-size: 46px;
    line-height: 61px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #252B42;
  }
}

@media (max-width: 428px) {
  .clients-part {
    height: 239px;
    background-size: 100% 153px;
    margin-bottom: 114px;

    &__title {
      font-size: 26px;
    }
  }
}

@media (max-width: 390px) {
  .clients-part {
    height: 225px;
    background-size: 100% 139px;

    &__title {
      font-size: 26px;
    }
  }
}
</style>