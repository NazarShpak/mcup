<template>
  <div class="questions-answers-card">

    <h6 class="questions-answers-card__title">
      {{  info.question }}
    </h6>

    <p class="questions-answers-card__info">
      {{ info.answer }}
    </p>

  </div>
</template>

<script>
export default {
  name: "QuestionsAnswersCard",
  props: {
    info: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.questions-answers-card {
  width: 877px;
  height: 168px;
  background: #FDFDFD;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 7px;
  color: #151515;
  padding: 28px 40px 0 45px;

  &__title {
    font-weight: 500;
    font-size: 24px;
    line-height: 160%;
    margin-bottom: 22px;
  }

  &__info {
    font-size: 18px;
    line-height: 170%;
  }
}

@media (max-width: 428px) {
  .questions-answers-card {
    width: 100%;
    height: 90px;
    border-radius: 3px;
    padding: 15px 16px 0 16px;

    &__title {
      font-size: 12px;
      margin-bottom: 7px;
    }

    &__info {
      font-size: 10px;
    }
  }
}

@media (max-width: 390px) {
  .questions-answers-card {
    padding: 16px 10px 0;
  }
}
</style>