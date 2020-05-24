import { createStore } from 'vuex';
import counter from './counter';
import users from './users';

export default createStore({
  modules: { counter, users },
});
