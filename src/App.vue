<template>
  <div id="app">
    <!-- Sidebar -->
    <div class="sidebar">
      <div v-for="(category, index) in categories" :key="index" class="category">
        <h2>{{ category.name }}</h2>
        <ul>
          <li v-for="site in category.sites" :key="site.url">
            <strong>{{ site.name }}</strong> - {{ site.url }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Main content goes here -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      categories: [
        { name: 'Esporte', sites: [] },
        { name: 'Saúde', sites: [] },
        { name: 'Trabalho', sites: [] },
        { name: 'Tecnologia', sites: [] },
        { name: 'Religião', sites: [] }
      ]
    };
  }
};
</script>

<style>
/* Adicione estilos conforme necessário */
</style>
