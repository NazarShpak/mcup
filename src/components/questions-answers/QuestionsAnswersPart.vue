<template>
  <div class="questions-answers-part">
    <div class="container">

      <h2 class="questions-answers-part__title">
        Питання - відповідь
      </h2>

      <div class="questions-answers-part__cards">

        <questions-answers-card
            class="questions-answers-part__card"
            v-for="(info, index) of infos"
            :key="index"
            :info="info"
        />

      </div>

    </div>
  </div>
</template>

<script>
import QuestionsAnswersCard from "./QuestionsAnswersCard";

export default {
  name: "QuestionsAnswersPart",
  data() {
    return {
      infos: [
        {
          question: 'Що таке антиген SARS-CoV-2, який виявляє цей тест?',
          answer: 'Антиген SARS-CoV-2 - це РНК, що містить вірус коронавірусної інфекції Covid-19.'
        },
        {
          question: 'Чи надійний тест на виявлення антигену?',
          answer: 'Так, це надійний тест для виявлення інфекції Covid-19. Чутливість цього тесту становить:  98.1%, специфічність 100%.'
        },
        {
          question: 'Тест може дати помилково-негативний результат?',
          answer: 'При проведенні випробувань даного тесту за наявності клінічних ознак коронавірусної інфекції помилково-негативних результатів не зафіксовано.'
        },
        {
          question: 'Хто виробник?',
          answer: 'HANGZHOU TESTSEA BIOTECHNOLOGY CO., LTD. / ХАНЧЖОУ ТЕСТСИЕ БИОТЕКНОЛОДЖИ КО'
        }
      ]
    }
  },
  components: {
    QuestionsAnswersCard
  }
}
</script>

<style lang="scss" scoped>
.questions-answers-part {
  margin-bottom: 101px;

  &__title {
    font-weight: 500;
    font-size: 46px;
    line-height: 61px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #252B42;
    margin-bottom: 50px;
  }

  &__cards {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__card + &__card {
    margin-top: 48px;
  }
}

@media (max-width: 428px) {
  .questions-answers-part {
    margin-bottom: 101px;

    .container {
      padding: 0 5px;
    }

    &__title {
      font-size: 26px;
      line-height: 44px;
      letter-spacing: 0.14px;
      margin-bottom: 30px;
    }

    &__card + &__card {
      margin-top: 13px;
    }
  }
}
</style>