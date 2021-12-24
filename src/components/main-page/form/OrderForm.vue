<template>
  <div class="order-form">

    <!-- Form -->
    <form
        id="form"
        class="order-form__form"
        @submit.prevent
    >

      <!-- Close form btn-->
      <img
          alt
          class="order-form__btn-close"
          src="../../../assets/icons/close.png"
          @click="$emit('closeForm')"
      >

      <!-- Title  -->
      <h5 class="order-form__form-title">
        Замовлення товару
      </h5>

      <!-- For getting name -->
      <label class="order-form__form-label">
        Имя*
        <input
            class="order-form__form-input"
            v-model.trim="name"
            type="text"
            name="name"
            :placeholder="'Дмитрий'"
            :class="{
                    'default' : !name,
                    'is-invalided' : name && !checkName(),
                    'is-valid' : name && checkName()
                  }"
        >
      </label>

      <!-- For getting phone -->
      <label class="order-form__form-label">
        Телефон*
        <input
            class="order-form__form-input"
            v-model.trim="phone"
            type="number"
            name="phone"
            :placeholder="'+38065005053'"
            :class="{
                    'default' : !phone,
                    'is-invalided' : phone && !checkPhone(),
                    'is-valid' : phone && checkPhone()
                  }"
        >
      </label>


      <label class="order-form__form-label">
        Кількість*

        <span class="order-form__form-btns">
          <button
              class="order-form__form-btn"
              v-for="(info, index) of quantityInfo"
              :key="index"
              @click="changeQuantity(info)"
              :class="quantity === info ? 'form-btn-active' : ''"
          >
            {{ info }} шт.
          </button>
        </span>

      </label>

      <!-- Submit form -->
      <button
          class="order-form__btn"
          type="submit"
          :disabled='!isComplete'
          :class="!isComplete ? 'btn-disable' : ''"
          @click="submitForm"
          @keydown.enter="submitForm"
      >
        Отправить
      </button>

    </form>

  </div>
</template>

<script>
export default {
  name: "OrderForm",
  data() {
    return {
      name: '',
      phone: '',
      quantity: '',
      quantityInfo: [
        '1',
       '100',
        '1000'
      ]
    }
  },
  props: {
    quantityValue: {
      type: String
    }
  },
  created() {
    this.quantityValue ? this.quantity = this.quantityValue : this.quantity = '1000'
  },
  computed: {
    isComplete() {
      return this.name && this.phone && this.quantity
    }
  },
  methods: {
    checkName() {
      return this.name.length >= 3
    },
    checkPhone() {
      let val = /^\+?3?8?(0\d{9})$/
      return val.test(this.phone)
    },
    changeQuantity(value) {
      this.quantity = value
    },
    submitForm() {
      const request = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.name,
          phone: this.phone,
          quantity: this.quantity
        })
      };
      console.log(request)
      this.$emit('closeOrderForm')
    },
  }
}
</script>

<style lang="scss" scoped>
.order-form {
  height: 831px;
  width: 567px;
  background: #FFFFFF;
  box-shadow: 0 42px 55px rgba(0, 0, 0, 0.06), 0 -6px 42px rgba(0, 0, 0, 0.04), 0 -13px 14px rgba(0, 0, 0, 0.04), 0 -3px 2px rgba(0, 0, 0, 0.04);
  border-radius: 12px;

  &__btn-close {
    display: none;
  }

  &__form,
  &__form-label {
    display: flex;
    flex-direction: column;
  }

  &__form {
    text-align: center;
    height: 100%;
    width: 100%;
    padding: 31px 57px;
  }

  &__form-title {
    font-family: 'SFUIText';
    font-weight: 500;
    font-size: 24px;
    line-height: 37px;
    color: #2C2C2C;
    margin-bottom: 32px;
  }

  &__form-label {
    font-family: 'SFUIText';
    text-align: left;
    font-weight: 500;
    font-size: 31px;
    line-height: 37px;
    color: #0B132A;
    position: relative;
  }

  &__form-label + &__form-label {
    margin-top: 54px;
  }

  &__form-input,
  &__input::placeholder {
    margin-top: 17px;
    border: none;
    padding: 10px;
    font-family: 'Rubik', sans-serif;
    font-size: 24.5px;
    line-height: 37px;
    color: #4F5665;
    border-bottom: 2.5px solid #EEEFF2;
  }

  &__form-btns {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 69px;
    left: 50%;
    transform: translate(-50%);
    width: 517px;
  }

  &__form-btn {
    height: 149px;
    width: 166px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 26.4509px;
    line-height: 39px;
    background: #FFFFFF;
    border: 1.6px solid #DEDEDE;
    box-sizing: border-box;
    box-shadow: 0 20.9736px 30.6537px rgba(0, 0, 0, 0.07);
    border-radius: 16px;
  }

  &__btn {
    font-family: 'SFUIText';
    margin: 240px auto 0;
    width: 298px;
    height: 75px;
    background: #38A3F1;
    box-shadow: 0 10.2838px 13.7118px rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    font-size: 27px;
    line-height: 33px;
    color: #FFFFFF;
  }
}




.default {
  border-bottom: 2px solid #EEEFF2;
}

.is-invalided {
  border-bottom: 2px solid #FE2A2A;
}

.is-valid {
  border-bottom: 2px solid #54DD83;
}

.form-btn-active {
  background: linear-gradient(180deg, #EF2779 0%, #7834BE 100%);
  color: #FCFCFC;
}

.btn-disable {
  background: #D3D3D3;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.05);
}

.btn-disable:hover {
  transform: scale(1);
  cursor: auto;
}
</style>