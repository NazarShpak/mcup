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
          @click="$emit('closeOrderForm')"
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
      return this.name && this.phone && this.quantity && this.checkName() && this.checkPhone()
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
    async submitForm() {
      try {
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
        const url = ''
        await fetch(url, request)
      } catch (error) {
        console.error('Fetch error: ', error);
      }

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
  font-family: 'SFUIText';

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

  &__btn-close {
    cursor: pointer;
    position: absolute;
    right: 30px;
    height: 25px;
    width: 25px;
    transition: all .5s;
  }

  &__btn-close:hover {
    transform: scale(1.05);
    transition: all .5s;
  }

  &__form-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 37px;
    color: #2C2C2C;
    margin-bottom: 32px;
  }

  &__form-label {
    text-align: left;
    font-weight: 700;
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
    font-size: 26.4px;
    line-height: 39px;
    background: #FFFFFF;
    border: 1.6px solid #DEDEDE;
    box-sizing: border-box;
    box-shadow: 0 20.9736px 30.6537px rgba(0, 0, 0, 0.07);
    border-radius: 16px;
  }

  &__btn {
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
  border-bottom: 2.5px solid #EEEFF2;
}

.is-invalided {
  border-bottom: 2.5px solid #FE2A2A;
}

.is-valid {
  border-bottom: 2.5px solid #54DD83;
}

@media (max-width: 428px) {
  .order-form {
    height: 512px;
    width: 350px;
    box-shadow: 0 18.6106px 24.8142px rgba(0, 0, 0, 0.04), 0 12.4071px 18.6106px rgba(0, 0, 0, 0.04), 0 3.10177px 6.20355px rgba(0, 0, 0, 0.04), 0 0 0.775443px rgba(0, 0, 0, 0.04);
    border-radius: 7.7px;

    &__form {
      padding: 20px 35px;
    }

    &__btn-close {
      right: 20px;
      height: 15px;
      width: 15px;
    }

    &__form-title {
      font-size: 16px;
      line-height: 23px;
      margin-bottom: 19px;
    }

    &__form-label {
      font-size: 19px;
      line-height: 23px;
    }

    &__form-label + &__form-label {
      margin-top: 33px;
    }

    &__form-input,
    &__input::placeholder {
      margin-top: 16px;
      padding: 5px;
      font-size: 16px;
      line-height: 23px;
      border-bottom: 2px solid #EEEFF2;
    }

    &__form-btns {
      top: 40px;
      width: 317px;
    }

    &__form-btn {
      height: 92px;
      width: 102px;
      font-size: 16px;
      line-height: 24px;
      border: 1px solid #DEDEDE;
      box-shadow: 0 9.48899px 13.8685px rgba(0, 0, 0, 0.07);
      border-radius: 7px;
    }

    &__btn {
      margin: 145px auto 0;
      width: 184px;
      height: 46px;
      box-shadow: 0 4.65266px 6.20355px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      font-size: 17px;
      line-height: 20px;
    }
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

@media (max-width: 390px) {
  .order-form {
    height: 409px;
    width: 280px;
    box-shadow: 0 14.8985px 19.8646px rgba(0, 0, 0, 0.04), 0 9.93231px 14.8985px rgba(0, 0, 0, 0.04), 0 2.48308px 4.96615px rgba(0, 0, 0, 0.04), 0 0 0.620769px rgba(0, 0, 0, 0.04);
    border-radius: 6px;

    &__form {
      padding: 15px 28px;
    }

    &__btn-close {
      right: 15px;
      height: 10px;
      width: 10px;
    }

    &__form-title {
      font-size: 12px;
      line-height: 19px;
      margin-bottom: 16px;
    }

    &__form-label {
      font-size: 15.5px;
      line-height: 19px;
    }

    &__form-label + &__form-label {
      margin-top: 22px;
    }

    &__form-input,
    &__input::placeholder {
      margin-top: 10px;
      font-size: 12px;
      line-height: 19px;
      border-bottom: 1.2px solid #EEEFF2;
      padding: 3px;
    }

    &__form-btns {
      top: 35px;
      width: 254px;
    }

    &__form-btn {
      height: 74px;
      width: 82px;
      font-size: 13px;
      line-height: 19px;
      border: 0.8px solid #DEDEDE;
      box-sizing: border-box;
      box-shadow: 0 7.59626px 11.1022px rgba(0, 0, 0, 0.07);
      border-radius: 6px;
    }

    &__btn {
      margin: 130px auto 0;
      width: 147px;
      height: 36px;
      box-shadow: 0 3.72461px 4.96615px rgba(0, 0, 0, 0.05);
      border-radius: 3.5px;
      font-size: 14px;
      line-height: 17px;
    }
  }
}

.default {
  border-bottom: 1.2px solid #EEEFF2;
}

.is-invalided {
  border-bottom: 1.2px solid #FE2A2A;
}

.is-valid {
  border-bottom: 1.2px solid #54DD83;
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