import { createPinia } from 'pinia';
import { defineStore } from "pinia";

export const pinia = createPinia();

export const useInventoryStore = defineStore('inventory', {
  state: () => ({
    items: [],
  }),
  actions: {
    addItem(item) {
      this.items.push(item);
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },

    saveState() {
      const state = JSON.stringify(this.$state);
      localStorage.setItem('inventoryState', state);
    },
    restoreState() {
      const storedState = localStorage.getItem('inventoryState');
      if (storedState) {
        this.$state = JSON.parse(storedState);
      }
    },
  },
});

