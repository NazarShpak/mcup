<template>
  <div class="clients-part">
    <div class="container">

      <h2 class="clients-part__title">
        Наші кліенти
      </h2>

    </div>
  </div>
</template>

<script>
export default {
  name: "ClientsPart"
}
</script>

<style lang="scss" scoped>
.clients-part {
  margin-bottom: 117px;

  .container {
    background-image: url("../../../assets/images/clients-bg.png");
    background-size: 1230px 358px;
    background-repeat: no-repeat;
    background-position: center bottom;
    height: 661px;
  }

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
    margin-bottom: 100px;

    .container {
      background-size: 372px 108px;
      height: 239px;
    }

    &__title {
      font-size: 26px;
    }
  }
}

@media (max-width: 390px) {
  .clients-part {
    .container {
      background-size: 358px 104px;
      height: 220px;
    }

    &__title {
      font-size: 26px;
    }
  }
}
</style>