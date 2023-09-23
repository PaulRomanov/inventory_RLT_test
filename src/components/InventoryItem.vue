<template>
  <div class="inventory-item" :class="item.colorClass" @click="toggleDescription">
    <div class="inventory-item inventory-item-background" :class="item.colorClass"></div>
    <div
      class="description"
      :class="{ 'show-description': showDescription }"
      @click.stop="preventClose"
    >
      <slot name="styleSlot"></slot>
      <span class="close-button" @click.stop="closeDescription">&times;</span>
      <p v-if="item">{{ item.description }}</p>
      <button @click.stop="removeItem" class="remove-item-btn">Удалить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InventoryItem",
  props: {
    item: Object,
  },
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
      this.closeDescription();
      this.$emit("remove-item");
    },
    preventClose(event) {
      event.stopPropagation();
    },
  },
};
</script>

<style lang="scss" scoped>
.inventory-item {
  position: relative;
  width: 100px;
  height: 100px;
  cursor: pointer;
}
  .inventory-item-background {
    position: absolute;
    background-color: inherit;
    box-sizing: border-box;
    opacity: 0.35; 
    top: -8px;
    left: 8px;
  }

  .description {
  position: fixed;
  top: 0;
  right: 0;
  width: 0;
  height: 80%;
  background-color: #262626;
  border: 1px solid #ccc;
  padding: 60px 10px;
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
  width: 40%;
  height: 74%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7px;
  margin-right: 8px;
  z-index: 100;
  cursor: default;
  color: aliceblue;
  border-top-right-radius: 10px; 
  border-bottom-right-radius: 10px; 
}
.remove-item-btn {
  background-color: #fa7272;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
