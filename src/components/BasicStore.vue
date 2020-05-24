<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
  import { useStore } from 'vuex';
  import { ref, computed } from 'vue';

  export default {
    setup(props) {
      const store = useStore();
      const count = computed(() => store.state.counter.value);

      const increment = () => store.dispatch('counter/increment', 1);
      const decrement = () => store.dispatch('counter/decrement', 1);

      return { count, increment, decrement };
    },
  };
</script>

<style lang="scss" scoped>
</style>
