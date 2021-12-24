<template>
  <div
      class="header-part"
      :class="pageName === 'main' ? 'header-part-main' : 'header-part-other'"
  >
    <div class="container">

      <!-- Logo -->
      <img
          alt
          class="header-part__logo"
          src="../../../assets/icons/logo.png"
      >

      <!-- Form main page -->
      <div
          class="header-part__block"
          v-if="$route.name === 'main'"
      >

        <h1 class="header-part__title">
          Экспресс-тест Testsealabs Covid-19 Antigen Cassette
        </h1>

        <p class="header-part__info">
          Швидкий результат за 10-15 хвилин в тебе завжди під рукою!
        </p>

        <button
            class="header-part__btn"
            @click="$emit('openOrderForm')"
        >
          Замовити
        </button>

      </div>

      <!-- For other pages -->
      <div
          class="header-part__sub-block"
          v-else
      >

        <button
            class="header-part__nav-btn"
            @click="goTo"
        >
          Повернутися до головної сторінки
        </button>

        <h2 class="header-part__subtitle">
          {{
            pageName === 'delivery' ? 'Доставка товару' : pageName === 'return-exchange' ? 'Повернення та обмін товару' : pageName === 'privacy-policy-page' ? 'Політика конфіденційності' : ''
          }}
        </h2>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderPart",
  props: {
    pageName: {
      type: String
    }
  },
  methods: {
    goTo() {
      this.$router.push({name: 'main'})
      this.$emit('goTo', 'main')
    }
  }
}
</script>

<style lang="scss" scoped>
.header-part {
  padding-top: 38px;
  letter-spacing: 0.2px;
  color: #FFFFFF;
  text-shadow: 0 4.04615px 4.04615px rgba(0, 0, 0, 0.25);

  &__logo {
    width: 237px;
    height: 76px;
  }

  &__block {
    height: 792px;
    background-image: url("../../../assets/images/header-bg-2.png");
    background-size: inherit;
    background-repeat: no-repeat;
    background-position: right 118px;
    padding-top: 178px;
  }

  &__title {
    font-weight: 900;
    font-size: 55px;
    line-height: 66px;
    width: 812px;
    margin-bottom: 68px;
  }

  &__info {
    font-size: 29px;
    line-height: 51px;
    width: 500px;
    margin-bottom: 45px;
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

  &__sub-block {
    padding-top: 186px;
    text-align: center;
  }

  &__nav-btn {
    height: 98px;
    width: 610px;
    background: #FEFEFE;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 37px;
    margin-bottom: 87px;
  }

  &__subtitle {
    font-weight: 900;
    font-size: 56px;
    line-height: 66px;
    color: #FFFFFF;
    text-shadow: 0 4.04615px 4.04615px rgba(0, 0, 0, 0.25);
  }
}

.header-part-main,
.header-part-other {
  height: 1011px;
  background-image: url("../../../assets/images/header-bg.png");
  background-size: 100% 1011px;
  background-repeat: no-repeat;
  background-position: center top;
}

@media (max-width: 428px) {
  .header-part {
    padding-top: 40px;
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
      background-size: 185px 201px;
      background-position: 216px 151px;
      padding-top: 27px;
    }

    &__title {
      font-size: 23px;
      line-height: 30px;
      width: 300px;
      margin-bottom: 23px;
    }

    &__info {
      font-size: 18px;
      line-height: 20px;
      width: 288px;
      margin-bottom: 23px;
    }

    &__btn {
      width: 188px;
      height: 50px;
      border-radius: 10px;
      font-size: 18px;
      line-height: 20px;
    }

    &__sub-block {
      padding-top: 25px;
    }

    &__nav-btn {
      height: 44px;
      width: 266px;
      border-radius: 4px;
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 26px;
    }

    &__subtitle {
      font-size: 19px;
      line-height: 22px;
    }
  }
  .header-part-main {
    height: 533px;
    background-image: url("../../../assets/images/header-bg-mob.png");
    background-size: 428px 533px;
  }

  .header-part-other {
    height: 301px;
    background-image: url("../../../assets/images/header-bg-mob-2.png");
    background-size: 428px 301px;
  }
}

@media (max-width: 390px) {
  .header-part {

    &__block {
      height: 395px;
      background-size: 150px 163px;
      background-position: 215px 173px;
    }

    &__sub-block {
      padding-top: 20px;
    }

    &__nav-btn {
      height: 40px;
      width: 242px;
      font-size: 13px;
      line-height: 15px;
      margin-bottom: 20px;
    }

    &__subtitle {
      font-size: 17px;
      line-height: 20px;
    }
  }

  .header-part-main {
    height: 515px;
    background-size: 390px 524px;
  }

  .header-part-other {
    height: 274px;
    background-size: 390px 274px;
  }
}
</style>