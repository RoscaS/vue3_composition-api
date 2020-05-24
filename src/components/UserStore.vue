<template>
  <input v-model="input" type="text">
  <button @click="addUser">add</button>
  <ul v-if="users.length">
    <li v-for="user in users">{{ user }}</li>
  </ul>
</template>

<script>
  import { useStore } from 'vuex';
  import { ref, computed, watch } from 'vue';


  export default {
    setup(props) {
      const input = ref('');
      watch(input, (val, newVal) => console.log(val));
      
      
      const store = useStore();
      const users = computed(() => store.state.users.value);
      const addUser = () => store.dispatch('users/add', input.value);

      return { input, users, addUser };
    },
  };
</script>

W
