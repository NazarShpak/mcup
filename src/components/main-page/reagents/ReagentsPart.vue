<template>
  <div class="reagents-part">
    <div class="container">

      <h2 class="reagents-part__title">
        Реагенти
      </h2>

      <div class="reagents-part__block">

        <p class="reagents-part__main-info">
          Цей тест містить одне анти-COVID-19-N антитіло, як реагент захоплення, та інше анти-COVID-19-N антитіло як
          реагент для виявлення. Козячі антитіла до мишачого IgG використовуються в системі лінії контролю.
        </p>

        <ul class="reagents-part__list">

          <li
              class="reagents-part__list-item"
              v-for="(info, index) of infos"
              :key="index"
          >
            {{ info }}
          </li>

        </ul>

        <p class="reagents-part__info">
          <span class="info-span">УВАГА: </span>експрес-тест не варто використовувати для самолікування та
          самодіагностики. Необхідно
          завжди консультуватись із лікарем.
        </p>

        <p class="reagents-part__other-info">
          * За даними ДП "Одеський центр контрою і профілактики хвороб МОЗ України".
        </p>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ReagentsPart",
  data() {
    return {
      infos: [
        'Тест-кассета - 1  шт.',
        'Буфер для экстрактації - 1 шт.',
        'Пакет - 1 шт.',
        'Піпетка - 1 шт.'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.reagents-part {
  color: #252B42;
  letter-spacing: 0.2px;
  margin-bottom: 154px;

  &__title {
    font-weight: 500;
    font-size: 46px;
    line-height: 61px;
    text-align: center;
    margin-bottom: 50px;
  }

  &__block {
    width: 1106px;
    margin: 0 auto;
    background-image: url("../../../assets/images/reagents-bg.png");
    background-size: inherit;
    background-repeat: no-repeat;
    background-position: right 305px;
  }

  &__main-info {
    font-size: 36px;
    line-height: 60px;
    width: 894px;
    margin-bottom: 75px;
  }

  &__list {
    margin-bottom: 75px;
  }

  &__list-item {
    font-size: 36px;
    line-height: 50px;
  }

  &__list-item + &__list-item {
    margin-top: 25px;
  }

  &__info {
    font-size: 36px;
    line-height: 60px;
    width: 894px;
    margin-bottom: 15px;

    .info-span {
      font-weight: bold;
    }
  }

  &__other-info {
    font-size: 16px;
    line-height: 10px;
  }
}

@media (max-width: 428px) {
  .reagents-part {
    margin-bottom: 100px;

    .container {
      padding: 0 23px;
    }

    &__title {
      font-size: 26px;
      margin-bottom: 30px;
    }

    &__block {
      width: 100%;
      margin: 0 auto;
      background-image: url("../../../assets/images/reagents-bg.png");
      background-size: 102px 182px;
      background-repeat: no-repeat;
      background-position: right 150px;
    }

    &__main-info {
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.09px;
      width: 356px;
      margin-bottom: 25px;
    }

    &__list {
      margin-bottom: 40px;
    }

    &__list-item {
      font-size: 16px;
      line-height: 16px;
    }

    &__list-item + &__list-item {
      margin-top: 25px;
    }

    &__info {
      font-size: 16px;
      line-height: 28px;
      width: 363px;
      margin-bottom: 10px;
    }

    &__other-info {
      font-size: 9px;
    }
  }
}

@media (max-width: 390px) {
  .reagents-part {

    .container {
      padding: 0 14px;
    }
  }
}
</style>