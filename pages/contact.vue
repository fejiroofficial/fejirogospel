<template>
  <div class="contact">
    <div class="contact__info">
      <div class="contact__info-title">
        <div>Get in touch</div>
        <img src="~/assets/coffee.svg" alt="coffee cup" />
      </div>
      <div class="contact__info-body">
        <p>Want to work together or have any questions?</p>
        <a href="mailto:fejiro.gospel@gmail.com">
          <button class="contact__btn">Say Hello</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contact {
  display: grid;
  height: 70vh;
  &__info {
    grid-column: 3/9;
    grid-row: 4/10;
  }
  &__info-title {
    display: flex;
    font-family: Sail;
    font-style: normal;
    font-weight: normal;
    font-size: 55px;
    line-height: 63px;
    color: #000000;
    & img {
      margin-left: 15px;
    }
    @media (max-width: 440px) {
      font-size: 40px;
    }
  }
  &__info-body {
    display: grid;
    width: fit-content;
    justify-items: center;
  }
  &__btn {
    color: white;
    width: 94px;
    height: 43px;
    background-color: #ea7b02;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: rgb(204, 106, 0);
    }
  }
}
</style>
