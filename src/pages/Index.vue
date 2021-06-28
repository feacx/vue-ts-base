<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap bg-gray-100">
      <div class="flex flex-col w-2/4 flex-none p-2 space-y-2">
        <div class="flex items-center h-20 rounded-lg bg-pink-600">
          <div class="w-full">1</div>
        </div>
        <div class="flex items-center h-20 rounded-lg bg-red-300">
          <div class="w-full">1</div>
        </div>
      </div>
      <div class="w-2/4 flex-none p-2">
        <div class="h-20 rounded-lg bg-opacity-100 bg-green-600">2</div>
      </div>
      <div class="w-2/4 flex-none p-2">
        <div class="h-16 rounded-lg bg-opacity-100 bg-indigo-600">3</div>
      </div>
    </div>
    <div class="text-red-100">
      <!-- 你永远是我的{{name}}，{{name.repeat(2)}}，{{name.repeat(2)}}！ -->
      <div class="box-content h-32 w-32 p-4 border-4 ...">
        hoo
      </div>
    </div>
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
