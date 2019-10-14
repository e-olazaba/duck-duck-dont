<template>
  <div class="todonts-wrapper">
    <div class="hole-punch"></div>
    <div class="todonts">
      <div class="page-header"></div>
      <div class="todont" v-for="(todont, index) of todonts" :key="index">
        <input :id="`${index}`" type="checkbox" :checked="todont.checked" />
        <label :for="`${index}`">{{ todont.name }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDontList',
  computed: {
    todonts() {
      return this.$store.state.todonts;
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
    width: 55px;
    background: #f7f4ed;
    background-image: repeating-linear-gradient(
      180deg,
      #f7f4ed 0px,
      #f7f4ed 52px,
      #7aafff 52px,
      #7aafff 54px
    );
    border-right: 2px solid #e7847e;
  }

  .todonts {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #f7f4ed;
    border-radius: 0px 30px 30px 0px;
    background-image: repeating-linear-gradient(
      180deg,
      #f7f4ed 0px,
      #f7f4ed 52px,
      #7aafff 52px,
      #7aafff 54px
    );

    .page-header {
      height: 60px;
      width: 100%;
    }

    .todont {
      width: 100%;
      padding-left: 20px;
      text-align: left;

      label {
        font-family: 'La Belle Aurore', cursive;
        font-size: 2rem;
        color: #000;
      }
    }
  }
}
</style>
