<template>
  <div class="egg">
    <div class="goose-gif"></div>
  </div>
</template>

<script>
export default {
  name: 'egg',
}
</script>

<style scoped lang="scss">
.egg {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30%;

  .goose-gif {
    width: 90%;
    height: 70%;
    margin: 0 auto;
    border: 6px solid #FFFFFF;
    background-image: url('/img/goose_gif-01-wimp_bottle.gif');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
}

@media screen and (min-width: 540px) {
  .egg {
    height: 50%;

    .goose-gif {
      height: 80%;
    }
  }
}
</style>
