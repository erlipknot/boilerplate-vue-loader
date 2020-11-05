import ZDClient from './modules/ZDClient.js';

document.addEventListener('DOMContentLoaded', () => {
  const initVueApp = () => {
    new Vue({
      el: '#zd-app',
      components: {
        'app-main': httpVueLoader('./src/components/app-main.vue')
      }
    });
  };

  ZDClient.init();
  ZDClient.events['ON_APP_REGISTERED'](initVueApp);
});