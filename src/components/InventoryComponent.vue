<template>
  <div class="inventory">
    <div class="grid">
      <div v-for="(item, index) in inventoryGrid" :key="index" class="cell">
        <div :class="item ? item.colorClass : 'empty-cell'" v-if="item">
          <InventoryItem :item="item" @remove-item="removeItem(index)">
            <template v-slot:styleSlot>
              <div class="wrapper_color-block">
                <div
                  class="color-block color-block-background"
                  :class="item ? item.colorClass : 'transparent-color'"
                ></div>
                <div
                  class="color-block"
                  :class="item ? item.colorClass : 'transparent-color'"
                ></div>
              </div>
            </template>
          </InventoryItem>
        </div>
        <div class="empty-cell" v-else></div>
      </div>
    </div>
    <button
      @click="addNewItem"
      class="add-item-button"
      :class="{ 'disabled-button': inventoryFull }"
      :disabled="inventoryFull"
    >
      Добавить новый предмет
    </button>
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
    inventoryFull() {
      // Проверяем, заполнен ли инвентарь
      return this.inventoryGrid.filter((item) => item !== null).length >= 25;
    },
  },
  methods: {
    addNewItem() {
      // Проверяем, заполнен ли инвентарь перед добавлением нового предмета
      if (!this.inventoryFull) {
        // Создание нового предмета и добавление его в инвентарь
        const newItem = {
          name: "Новый предмет",
          description: "Описание нового предмета",
          colorClass: `item-color-${Math.floor(Math.random() * 3) + 1}`, // Генерация случайного класса цвета
        };
        this.inventoryStore.addItem(newItem);
      }
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
.add-item-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  width: 200px;
  transition: background-color 0.3s ease;
}

.disabled-button {
  background-color: #ccc;
  cursor: not-allowed;
  pointer-events: none;
}
.inventory {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  border: 1px solid #000;
  background-color: #262626;
  box-sizing: border-box;
  border-radius: 2%;
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
  grid-gap: 50px;
  margin-bottom: 80px;
}

.cell {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.empty-cell {
  width: 100px;
  height: 100px;
}
.item-color-1 {
  background-color: #AA9765;
}

.item-color-2 {
  background-color: #7FAA65;
}

.item-color-3 {
  background-color: #656CAA;
}
.wrapper_color-block {
  position: relative;
  width: 100px;
  height: 100px;
}
.color-block {
  position: absolute;
  width: 100%;
  height: 100%;
}
.color-block-background {
  position: absolute;
  top: -8px;
  left: 8px;
  opacity: 0.35;
  width: 100%;
  height: 100%;
}
</style>
