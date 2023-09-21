<template>
  <div class="inventory-item" @click="toggleDescription">
    <div class="description" :class="{ 'show-description': showDescription }">
      <span class="close-button" @click.stop="closeDescription">&times;</span>
      <p>{{ description }}</p>
      <button @click.stop="removeItem">Удалить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InventoryItem",
  data() {
    return {
      showDescription: false,
      description: "Описание предмета",
    };
  },
  methods: {
    toggleDescription() {
      if (this.$parent.activeItem !== this) {
        this.$parent.closeActiveItem();
        this.$parent.activeItem = this;
        this.showDescription = true;
      } else {
        this.showDescription = !this.showDescription;
      }
    },
    closeDescription() {
      this.$parent.closeActiveItem();
    },
    removeItem() {
      this.$parent.closeActiveItem();
      this.$emit("remove-item");
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
  overflow: hidden;
  transition: width 0.3s ease-in-out, display 0.3s ease-in-out; 
  display: none;
}
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  color: #ccc;
}
.description p {
  margin: 0;
}

.description button {
  margin-top: 10px;
}

.show-description {
  width: 300px;
  display: block; 
}
</style>