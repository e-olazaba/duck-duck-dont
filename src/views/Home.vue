<template>
  <div class="home">
    <ToDontList />
  </div>
</template>

<script>
import ToDontList from '@/components/ToDontList.vue';

export default {
  name: 'home',
  components: {
    ToDontList
  }
}
</script>

<style scoped lang="scss">
.home {
  display: flex;
  justify-content: center;
  height: 100%;
}
</style>