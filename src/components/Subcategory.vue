<template>
  <div class="subcategory">
    <h3>{{ subcategory.name }}</h3>
    <ul>
      <li v-for="site in subcategory.sites" :key="site.url">
        <strong>{{ site.name }}</strong> - {{ site.url }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    subcategory: Object
  }
};
</script>

<style>
/* Adicione estilos conforme necessário */
</style>
