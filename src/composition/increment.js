import { ref, onMounted, onUnmounted, computed } from 'vue';

export function useIncrement(step = 1) {
  const n = ref(0);
  const increment = function () {
    n.value += step;
  };
  return [n, increment];
}

export function useAutoIncrement(step = 1) {
  const n = ref(0);
  let timer = null;

  onMounted(() => {
    timer = window.setInterval(() => {
      n.value++;
    }, 1000);
  });

  onUnmounted(() => {
    if (timer !== null) {
      window.clearInterval(timer);
      timer = null;
    }
  });

  return n;
}

export function useComputedIncrement() {
  const n = useAutoIncrement();

  return [
    computed(() => n.value * 2),
    computed(() => n.value * 3)
  ];
}
