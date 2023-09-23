import { createPinia } from 'pinia';
import { defineStore } from "pinia";

export const pinia = createPinia();

export const useInventoryStore = defineStore('inventory', {
  state: () => ({
    items: [
      { name: "Item 1", description: "Описание предмета 1", colorClass: "item-color-1" },
      { name: "Item 2", description: "Описание предмета 2", colorClass: "item-color-2" },
      { name: "Item 3", description: "Описание предмета 3", colorClass: "item-color-3" }
    ],
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
        try {
          this.$state = JSON.parse(storedState);
        } catch (error) {
          console.error('Error parsing stored state:', error);
        }
      }
    },
  },
});
