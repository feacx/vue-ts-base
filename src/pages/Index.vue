<template>
  <div class="text-red-500">
    你永远是我的{{name}}，{{name.repeat(2)}}，{{name.repeat(2)}}！
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const name = ref('宝贝');
    return {
      name,
    };
  },
});
</script>

<style scoped>

</style>
