<template>
  <div class="category">
    <h2>{{ category.name }}</h2>
    <ul>
      <li v-for="site in category.sites" :key="site.url">
        <strong>{{ site.name }}</strong> - {{ site.url }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    category: Object
  }
};
</script>

<style>
/* Adicione estilos conforme necessário */
</style>
