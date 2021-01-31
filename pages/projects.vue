<template>
  <div class="projects">
    <div class="projects__title">Projects</div>
    <div class="projects__label">UI/UX</div>
    <div class="projects__box">
      <a
        href="https://www.figma.com/proto/zT8EYfcR6oVpQ9rYEQq8M6/BerylBox?node-id=30%3A32&scaling=min-zoom"
        target="_blank"
      >
        <img src="~/assets/pro1.svg" alt="" />
      </a>
      <a href="https://cosi-travel.herokuapp.com/" target="_blank">
        <img src="~/assets/pro14.svg" alt="" />
      </a>
      <img src="~/assets/pro5.svg" alt="" />
      <a href="https://authorshaven-client.herokuapp.com/" target="_blank">
        <img src="~/assets/pro9.svg" alt="" />
      </a>
      <a href="https://ireporter-app.herokuapp.com/" target="_blank">
        <img src="~/assets/pro10.svg" alt="" />
      </a>
    </div>
    <div class="projects__label">DEV</div>
    <div class="projects__box">
      <a href="https://www.getquin.com/" target="_blank">
        <img src="~/assets/pro6.svg" alt="" />
      </a>
      <a href="https://mytudo.com/" target="_blank">
        <img src="~/assets/pro7.svg" alt="" />
      </a>
      <a href="https://omnibiz.com/" target="_blank">
        <img src="~/assets/pro8.svg" alt="" />
      </a>
      <a href="https://healthid-fe.herokuapp.com/" target="_blank">
        <img src="~/assets/pro11.svg" alt="" />
      </a>
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
    @media (max-width: 822px) {
      justify-content: center;
    }
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
