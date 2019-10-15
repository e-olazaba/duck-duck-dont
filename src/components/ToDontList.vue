<template>
  <div class="todonts-wrapper">
    <div class="hole-punch"></div>
    <div class="todonts">
      <div class="page-header"></div>
      <div class="todont">
        <label><strong>TO NOT DO:</strong></label>
      </div>
      <div class="todont" v-for="(todont, index) of todonts" :key="index">
        <input :id="`${index}`" type="checkbox" :checked="todont.checked" />
        <label :for="`${index}`">{{ todont.name }}</label>
      </div>
      <div class="todont">
        <input
        class="new-todont"
        id="new-todont"
        type="text"
        aria-label="new to dont"
        aria-labelledby="new to dont"
        v-model="newTodont"
        @keyup.enter="addNewTodont"
        autocomplete="off"
      />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDontList',
  data: function () {
    return {
      newTodont: ''
    };
  },
  computed: {
    todonts() {
      return this.$store.state.todonts;
    }
  },
  methods: {
    addNewTodont() {
      if (this.newTodont) {
        this.$store.commit('addTodont', this.newTodont);
        this.newTodont = '';
      }
    }
  }
}
</script>

<style scoped lang="scss">
.todonts-wrapper {
  display: flex;
  justify-content: center;
  width: 90%;

  .hole-punch {
    width: 35px;
    background: #F9F9F9;
    background-image: repeating-linear-gradient(
      180deg,
      #F9F9F9 1px,
      #F9F9F9 39px,
      #7aafff 39px,
      #7aafff 40px
    );
    border-right: 2px solid #e7847e;
  }

  .todonts {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #F9F9F9;
    border-radius: 0px 30px 30px 0px;
    background-image: repeating-linear-gradient(
      180deg,
      #F9F9F9 1px,
      #F9F9F9 39px,
      #7aafff 39px,
      #7aafff 40px
    );

    .page-header {
      height: 41px;
      width: 100%;
    }

    .todont {
      width: 100%;
      padding: 0 10px;
      text-align: left;
      user-select: none;

      label {
        font-family: 'La Belle Aurore', cursive;
        font-size: 1.5rem;
        color: #000;
      }

      .new-todont {
        font-family: 'La Belle Aurore', cursive;
        font-size: 1.5rem;
        background: transparent;
        border: none;
        padding: 0;
        margin-left: 5px;
        width: 90%;
        color: #333333;

        &:focus {
          outline: none;
        }
      }
    }
  }
}

@media screen and (min-width: 640px) {
  .todonts-wrapper {
    .hole-punch {
      width: 55px;

      background-image: repeating-linear-gradient(
        180deg,
        #F9F9F9 1px,
        #F9F9F9 52px,
        #7aafff 52px,
        #7aafff 53px
      );
    }

    .todonts {
      background-image: repeating-linear-gradient(
        180deg,
        #F9F9F9 1px,
        #F9F9F9 52px,
        #7aafff 52px,
        #7aafff 53px
      );

      .page-header {
        height: 55px;
      }

      .todont {
        padding: 0 20px;

        label {
          font-size: 2rem;
        }
      }
    }
  }
}
</style>
