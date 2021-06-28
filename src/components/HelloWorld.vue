<template>
  <div class="hello">
    <h3>Filter LearnVue Articles</h3>
    <input type='text' placeholder='Filter Search' v-model='query'/>
    <search-results :query="query"></search-results>
    <button @click="reset">Reset</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import SearchResults from './SearchResults.vue';

export default defineComponent({
  name: 'HelloWorld',
  components: {
    SearchResults,
  },
  setup() {
    const query = ref('');
    const reset = () => {
      query.value = '';
    };
    onMounted(() => {
      console.log('当前');
    });

    return {
      query,
      reset,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
