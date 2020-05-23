import { reactive, toRefs } from 'vue';
import { api } from '../helpers/api';


export function useFetch() {
  const state = reactive({
    loading: false,
    data: [],
    error: false,
  });

  const fetchData = async function () {
    state.loading = true;

    try {
      state.data = await api('https://roscas.ch/api/users');
    } catch (e) {
      if (e instanceof NotFoundError) {
        state.error = 'Page not found';
      }
    }
    state.loading = false;
  };

  return { ...toRefs(state), fetchData };
}
