import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// Accessing browsing history and categorizing sites
chrome.history.search({ text: '', maxResults: 100 }, function (data) {
  const categories = [
    { name: 'Esporte', sites: [] },
    { name: 'Saúde', sites: [] },
    { name: 'Trabalho', sites: [] },
    { name: 'Tecnologia', sites: [] },
    { name: 'Religião', sites: [] }
  ];

  data.forEach(function (page) {
    let site = { name: page.title, url: page.url };

    if (containsKeyword(page.url, 'esporte')) {
      addToCategory('Esporte', site);
    } else if (containsKeyword(page.url, 'saude')) {
      addToCategory('Saúde', site);
    } else if (containsKeyword(page.url, 'trabalho')) {
      addToCategory('Trabalho', site);
    } else if (containsKeyword(page.url, 'tecnologia')) {
      addToCategory('Tecnologia', site);
    } else if (containsKeyword(page.url, 'religiao')) {
      addToCategory('Religião', site);
    }
  });

  function containsKeyword(url, keyword) {
    return url.toLowerCase().includes(keyword);
  }

  function addToCategory(categoryName, site) {
    let category = categories.find(cat => cat.name === categoryName);
    if (category) {
      category.sites.push(site);
    }
  }
});
