<template>
  <div>
    <div>
      Count: {{ n }}
      <button @click="increment">Increment</button>
    </div>
    <br>
    <div>
      Count: {{ n2 }}
      <button @click="increment2">Increment</button>
    </div>
    <br>
    <div>
      Auto: {{ auto }} <br>
      Double auto: {{ computed1 }} <br>
      triple auto: {{ computed2 }} <br>
    </div>
  </div>
</template>

<script>
  import { useIncrement, useAutoIncrement } from '../composition/increment.js';
  import { useComputedIncrement } from '../composition/increment';

  export default {
    setup(props) {
      const [n, increment] = useIncrement();
      const [n2, increment2] = useIncrement(2);
      const auto = useAutoIncrement();
      const [computed1, computed2] = useComputedIncrement();
      return {
        n,
        increment,
        n2,
        increment2,
        auto,
        computed1,
        computed2,
      };
    },
  };
</script>

