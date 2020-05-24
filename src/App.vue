<template>
  <h2>Example 1</h2>
  <Counter/>
  <hr>
  <h2>Example 2: Fetch</h2>
  <User label="Demo" title="Fetch"/>
  <hr>
  <h2>Example 3: Vuex</h2>
  <StoreComponent/>
  <hr>
  <h2>Example 4: Vuex</h2>
  <UserStore />
  
</template>

<script>
import Counter from './components/Counter.vue';
import User from './components/User.vue';
import StoreComponent from './components/BasicStore.vue';
import UserStore from './components/UserStore.vue';

export default {
  name: 'Modal',
  components: { UserStore, StoreComponent, User, Counter },
};
</script>
