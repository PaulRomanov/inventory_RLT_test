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
  },
});

