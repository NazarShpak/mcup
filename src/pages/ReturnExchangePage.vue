<template>
  <div class="return-exchange-page">
    <div class="container">

      <h2 class="return-exchange-page__title">
        Повернення та обмін
      </h2>

      <p class="return-exchange-page__info">
        Компанія здійснює повернення відповідно до Закону «Про захист прав споживачів» <br>
        Статтею 9 чинного Закону України «Про захист прав споживачів» передбачено право споживача обміняти
        непродовольчий товар належної якості на аналогічний, якщо куплений товар не підійшов за формою, габаритами,
        фасоном, кольором, розміром або з інших причин не може бути використаний за призначенням, якщо даний товар не
        використовувався і якщо збережено його товарний вигляд, споживчі властивості, пломби, ярлики та розрахунковий
        документ, виданий продавцем разом з товаром. <br>
        Продавець не має права відмовити в обміні (поверненні) товару, що не включений до переліку, якщо він відповідає
        всім вимогам, передбаченим ст. 9 Закону (збережений товарний вигляд, ярлики, пломби, є розрахунковий документ і
        т. ін.).
        <br> Виключення <br>
        Кабінетом Міністрів України затверджено перелік товарів належної якості, що не підлягають обміну або поверненню
        (Постанова КМУ від 19 березня 1994 № 172). <br>
        З актуальним вичерпним Переліком можна ознайомитися за
        <a
            class="return-exchange-page__info-link"
            href="https://zakon.rada.gov.ua/laws/show/172-94-%D0%BF#Text"
            target="_blank"
        >
          поcиланням
        </a>
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: "ReturnExchangePage"
}
</script>

<style lang="scss" scoped>
.return-exchange-page {
  height: 624px;
  padding-top: 28px;
  color: #000000;

  &__title {
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    margin-bottom: 65px;
  }

  &__info {
    width: 1096px;
    font-size: 18px;
    line-height: 35px;
  }

  &__info-link {
    text-decoration-line: underline;
    color: #81B4F5;
  }
}

@media (max-width: 428px) {
  .return-exchange-page {
    height: 568px;
    padding-top: 4px;

    &__title {
      text-align: center;
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 22px;
    }

    &__info {
      width: 396px;
      font-weight: 300;
      font-size: 15px;
      line-height: 20px;
      margin: 0 auto;
    }

    &__info-link {
      font-size: 17px;
      line-height: 20px;
    }
  }
}

@media (max-width: 390px) {
  .return-exchange-page {
    height: 582px;

    &__title {
      font-size: 15px;
      line-height: 18px;
      margin-bottom: 20px;
    }

    &__info {
      width: 356px;
      font-size: 14px;
      line-height: 20px;
    }

    &__info-link {
      font-size: 16px;
      line-height: 19px;
    }
  }
}
</style>