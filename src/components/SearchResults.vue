<template>
  <div class='root'>
    <p> Showing {{ filteredTitles.length }} results for "{{ query }}" </p>
    <ul>
      <li v-for='(title, index) in filteredTitles' :key='index'>
        {{ title.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

const titles = [
  {
    name: 'China',
  }, {
    name: 'American',
  }, {
    name: 'England',
  }, {
    name: 'Canada',
  },
];

export default defineComponent({
  props: {
    query: {
      default: String,
    },
  },
  setup(props) {
    // eslint-disable-next-line arrow-body-style
    const filteredTitles = computed(() => {
      return titles.filter((t) => t.name.toLowerCase().includes(props.query.toLowerCase()));
    });
    return {
      filteredTitles,
    };
  },
});
</script>

<style scoped>

</style>
