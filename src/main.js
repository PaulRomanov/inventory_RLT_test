import { createApp } from 'vue';
import App from './App.vue';
import { pinia } from './store/store'; 
import { useInventoryStore } from './store/store';

const app = createApp(App);

// Восстановление состояния из LocalStorage при загрузке
useInventoryStore(pinia).restoreState();

app.use(pinia); 

app.mount('#app');

// Сохранение состояния в LocalStorage при закрытии
window.addEventListener('beforeunload', () => {
  useInventoryStore(pinia).saveState();
});