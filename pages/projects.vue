<template>
  <div class="projects">
    <div class="projects__title">Projects</div>
    <div class="projects__label">UI/UX</div>
    <div class="projects__box">
      <img src="~/assets/pro1.svg" alt="" />
      <img src="~/assets/pro14.svg" alt="" />
      <img src="~/assets/pro5.svg" alt="" />
      <img src="~/assets/pro9.svg" alt="" />
      <img src="~/assets/pro10.svg" alt="" />
    </div>
    <div class="projects__label">DEV</div>
    <div class="projects__box">
      <img src="~/assets/pro6.svg" alt="" />
      <img src="~/assets/pro7.svg" alt="" />
      <img src="~/assets/pro8.svg" alt="" />
      <img src="~/assets/pro11.svg" alt="" />
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
  &__label {
    background-color: white;
    width: fit-content;
    border-top-right-radius: 7px;
    box-shadow: 0px 0px 23px 3px lightgrey;
  }
  &__box {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
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
