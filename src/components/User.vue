<template>
  <h3>{{ title }}</h3>
  <button @click="fetchUsers">{{ label }}</button>
  <ul v-if="users.length">
    <li v-for="user in users">{{ user.first_name }}</li>
  </ul>
</template>

<script>
  import { useFetch } from '../composition/fetcher';
  import { toRefs } from 'vue';

  export default {
    props: {
      label: String,
      title: String
    },
    setup(props) {
      console.log(toRefs(props))
      const {
        loading,
        error,
        data: users,
        fetchData: fetchUsers,
      } = useFetch();
      return { loading, error, users, fetchUsers };
    },
  };
</script>

<style lang="scss" scoped>

</style>
