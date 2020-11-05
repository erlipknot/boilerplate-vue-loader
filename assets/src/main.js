import { zdActions } from './modules/ZDClient.js';

document.addEventListener('DOMContentLoaded', async () => {
  const initVueApp = () => {
    new Vue({
      el: '#zd-app',
      components: {
        'app-main': httpVueLoader('./src/components/app-main.vue')
      }
    });
  };

  zdActions.init();
  await zdActions.setAppSettings();
  initVueApp();
});