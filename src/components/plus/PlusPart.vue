<template>
  <div class="plus-part">
    <div class="container">

      <h2 class="plus-part__title">
        Чому Covid - 19 <span class="title-span"> Antigen  </span> Rapid Test Kit?
      </h2>

      <div class="plus-part__cards">

        <plus-card
            class="plus-part__card"
            v-for="(info, index) of infos"
            :key="index"
            :info="info"
        />

      </div>

      <p class="plus-part__content">
        Експрес-тест визначення антигену вірусу COVID-19 є швидким імунохроматографічним тестом для якісного визначення
        антигену вірусу SARS-CoV-2 (COVID-19) у зразку мазка з носоглотки для полегшення діагностики вірусної інфекції
        COVID-19 і призначений для самоконтролю.
      </p>

      <button class="plus-part__btn">
        Замовити
      </button>

    </div>
  </div>
</template>

<script>
import PlusCard from "./PlusCard";

export default {
  name: "PlusPart",
  components: {PlusCard},
  data() {
    return {
      infos: [
        {
          src: 'china',
          title: 'Країна виробник',
          subtitle: 'Китай'
        },
        {
          src: 'corona-virus',
          title: 'Чутливість',
          subtitle: '*: 98,1%'
        },
        {
          src: 'community',
          title: 'Специфічність',
          subtitle: '*: 100%'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.plus-part {
  padding-top: 58px;

  &__title {
    font-size: 46px;
    line-height: 61px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #252B42;
    margin-bottom: 70px;

    .title-span {
      font-weight: bold;
    }
  }

  &__cards {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 100px;
  }

  &__card + &__card {
    margin-left: 270px;
  }

  &__content {
    width: 1080px;
    font-size: 36px;
    line-height: 60px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #252B42;
    margin: 0 auto 75px;
  }

  &__btn {
    display: block;
    width: 570px;
    height: 65px;
    background: #38A3F1;
    border-radius: 20px;
    font-weight: bold;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.1px;
    color: #FFFFFF;
    margin: 0 auto 213px;
  }
}

@media (max-width: 428px) {
  .plus-part {
    padding-top: 0;

    &__title {
      font-size: 21px;
      line-height: 61px;
      margin-bottom: 6px;
    }

    &__cards {
      margin-bottom: 47px;
    }

    &__card + &__card {
      margin-left: 70px;
    }

    &__content {
      width: 100%;
      font-size: 15px;
      line-height: 30px;
      margin-bottom: 19px;
    }

    &__btn {
      width: 347px;
      height: 63px;
      border-radius: 15px;
      font-weight: bold;
      font-size: 22px;
      line-height: 33px;
      margin: 0 auto 100px;
    }
  }
}

@media (max-width: 400px) {
  .plus-part {

    &__title {
      font-size: 19px;
    }

    &__cards {
      margin-bottom: 24px;
    }

    &__content {
      margin-bottom: 15px;
    }
  }
}
</style>