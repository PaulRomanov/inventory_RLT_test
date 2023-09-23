<template>
  <div class="inventory">
    <button @click="addNewItem">Добавить новый предмет</button>
    <div class="grid">
      <div v-for="(item, index) in inventoryGrid" :key="index" class="cell">
        <InventoryItem :item="item" @remove-item="removeItem(index)" v-if="item" />
        <div class="empty-cell" v-else></div>
      </div>
    </div>
  </div>
</template>

<script>
import InventoryItem from "./InventoryItem.vue";
import { useInventoryStore } from "@/store/store";

export default {
  name: "InventoryComponent",
  components: {
    InventoryItem,
  },
  data() {
    return {
      activeItem: null,
      inventoryStore: useInventoryStore(),
    };
  },
  computed: {
    // для формирования сетки инвентаря
    inventoryGrid() {
      const grid = [];
      const items = this.inventoryStore.items;

      // Заполняем сетку предметами из инвентаря
      for (let i = 0; i < 25; i++) {
        if (items[i]) {
          grid.push(items[i]);
        } else {
          // Если предмета нет, добавляем пустой объект
          grid.push(null);
        }
      }

      return grid;
    },
  },
  methods: {
    addNewItem() {
      // Создание нового предмета и добавление его в инвентарь
      const newItem = { name: "Новый предмет", description: "Описание нового предмета" };
      this.inventoryStore.addItem(newItem);
    },
    removeItem(index) {
      // Удаляем предмет только, если он существует в инвентаре
      const itemToRemove = this.inventoryStore.items[index];
      if (itemToRemove) {
        this.inventoryStore.removeItem(index);
      }
    },
    closeActiveItem() {
      if (this.activeItem) {
        this.activeItem.showDescription = false;
        this.activeItem = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.inventory {
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  border: 1px solid #000;
}

.row {
  display: flex;
  width: 100%;
}

.square {
  width: 20%;
  padding: 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  text-align: center;
}
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
}

.cell {
  width: 60px; 
  height: 60px; 
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}

.empty-cell {
  width: 60px; 
  height: 60px;
  border: 1px solid #ccc;
}
</style>

