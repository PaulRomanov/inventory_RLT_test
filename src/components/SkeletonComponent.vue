<template>
  <div class="wrapper">
  <img src="../assets/Img.png" alt="img.png">
  
  </div>
</template>

<script>
export default {
  name: "SkeletonComponent",

};
</script>

<style lang="scss" scoped>
.wrapper{
  background-color: #262626;
  border-radius: 2%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 20px;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
}
</style>