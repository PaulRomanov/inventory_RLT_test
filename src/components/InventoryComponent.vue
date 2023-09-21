<template>
  <div class="inventory">
    <div v-for="row in 5" :key="row" class="row">
      <div v-for="col in 5" :key="col" class="square">
        <InventoryItem />
      </div>
    </div>
  </div>
</template>

<script>

import InventoryItem from "./InventoryItem.vue";

export default {
  name: "InventoryComponent",
  components: {
    InventoryItem,
  },
  data() {
    return {
      activeItem: null, 
    };
  },
  methods: {
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
  width: 300px; 
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
</style>
