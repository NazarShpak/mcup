<template>
  <div class="header-part">
    <div class="container">

      <!-- Logo -->
      <img
          alt
          class="header-part__logo"
          src="../../assets/icons/logo.png"
      >

      <div class="header-part__block">

        <h1 class="header-part__title">
          Экспресс-тест Testsealabs Covid-19 Antigen Cassette
        </h1>

        <p class="header-part__info">
          Швидкий результат за 10-15 хвилин в тебе завжди під рукою!
        </p>

        <button class="header-part__btn">
          Замовити
        </button>

      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderPart"
}
</script>

<style lang="scss" scoped>
.header-part {
  height: 1011px;
  padding-top: 38px;
  background-image: url("../../assets/images/header-bg.png");
  background-size: 100% 1011px;
  background-repeat: no-repeat;
  background-position: center top;
  letter-spacing: 0.2px;
  color: #FFFFFF;
  text-shadow: 0 4.04615px 4.04615px rgba(0, 0, 0, 0.25);

  &__logo {
    width: 237px;
    height: 76px;
  }

  &__block {
    height: 792px;
    background-image: url("../../assets/images/header-bg-2.png");
    background-size: inherit;
    background-repeat: no-repeat;
    background-position: right 56px;
    padding-top: 178px;
  }

  &__title {
    font-weight: 900;
    font-size: 55px;
    line-height: 66px;
    width: 812px;
    padding-bottom: 41px;
  }

  &__info {
    font-size: 29px;
    line-height: 51px;
    width: 500px;
    padding-bottom: 22px;
  }

  &__btn {
    width: 500px;
    height: 86px;
    background: #FFFFFF;
    border-radius: 20px;
    font-weight: bold;
    font-size: 25px;
    line-height: 33px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #2E2E2E;
  }
}

@media (max-width: 428px) {
  .header-part {
    height: 533px;
    padding-top: 40px;
    background-size: 429px 533px;
    letter-spacing: 0.2px;
    color: #FFFFFF;
    text-shadow: 0 4.04615px 4.04615px rgba(0, 0, 0, 0.25);

    .container {
      padding-right: 0;
    }

    &__logo {
      width: 130px;
      height: 42px;
    }

    &__block {
      height: 405px;
      background-size: 220px 154px;
      background-position: right 210px;
      padding-top: 50px;
    }

    &__title {
      font-size: 23px;
      line-height: 30px;
      width: 300px;
      padding-bottom: 23px;
    }

    &__info {
      font-size: 18px;
      line-height: 20px;
      width: 288px;
      padding-bottom: 23px;
    }

    &__btn {
      width: 188px;
      height: 50px;
      border-radius: 10px;
      font-size: 18px;
      line-height: 20px;
    }
  }
}

@media (max-width: 390px) {
  .header-part {
    height: 453px;
    background-size: 390px 453px;

    &__block {
      height: 395px;
      background-position: right 200px;
    }
  }
}
</style>