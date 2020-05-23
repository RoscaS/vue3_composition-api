<template>
  <h2>Example 1</h2>
  <Counter/>
  <hr>
  <h2>Example 2</h2>
  <User label="Demo" title="Fetch"/>
  
</template>

<script>
import Counter from './components/Counter.vue';
import User from './components/User.vue';

export default {
  name: 'Modal',
  components: { User, Counter },
};
</script>
