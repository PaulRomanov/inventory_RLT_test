<template>
  <div class="inventory-item" @click="toggleDescription">
    <div class="description" :class="{ 'show-description': showDescription }">
      <p>{{ description }}</p>
      <button @click="removeItem">Удалить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InventoryItem",
  created() {},
  data() {
    return {
      showDescription: false, 
      description: "Описание предмета", 
    };
  },
  methods: {
    toggleDescription() {
      this.showDescription = !this.showDescription;
    },
    removeItem() {
      this.$emit("remove-item");
      this.showDescription = false; 
    },
  },
};
</script>

<style lang="scss" scoped>
.inventory-item {
  position: relative;
  width: 40px; 
  height: 40px; 
  background-color: #ccc; 
  border: 1px solid #000; 
  box-sizing: border-box;
}

.description {
  position: fixed; 
  top: 0;
  right: 0; 
  width: 0;
  height: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: block;
  overflow: hidden; 
  transition: width 0.3s ease-in-out; 
}

.description p {
  margin: 0;
}

.description button {
  margin-top: 10px;
}

.show-description {
  width: 300px; 
}


</style>
