<template>
  <div class="wrapper">
    <div class="content">
      <SkeletonComponent />
      <InventoryComponent />
    </div>
    <Skeleton2Component />
  </div>
</template>

<script>
import SkeletonComponent from "@/components/SkeletonComponent.vue";
import InventoryComponent from "@/components/InventoryComponent.vue";
import Skeleton2Component from "@/components/Skeleton2Component.vue";

export default {
  name: "App",
  components: {
    SkeletonComponent,
    InventoryComponent,
    Skeleton2Component,
  },
};
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column; 
  padding: 20px;
  background-color: #f0f0f0;
  height: 100vh; 
}

.content {
  display: flex;
  align-items: center; 
  height: 90%;
}
</style>
