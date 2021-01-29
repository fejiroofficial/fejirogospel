<template>
  <div class="projects">
    <div class="projects__title">Projects</div>
    <div class="projects">UI/UX</div>
    <div class="projects__box">
      <img src="~/assets/pro1.svg" alt="" />
      <img src="~/assets/pro4.png" alt="" />
      <img src="~/assets/pro5.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.projects {
  font-family: 'Poppins';
  &__title {
    margin-top: 30px;
    font-family: Sail;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 63px;
    color: #000000;
  }
  &__box {
    display: flex;
    flex-wrap: wrap;
    & img {
      width: 370px;
      height: 370px;
      @media (max-width: 822px) {
        width: 100%;
      }
    }
  }
}
</style>
